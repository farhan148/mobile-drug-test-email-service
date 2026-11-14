# Campaign plan: Client Renewal

Roadside Results Mobile Testing (sample name). Follows `brand/voice.md` and the safety rules in `CLAUDE.md`.

## 1. Overview

- **Name:** Client Renewal
- **Summary:** Three emails that invite past clients to ask about a repeat or program service.
- **Primary goal:** 15 existing clients ask about a repeat or program service between Monday 11 January 2027 and Sunday 7 February 2027.
- **Secondary goals:** Update `phone_consent` where a client asks for a call.

## 2. Audience

Past clients in the `existing-clients` group of `leads/leads.csv`, only rows with `consent` = yes. The practice list has 8 such people, 4 with `phone_consent` = yes. The real list size is for the owner to confirm.

Pain points: remembering to book again, and not knowing what a program service means.

## 3. Key messages

- **Core message:** You have used us before. You can ask about a repeat or program service when you need one.
- **Supporting messages:**
  1. Thank you for working with us.
  2. A repeat service means booking again with a team you already know.
  3. A program service is an ongoing arrangement. Describe the kind of service only.
  4. You can book or ask for a call, with no pressure.
- **Never say:** anything about results, passing, why someone needs a test, prices, discounts, turnaround times or service areas.

## 4. Channels

Email only. Phone follow-up is a handoff: the team calls only people whose `phone_consent` is `yes`, after they ask for a call. Claude never calls.

## 5. Calendar

Weekdays checked with a calendar command. The campaign runs for 3 weeks. The goal window is 4 weeks, so replies can still arrive after the last email.

| Week | Send date | Email | Group | Purpose |
|---|---|---|---|---|
| 1 (Mon 11 Jan to Sun 17 Jan) | Tue 12 Jan 2027 | 01 Thank you | existing-clients | Thank past clients and say what we can help with |
| 2 (Mon 18 Jan to Sun 24 Jan) | Tue 19 Jan 2027 | 02 What a repeat or program service is | existing-clients | Explain the kinds of service |
| 3 (Mon 25 Jan to Sun 31 Jan) | Tue 26 Jan 2027 | 03 A gentle reminder | existing-clients | Invite them to ask, with no pressure |

Dependency: the booking page and its call-request option must be live before email 01.

## 6. Content needed

| Asset | Priority |
|---|---|
| Emails 01 to 03 | Must-have |
| Booking page `https://roadsideresults.example/book` with a call-request option | Must-have |
| A one-line description of each service the owner approves | Must-have |

## 7. Metrics

- **Primary:** 15 clients ask about a repeat or program service by 7 February 2027.
- **Secondary:** click rate, call requests, unsubscribe rate, bounce rate.
- **Tracking:** the `?src=r1` to `?src=r3` tag on each link.
- **Reporting:** a short note each Monday.

## 8. Budget

Email only. Costs are the email service and staff time.

## 9. Risks

| Risk | Mitigation |
|---|---|
| Fewer than 15 ask | After week 2, review clicks and rewrite the weaker subject lines |
| A client replies with private details | The reply asks them to use the booking page |
| Someone without consent is mailed | Send only to rows with `consent` = yes |

## 10. Open items the owner must confirm before anything is sent

1. The kinds of repeat and program services we may describe, in plain words. The emails describe the kind of service only.
2. That we may mention no price, discount, turnaround time or service area. For now, none are mentioned.
3. How the booking page works and how the team answers call requests. The emails promise no callback.
4. Who makes the phone calls, and the rule that they call only people with `phone_consent` = yes.
5. That every client with `consent` = yes really asked to hear from the company, since the footer says so.
6. Real company name, `{{company_address}}` and unsubscribe link.
