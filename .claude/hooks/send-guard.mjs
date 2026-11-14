// PreToolUse hook: only allow Resend sends to @resend.dev or the owner's own address.
// Exit 0 = allow. Exit 2 = block (the reason on stderr goes back to Claude).

const ALWAYS_BLOCK = new Set([
  "send-broadcast",
  "create-automation",
  "send-inbox-draft",
  "send-new-inbox-email",
]);
const CHECK_ADDRESSES = new Set(["send-email", "send-batch-emails"]);

function block(reason) {
  console.error(`Blocked by send-guard: ${reason}`);
  process.exit(2);
}

// Pull the bare address out of "Name <a@b.com>" or "a@b.com".
function bareAddress(value) {
  const s = String(value).trim();
  const m = s.match(/<([^>]*)>\s*$/);
  return (m ? m[1] : s).trim().toLowerCase();
}

// Collect every to/cc/bcc value, at any depth (covers batch sends too).
function collectRecipients(node, out = []) {
  if (Array.isArray(node)) {
    node.forEach((n) => collectRecipients(n, out));
  } else if (node && typeof node === "object") {
    for (const [key, val] of Object.entries(node)) {
      if (["to", "cc", "bcc"].includes(key.toLowerCase())) {
        (Array.isArray(val) ? val : [val]).forEach((v) => out.push(v));
      } else {
        collectRecipients(val, out);
      }
    }
  }
  return out;
}

let raw = "";
process.stdin.setEncoding("utf8");
for await (const chunk of process.stdin) raw += chunk;

let call;
try {
  call = JSON.parse(raw);
} catch {
  block("could not read the tool call, so the send is refused.");
}

const toolName = String(call?.tool_name ?? "");
if (!toolName.startsWith("mcp__resend__")) process.exit(0);
const tool = toolName.slice("mcp__resend__".length);

if (ALWAYS_BLOCK.has(tool)) {
  block(`${tool} can reach whole lists of people, so it is always blocked.`);
}

if (CHECK_ADDRESSES.has(tool)) {
  const mine = (process.env.MY_EMAIL ?? "").trim().toLowerCase();
  const recipients = collectRecipients(call.tool_input);
  if (recipients.length === 0) block(`${tool} has no recipients I can check.`);
  for (const r of recipients) {
    const addr = bareAddress(r);
    const ok = addr.endsWith("@resend.dev") || (mine !== "" && addr === mine);
    if (!ok) {
      block(`${addr || String(r)} is not an @resend.dev address or MY_EMAIL.`);
    }
  }
}

process.exit(0);
