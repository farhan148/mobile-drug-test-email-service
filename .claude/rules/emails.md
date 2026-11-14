---
paths:
  - "campaigns/**/emails/*.md"
---

# Email file rules

Each email file must:

- Start with a line `Subject: ...` of 50 characters or fewer, then a line `Preview: ...` of 90 characters or fewer.
- Greet the reader with `{{first_name}}`.
- Have exactly one main link, written as `[Button text](https://roadsideresults.example/book)`. A `?src=` tracking tag is allowed, for example `?src=e1`.
- Never mention test results, donor names or case details.
- Never say why a reader needs a test, such as a court order or probation.
- Never guarantee or imply a passing result.
- Never state a price, turnaround time or service area the owner has not confirmed.
- Contain no `[CONFIRM ...]` placeholders or editor notes when it is ready to send. Until then, list each open item in the campaign's owner-questions note in `notes/`.
- Ask the reader to book a test or a call only. Phone calls are made by the team, never by Claude.
- End with the sign-off from `brand/voice.md`, then this two-line footer as plain text, not inside a code block:

You're getting this because you asked to hear from Roadside Results Mobile Testing.
Roadside Results Mobile Testing, {{company_address}} · Unsubscribe: {{unsubscribe_url}}
