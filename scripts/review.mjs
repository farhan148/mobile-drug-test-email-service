// Headless email review. Usage: node scripts/review.mjs <campaign-folder>
import { spawnSync } from "node:child_process";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";

// On Windows, npm installs claude as a .cmd file, and a shell would mangle the JSON schema quotes.
// So run the real claude.exe directly when we can find it.
function findClaude() {
  if (process.platform !== "win32") return "claude";
  const where = spawnSync("where", ["claude.cmd"], { encoding: "utf8" });
  const cmd = where.stdout?.split(/\r?\n/)[0]?.trim();
  if (cmd) {
    const exe = join(dirname(cmd), "node_modules", "@anthropic-ai", "claude-code", "bin", "claude.exe");
    if (existsSync(exe)) return exe;
  }
  return "claude";
}

const folder = process.argv[2];
if (!folder) {
  console.error("Usage: node scripts/review.mjs <campaign-folder>");
  process.exit(2);
}

const schema = JSON.stringify(JSON.parse(readFileSync("review/findings.schema.json", "utf8")));
const prompt =
  `Review every email in ${folder} against brand/voice.md and .claude/rules/emails.md. Report only real problems.`;

const run = spawnSync(
  findClaude(),
  ["-p", prompt, "--output-format", "json", "--json-schema", schema, "--allowedTools", "Read,Glob,Grep"],
  { encoding: "utf8", maxBuffer: 50 * 1024 * 1024 }
);
if (run.status !== 0) {
  console.error("claude failed:", run.stderr || run.error);
  process.exit(2);
}

let out;
try {
  out = JSON.parse(run.stdout);
} catch {
  console.error("Could not parse claude output as JSON.");
  process.exit(2);
}
const result = Array.isArray(out) ? out[out.length - 1] : out;
const findings = result?.structured_output?.findings;
if (!Array.isArray(findings)) {
  console.error("No structured_output.findings in result.");
  process.exit(2);
}

mkdirSync("review", { recursive: true });
writeFileSync("review/findings.json", JSON.stringify({ findings }, null, 2) + "\n");

const count = (s) => findings.filter((f) => f.severity === s).length;
const high = count("high");
console.log(`${folder}: ${findings.length} findings (high ${high}, medium ${count("medium")}, low ${count("low")})`);
process.exit(high > 0 ? 1 : 0);
