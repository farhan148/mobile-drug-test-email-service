---
paths:
  - "campaigns/**/emails/*.md"
---

# Email file rules

Each email file must:

- Start with a line `Subject: ...` of 50 characters or fewer, then a line `Preview: ...` of 90 characters or fewer.
- Greet the reader with `{{first_name}}`.
- Have exactly one main link, written as `[Button text](https://steepclub.example/steep-club)`.
- End with the sign-off from the brand voice file for that campaign (for the Steep Club: **The Steep Club team**), then this two-line footer as plain text, not inside a code block:

You're getting this because you joined The Steep Club waitlist.
The Steep Club, {{company_address}} · Unsubscribe: {{unsubscribe_url}}

Write only the email. Do not add subject options, notes, or other extra sections to the file.
