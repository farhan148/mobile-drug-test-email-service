# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this studio is for

This is an email studio for planning and writing email campaigns for a small business (here, the email services for the 2nd edition of the Agent Factory book). Claude helps plan campaigns, write the emails, and keep them consistent with the brand.

## Folders

- `brand/` - the brand voice and style notes that every email should follow.
- `leads/` - practice contact lists (fake or test data only).
- `campaigns/` - one folder per campaign, with its plan and its emails.
- `notes/` - research and decisions, such as which skills and tools we chose.

## Rules

- Write in plain English: short sentences, no jargon, no hype.
- Never send email to real people. Only use `@resend.dev` test addresses, `@example.com` placeholders, or the owner's own address.
- Sending through Resend is allowed only to Resend's test addresses (ending in `@resend.dev`) and to the owner's own email address. A guard will enforce this in the next step.
- Ask before deleting anything.

## Brand voices

Each brand has its own voice file in `brand/`. Use the file that matches the campaign. Do not mix them.

- Agent Factory book: `brand/voice.md` (imported below, so it always loads).
- The Steep Club (tea subscription): `brand/steep-club-voice.md`. Open it before writing or reviewing anything in `campaigns/steep-club-launch/`. It is imported by path, not by `@`, so it only loads when needed.

## Plugin

The Anthropic `marketing` plugin (from `anthropics/knowledge-work-plugins`) is enabled for this project only, via `.claude/settings.json`.

## Reference notes for this repo

## Current state

Git repo (branch `main`). The only code is the headless review script, `node scripts/review.mjs <campaign-folder>`. There are no build, lint, or test commands. It holds:

- `README.md` — project purpose (email services for the 2nd edition of the Agent Factory book, https://agentfactory2.panaversity.org/five-horizons/) and the intended folder roles.
- `Assignment.md` (formerly `Email Studio Lab Assignment FDE-102 (Copy).md`) — a ~1000-line, 15-step Claude Code course lab (CCAR-F exam prep). It is the only substantial content and the likely blueprint for how this project grows. It is reference material, not project config.
- Lab work in progress: `brand/`, `leads/`, `campaigns/steep-club-launch/` (plan, emails, per-group versions), `campaigns/test-bad/`, `notes/`, `review/`, `scripts/`, and `.claude/` (rule, skill, hook, settings). `subscribers/` is git-ignored and does not exist yet.

Do not treat the lab's example brand (Kettlebird Tea / "The Steep Club") as this project's brand. The book's actual brand voice, provider, and sender domain are undecided; ask before assuming.

## Email-safety rules (apply even before any tooling exists)

- Never send email to real people. Only send to `@resend.dev` test addresses, `@example.com` placeholders (these never deliver), or the user's own address.
- `subscribers/` holds real subscriber data once populated; it is already in `.gitignore` (as are `.env` and `.claude/settings.local.json`), so keep it there and never commit credentials. API keys go in environment variables (`${VAR:-safe_default}` pattern in `.mcp.json`), never in files.
- Ask before deleting anything.

## Architecture the lab prescribes (if built out here)

The lab describes a layered setup that spans several files, so check these conventions before adding email tooling:

- **Brand voice** in `brand/voice.md`, imported into the root `CLAUDE.md` via `@brand/voice.md`.
- **Email-file rules** in `.claude/rules/emails.md` using `paths: ["campaigns/**/emails/*.md"]` front matter. Required per email: `Subject:` ≤50 chars, `Preview:` ≤90 chars, `{{first_name}}` greeting, exactly one main link, brand sign-off, then a plain-text footer with `{{company_address}}` and `{{unsubscribe_url}}`.
- **Folder-scoped rules** in `leads/CLAUDE.md` (practice leads CSV: `first_name,last_name,email,group,joined_on,consent`).
- **Campaign layout**: `campaigns/<name>/plan.md`, `emails/NN-name.md`, and per-group variants under `groups/<group>/emails/`.
- **Sending** via the Resend MCP server in `.mcp.json`, pointed at a local emulator (`npx emulate@0.12.3 start --service resend`, serves http://localhost:4000) for practice. A `PreToolUse` hook (`.claude/hooks/send-guard.mjs`, exit code 2 to block) must restrict sends to `@resend.dev` or `$MY_EMAIL` and always block broadcast/automation/inbox tools. `MY_EMAIL` lives in the uncommitted `.claude/settings.local.json`.
- **Headless review**: `scripts/review.mjs` runs `claude -p ... --output-format json --json-schema ...` and exits 1 on any high-severity finding.

Prerequisites per the lab: Node.js 22+, Git (Git for Windows on Windows, since Claude Code uses Git Bash), Claude Code.

@brand/voice.md
