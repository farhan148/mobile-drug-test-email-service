# Campaign plan: Book a Test

Roadside Results Mobile Testing (sample name). Follows `brand/voice.md` and the safety rules in `CLAUDE.md`.

## 1. Overview

- **Name:** Book a Test
- **Summary:** A four-email sequence that invites employers, individuals and existing clients to book an on-site test or a call.
- **Primary goal:** 40 booking requests (a booking form submitted or a call requested) between Monday 7 December 2026 and Sunday 3 January 2027.
- **Secondary goals:** Grow the share of leads with `phone_consent` = yes. Learn which group responds best.

## 2. Audience

About 1,500 contacts, all with `consent` = yes. All sample counts below are placeholders until the owner confirms the real list.

| Group | What they need | Stage |
|---|---|---|
| employers | Workplace testing for staff (construction, trucking, warehouses, staffing) | Consideration |
| individuals | A test for a job or another reason. We never ask or say why. | Decision |
| existing-clients | Repeat or program services | Consideration |

Pain points: little time, privacy worries, and not knowing how on-site testing works. Readers find us by search, referral, trade shows and our booking page.

## 3. Key messages

- **Core message:** A technician comes to you, tests on site, and keeps it private.
- **Supporting messages:**
  1. On-site testing saves a trip. *(Proof: how the visit works, once the owner confirms the steps.)*
  2. Your information stays private. *(Proof: the owner's privacy practice, once confirmed.)*
  3. Booking is simple: one link, or a call. *(Proof: the booking page.)*
  4. We already work with people like you. *(For existing-clients only. Proof: past client list.)*
- **Never say:** anything about results, passing, why someone needs a test, prices, turnaround times or service areas.

## 4. Channels

| Channel | Why | Effort |
|---|---|---|
| Email | The only channel. It is cheap and consented. | Low |
| Phone handoff | The team calls only people with `phone_consent` = yes, after they request a call. Claude never calls. | Medium (team) |

No paid ads, no social posts.

## 5. Calendar

Weekdays checked with a calendar command.

| Week | Send date | Email | Group | Purpose |
|---|---|---|---|---|
| 1 (Mon 7 Dec to Sun 13 Dec) | Tue 8 Dec 2026 | 01 Introduce on-site testing | All three | Say who we are and invite a booking |
| 2 (Mon 14 Dec to Sun 20 Dec) | Tue 15 Dec 2026 | 02 How booking works | All three | Show the steps, offer a call |
| 3 (Mon 21 Dec to Sun 27 Dec) | Tue 22 Dec 2026 | 03 Questions answered | All three | Answer privacy and scheduling questions without promises |
| 4 (Mon 28 Dec to Sun 3 Jan) | Tue 29 Dec 2026 | 04 Book before the new year | All three | A calm reminder |

Dependencies: the booking page and call-request form must be live before email 01. Group versions (`groups/<group>/emails/`) are written after the base emails are final.

## 6. Content needed

| Asset | Priority |
|---|---|
| Emails 01 to 04 | Must-have |
| Group versions of each (12 files) | Must-have |
| Booking page `https://roadsideresults.example/book` | Must-have |
| Call-request option on the booking page | Must-have |
| Short "how a visit works" page | Nice-to-have |

## 7. Metrics

- **Primary:** 40 booking requests by 3 January 2027 (about 2.7% of 1,500).
- **Secondary:** open rate, click rate on the one link, call requests, unsubscribe rate, bounce rate.
- **Tracking:** the `?src=e1` to `?src=e4` tag on each link, plus booking form entries.
- **Reporting:** a short note each Monday.

## 8. Budget

Email only, no paid ads. Costs are the email service and staff time to answer bookings and make calls. No other spend is planned.

## 9. Risks

| Risk | Mitigation |
|---|---|
| Holiday weeks (22 and 29 Dec) lower attention and staff cover | Owner decides whether to move emails 03 and 04 to January |
| Fewer than 40 bookings | After week 2, review clicks and rewrite the weaker subject lines |
| A reader replies with private details | Reply asks them to use the booking page. Never repeat details in email. |
| Missing consent | Send only to rows with `consent` = yes |

## 10. Next steps and open items

Owner must confirm before anything is sent:

1. Real company name, physical address (`{{company_address}}`) and unsubscribe link.
2. The booking page and call-request option, and how fast the team will answer. No timing is promised in emails until confirmed.
3. The real list of about 1,500 contacts, and their consent and `phone_consent` values.
4. Whether to send during the holiday weeks.
5. Whether a price, turnaround time or service area may ever be mentioned. For now, none are.
6. Who makes the phone calls, and the rule that they call only people with `phone_consent` = yes.
7. Privacy. The emails make no privacy promise yet. Add one only if the owner confirms the real practice.
8. Whether the service covers home visits as well as workplaces. The emails only say "a technician comes to you".
9. Whether the team never asks why someone books a test. The emails say nothing about it yet.
10. How the booking page works: whether readers pick a time, what the form asks, and whether there is a question field.
11. How and when the team answers call requests. The emails promise no callback.
12. That every contact with `consent` = yes really asked to hear from the company, since the footer says so.
