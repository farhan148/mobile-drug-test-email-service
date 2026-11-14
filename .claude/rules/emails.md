---
paths:
  - "campaigns/**/emails/*.md"
---

# Email file rules

Each email file must:

- Start with a line `Subject: ...` of 50 characters or fewer, then a line `Preview: ...` of 90 characters or fewer.
- Greet the reader with `{{first_name}}`.
- Have exactly one main link, written as `[Button text](https://kettlebird.example/steep-club)`. A `?src=` tracking tag is allowed, for example `?src=e1`.
- Contain no `[CONFIRM ...]` placeholders or editor notes when it is ready to send. Until then, list each open item in the campaign's owner-questions note in `notes/`.
- Make no promise about replies, timing or results that the owner has not confirmed. Where two emails describe the same thing, such as how to sign up, use the same wording.
- End with the sign-off from the campaign's brand voice file in `brand/`, then this two-line footer as plain text, not inside a code block:

You're getting this because you joined the Kettlebird Tea waitlist.
Kettlebird Tea, {{company_address}} · Unsubscribe: {{unsubscribe_url}}
