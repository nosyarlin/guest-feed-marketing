# Launch and Measure Runbook

## 1) GitHub Pages deployment

- Ensure repository Pages source is set to GitHub Actions.
- Add repository variables:
  - `VITE_GA_MEASUREMENT_ID`
  - `VITE_TALLY_FORM_URL`
- Push to `main` to trigger `.github/workflows/deploy.yml`.

## 2) Tally form setup

- Required visible fields:
  - Email (required)
  - Event month (required)
  - Would pay $50? (required: yes/no/maybe)
  - Consent checkbox (required)
- Required hidden fields:
  - `utm_source`
  - `utm_medium`
  - `utm_campaign`
  - `utm_content`
  - `utm_term`
- Connect Tally responses to a spreadsheet destination.

## 3) GA4 verification

- Open the site with UTM params and confirm events in GA4 Realtime:
  - `page_view`
  - `video_play`
  - `cta_click`
  - `waitlist_submit`
  - `pricing_intent_yes` (when yes is selected before CTA click)

## 4) Paid ad experiment cadence

- Week 1: validate tracking + response quality.
- Weeks 2-3: iterate creative/copy only if CTR or waitlist CVR is weak.
- Week 4: evaluate go/no-go against thresholds.

## 5) Success threshold

- Qualified leads >= 20
- Leads with willingness to pay = yes >= 5

Go decision:

- Go if both thresholds are met.
- Iterate if near threshold with strong qualitative signal.
- Stop if well below threshold and weak pricing signal.
