# Mobile Drug Test Email Service

An email studio for planning and writing email campaigns for a small mobile drug testing company. The company sends technicians to workplaces and homes to run drug tests on site. The studio is run with [Claude Code](https://claude.com/claude-code), and it follows the 15-step lab in `Assignment.md`.

The company name used here, **Roadside Results Mobile Testing**, is a made-up sample. Rename it when the real owner gives theirs.

**Nothing here sends to real people.** All leads are fake. Sending goes only to a practice email server on your own computer.

## What it does

Claude helps to:

- find new prospects and generate leads
- make offers to existing clients
- write the emails in one consistent brand voice
- personalize each email for each lead group
- send practice emails safely and review them automatically

Each email asks the reader to do one thing: book a test or book a call.

## Lead groups

| Group | Who they are |
|---|---|
| `employers` | Businesses that need workplace testing (construction, trucking, warehouses, staffing agencies) |
| `individuals` | People who need a test for a job or personal reasons |
| `existing-clients` | Past customers who might want repeat or program services |

## Campaigns

- **Book a Test** (`campaigns/book-a-test/`): a 4-email lead-generation sequence. Goal: 40 booking requests in 4 weeks. It has a plan, 4 emails, and a version of each email per group.
- **Client Renewal** (`campaigns/client-renewal/`): 3 emails inviting past clients to ask about a repeat or program service. Goal: 15 enquiries in 4 weeks.
- `campaigns/test-bad/` holds a deliberately bad email used to prove the automatic review catches problems.

## Folder guide

```
CLAUDE.md             the studio's rules (read by Claude every session)
brand/voice.md        brand voice, imported by CLAUDE.md
leads/                24 practice leads (leads.csv) and folder rules
campaigns/            one folder per campaign: plan.md, emails/, groups/
notes/                research, decisions, session experiments, practice feedback
review/               schema and results for the automatic review
scripts/review.mjs    headless review script
.claude/
  rules/emails.md     rules for every email file
  skills/personalize/ skill that writes one copy of each email per group
  hooks/send-guard.mjs  safety guard on every send
.mcp.json             connection to Resend (practice mode)
Assignment.md         the 15-step course lab (reference material)
```

## Safety rules

- **No real recipients.** Only `@resend.dev` test addresses, `@example.com` placeholders, or the owner's own address.
- **Send guard.** A `PreToolUse` hook (`.claude/hooks/send-guard.mjs`) blocks any send to another address and blocks broadcast, automation and inbox tools. Claude cannot talk its way past it.
- **Privacy.** No test results, donor names or case details in any email. Never say why someone needs a test.
- **No promises.** No guaranteed outcomes ("pass your test"), and no prices, turnaround times or service areas the owner has not confirmed.
- **Compliance.** Every marketing email needs consent on file, an unsubscribe link and a physical address.
- **No calls or texts.** Phone follow-up is a handoff. The team calls only people whose `phone_consent` is `yes`.
- **No secrets in the repo.** API keys come from environment variables. `.env` and `.claude/settings.local.json` are git-ignored.

## Email format

Rules in `.claude/rules/emails.md` apply to every file matching `campaigns/**/emails/*.md`:

- `Subject:` of 50 characters or fewer, then `Preview:` of 90 or fewer
- greeting with `{{first_name}}`
- exactly one main link
- brand sign-off, then a plain-text footer with `{{company_address}}` and `{{unsubscribe_url}}`

## Getting started

Needs Node.js 22+, Git (Git for Windows on Windows) and Claude Code.

1. Clone the repo and open Claude Code in the folder: `claude`
2. Start the practice email server in a second terminal: `npx emulate@0.12.3 start --service resend` (serves http://localhost:4000)
3. Put your own email in `.claude/settings.local.json` (not committed):
   ```json
   { "env": { "MY_EMAIL": "you@example.com" } }
   ```
4. Approve the `resend` MCP server and the project's `marketing` plugin when Claude Code asks.

The `.mcp.json` defaults point at the practice server, so setting nothing is safe.

## Automatic review

```
node scripts/review.mjs campaigns/<folder>
```

This runs Claude headless against the brand voice and email rules. It writes structured findings to `review/findings.json` and exits with code 1 if any finding is high severity. On a repeat run it only reports problems that are new or still unfixed.

## Tools used

- Anthropic's `marketing` plugin (`anthropics/knowledge-work-plugins`), enabled for this project only
- [Resend](https://resend.com) through MCP, in practice mode
- A reusable plugin version of the studio, `studio-kit`, lives in a separate folder next to this repo
