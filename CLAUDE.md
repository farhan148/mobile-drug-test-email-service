# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this studio is for

This is an email studio for planning and writing email campaigns for a small mobile drug testing company. The company sends technicians to workplaces and homes to run drug tests on site. Claude helps find new prospects, generate leads, make offers to existing clients, write the emails, and keep them consistent with the brand.

The company name used in the practice material is **Roadside Results Mobile Testing**. It is a made-up sample name. Use it until the owner gives the real one, and keep it easy to rename.

## Folders

- `brand/` - the brand voice and style notes that every email should follow.
- `leads/` - practice contact lists (fake or test data only).
- `campaigns/` - one folder per campaign, with its plan and its emails.
- `notes/` - research and decisions, such as which skills and tools we chose.

## Lead groups

- `employers` - businesses that need workplace testing (construction, trucking, warehouses, staffing agencies).
- `individuals` - people who need a test for a job, a court order or personal reasons.
- `existing-clients` - past customers who might want repeat or program services.

## Rules

- Write in plain English: short sentences, no jargon, no hype.
- Never send email to real people. Only use `@resend.dev` test addresses, `@example.com` placeholders, or the owner's own address.
- Sending through Resend is allowed only to Resend's test addresses (ending in `@resend.dev`) and to the owner's own email address. The send guard hook (`.claude/hooks/send-guard.mjs`) enforces this.
- Never put test results, donor names or case details in any email. Results are private.
- Never say why a person needs a test (for example a court order or probation). Do not imply anything about their case.
- Never promise or imply a guaranteed outcome. No "pass your test" or "beat the test" language.
- Never promise prices, turnaround times or service areas the owner has not confirmed.
- Every marketing email needs consent on file, an unsubscribe link and a physical address.
- Claude never calls or texts anyone. Phone follow-up is a handoff: an email invites a person to book a call, and the team calls only people whose `phone_consent` is `yes`.
- Ask before deleting anything.

## Brand voice

The brand voice is in `brand/voice.md` (imported below, so it always loads). Follow it in every email.

## Plugin

The Anthropic `marketing` plugin (from `anthropics/knowledge-work-plugins`) is enabled for this project only, via `.claude/settings.json`.

## Reference notes for this repo

Git repo (branch `main`). The only code is the headless review script, `node scripts/review.mjs <campaign-folder>`. There are no build, lint, or test commands.

- `README.md` - project purpose.
- `Assignment.md` - a 15-step Claude Code course lab (CCAR-F exam prep) for this studio. It is reference material, not project config.
- `brand/`, `leads/`, `campaigns/`, `notes/`, `review/`, `scripts/` and `.claude/` (rule, skill, hook, settings) hold the lab work.
- `subscribers/` is git-ignored and does not exist yet. It would hold real subscriber data.
- Leftover material from an earlier tea-subscription practice brand (The Steep Club) may still sit in `campaigns/steep-club-launch/`, `brand/steep-club-voice.md` and `notes/`. It is not this project's brand. Do not use it for drug testing campaigns.

## Email-safety rules (apply even before any tooling exists)

- Never send email to real people. Only send to `@resend.dev` test addresses, `@example.com` placeholders (these never deliver), or the user's own address.
- API keys go in environment variables (`${VAR:-safe_default}` pattern in `.mcp.json`), never in files. Never commit credentials. `.env` and `.claude/settings.local.json` should stay git-ignored.
- Ask before deleting anything.

## Architecture the lab prescribes

- **Email-file rules** in `.claude/rules/emails.md` using `paths: ["campaigns/**/emails/*.md"]` front matter. Required per email: `Subject:` of 50 characters or fewer, `Preview:` of 90 or fewer, `{{first_name}}` greeting, exactly one main link, brand sign-off, then a plain-text footer with `{{company_address}}` and `{{unsubscribe_url}}`.
- **Folder-scoped rules** in `leads/CLAUDE.md` (practice leads CSV: `first_name,last_name,email,company,group,source,consent,phone_consent`).
- **Campaign layout**: `campaigns/<name>/plan.md`, `emails/NN-name.md`, and per-group variants under `groups/<group>/emails/`.
- **Sending** via the Resend MCP server in `.mcp.json`, pointed at a local emulator (`npx emulate@0.12.3 start --service resend`, serves http://localhost:4000) for practice. A `PreToolUse` hook (`.claude/hooks/send-guard.mjs`, exit code 2 to block) restricts sends to `@resend.dev` or `$MY_EMAIL` and blocks broadcast, automation and inbox tools. `MY_EMAIL` lives in the uncommitted `.claude/settings.local.json`.
- **Headless review**: `scripts/review.mjs` runs `claude -p ... --output-format json --json-schema ...` and exits 1 on any high-severity finding.

Prerequisites per the lab: Node.js 22+, Git (Git for Windows on Windows, since Claude Code uses Git Bash), Claude Code.

@brand/voice.md
