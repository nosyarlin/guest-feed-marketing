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
- `VITE_TALLY_FORM_ID`: Tally form ID used for popup waitlist conversion.

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

### Production domain

- Primary domain: `https://guestfeed.xyz`
- GitHub Pages default URL: `https://nosyarlin.github.io/guest-feed-marketing/`
- Custom domain is configured through `public/CNAME` and gets included in the deployed artifact.

### Build and deploy flow

1. Push to `main`.
2. GitHub Actions runs:
   - `npm ci`
   - `npm run build`
   - `actions/upload-pages-artifact` (publishes `dist`)
   - `actions/deploy-pages`
3. Site is served on GitHub Pages and bound to `guestfeed.xyz`.

Required GitHub repository variables:

- `VITE_GA_MEASUREMENT_ID`
- `VITE_TALLY_FORM_ID`

### Rollback procedure

If a bad deploy reaches production:

1. Go to repository **Actions** → **Deploy to GitHub Pages**.
2. Open the last known-good workflow run and use **Re-run all jobs** to redeploy that commit.
3. If needed, revert the offending commit on `main` and push; the workflow will deploy the reverted state.
