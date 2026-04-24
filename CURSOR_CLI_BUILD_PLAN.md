# Guest Feed Marketing Site Build Plan (Cursor CLI)

## Goal
Build and launch a wedding-themed marketing page for **guest feed** to validate demand for a Telegram-powered digital guest book.

Success criteria (30 days):
- >= 20 qualified leads
- >= 5 leads indicate they would pay `$50/event`

## Locked Product Decisions
- Product name: **guest feed**
- Positioning: **wedding-only**
- Core flow on page:
  1. Couple creates a digital guest book and gets a password.
  2. Guests authenticate with the guest feed Telegram bot.
  3. Guests send images/messages to the bot; content appears on a live social wall.
- Pricing: `$50 per event`
- Lifecycle: active 30 days before event, shuts down 1 day after event
- Post-event delivery: ZIP export of images/messages
- Fallback stance: support-only (explicitly stated in copy)

## Tech Stack (Chosen)
- Frontend: `React + Vite + TypeScript + Tailwind CSS`
- Hosting: `GitHub Pages` via GitHub Actions
- Form backend: `Tally` (free tier)
- Analytics: `GA4` (free)

## Visual System Source
Reuse TelegramSocialWall theme tokens:
- `/Users/raysonlim/Repositories/TelegramSocialWall/frontend/src/index.css`
- `/Users/raysonlim/Repositories/TelegramSocialWall/frontend/src/eventConfig.ts`
- `/Users/raysonlim/Repositories/TelegramSocialWall/frontend/public/event.json`

## Page IA (Single Page)
- Hero + primary CTA
- How it works (3 steps)
- Demo section (hybrid: mockup + short real clip slot)
- Pricing/lifecycle
- Trust/fallback copy
- FAQ
- Waitlist form (Tally)
- Privacy/consent block

## Form + Tracking Spec
Required form fields:
- `email`
- `event_month`
- `would_pay_50` (`yes/no/maybe`)
- `consent` (checkbox)
- hidden UTM fields: `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`

Track events:
- `page_view`
- `video_play`
- `cta_click`
- `waitlist_submit`
- `pricing_intent_yes`

## Linear Ticket Execution Map
Project: **Social Wall**  
Milestone: **Contact 10 potential users**

Parallel foundation:
- `RAY-52` Extract brand tokens
- `RAY-54` Write wedding-only copy
- `RAY-53` Prepare demo media package
- `RAY-59` Privacy/consent copy
- `RAY-57` Build outreach lead list
- `RAY-60` Outreach templates

Build/instrument:
- `RAY-50` Implement static scaffold (blocked by `RAY-52`, `RAY-54`)
- `RAY-55` Integrate Tally form
- `RAY-51` Add GA4 event tracking
- `RAY-56` GitHub Pages CI/CD

Validation:
- `RAY-58` Execute outreach to 10 users (blocked by `RAY-57`, `RAY-60`)
- `RAY-61` Synthesis + go/no-go (blocked by `RAY-58`, `RAY-51`, `RAY-55`)

## Cursor CLI Working Sequence
Use one branch per Linear issue:

1) Start issue branch
- `git checkout -b ray-52-brand-tokens`

2) Implement issue scope only
- Keep diffs small and independent.
- Use placeholders when waiting on another ticket.

3) Validate locally
- `npm install`
- `npm run dev`
- `npm run build`

4) Commit with Linear key
- Example: `feat: extract social wall brand tokens (RAY-52)`

5) Open PR and move to next issue
- Repeat per ticket; run parallel branches/agents where possible.

## Suggested Definition of Done (Per Ticket)
- Scope implemented
- Acceptance criteria checked
- Build passes (`npm run build`)
- Notes/screenshots added to ticket
- Ready for review/merge

## Risks To Watch
- Mockup-heavy demo may reduce trust -> include short real clip ASAP
- Form drop-off -> keep fields minimal
- Support-only fallback can weaken reliability perception -> copy must be explicit
- Paid ads can be noisy early -> evaluate by qualified leads, not traffic volume

## Go/No-Go Rule
At day 30:
- **Go**: threshold met (20 qualified + 5 willing to pay)
- **Iterate**: close to threshold with strong qualitative intent
- **Stop**: clearly below threshold with weak willingness signal
