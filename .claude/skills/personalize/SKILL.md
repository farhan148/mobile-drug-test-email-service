---
name: personalize
description: Write a version of each campaign email for every lead group in leads/leads.csv. Use when a campaign's emails are final and you want one copy per group.
argument-hint: "[campaign folder]"
context: fork
allowed-tools: Read, Glob, Grep, Write
---

# Personalize a campaign by lead group

Write one version of each email in a campaign for each lead group.

## Input

The campaign folder is: $ARGUMENTS

If no campaign folder was given, or it does not exist, stop. Do not write any files. Use Glob on `campaigns/*/` and reply with the list of campaign folders that exist, and ask which one to use.

## Steps

1. Use Glob to find the emails in `<campaign folder>/emails/*.md`. If there are none, stop and say so.
2. Read `leads/leads.csv`. The groups are `tea-curious`, `gift-buyers` and `daily-drinkers`. Use Grep on the `group` column to confirm each group has at least one lead. Never copy names or email addresses into the emails. The greeting stays `{{first_name}}`.
3. Read the brand voice file for the campaign (see `CLAUDE.md`). For `steep-club-launch` use `brand/steep-club-voice.md`. Read `.claude/rules/emails.md`. Follow both.
4. For each email and each group, write a new file at `<campaign folder>/groups/<group>/emails/<same file name>`.

## What stays the same

Keep these exactly as they are in the original email:

- The structure and the order of the sections.
- The `Subject:` and `Preview:` lines.
- The single main link, including its `?src=` tag.
- The sign-off and the two-line plain-text footer.
- Every fact, offer and promise. Add no new claims.

## What changes

Change only two things, so the email fits the group:

1. **The opening line.** The first line after the greeting.
2. **One example.** One example in the body, such as when or how the reader might use the tea.

Group guidance:

- `tea-curious`: new to loose-leaf tea and still exploring. Reassuring, no pressure, nothing to know in advance.
- `gift-buyers`: thinking of the subscription for someone else. Keep the example about giving, and do not promise delivery dates or prices that the owner has not confirmed.
- `daily-drinkers`: already drink tea every day. Keep the example about their daily routine.

If an email has no natural spot for an example, adapt the closest sentence. Do not add extra paragraphs.

## Rules

- Follow the voice file: plain English, short sentences, no hype, none of its words to avoid, none of its claims to never make.
- Only write inside `<campaign folder>/groups/`. Never edit the original emails.
- Never send anything. Write files only.
- If a file already exists at a target path, stop and ask before overwriting it.

## Reply

When finished, reply with a short summary only:

- How many files you wrote.
- One example opening line per group.

Do not paste the full emails.
