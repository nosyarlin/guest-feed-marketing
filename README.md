# Guest Feed Marketing

Wedding-themed marketing site for Guest Feed (Telegram-powered digital guest book) built with React, Vite, TypeScript, and Tailwind.

## Local setup

```bash
npm install
cp .env.sample .env
npm run dev
```

## Required environment variables

- `VITE_GA_MEASUREMENT_ID`: Google Analytics 4 measurement ID.
- `VITE_TALLY_FORM_URL`: public Tally form URL for waitlist conversion.

## Analytics events

- `page_view`
- `video_play`
- `cta_click`
- `waitlist_submit`
- `pricing_intent_yes`

## Form requirements in Tally

Configure the form with:

- email (required)
- event month (required)
- would pay 50 (yes/no/maybe, required)
- consent checkbox (required)
- hidden UTM fields (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`)

## Deploy

Deployment is automated with GitHub Actions to GitHub Pages via `.github/workflows/deploy.yml`.
