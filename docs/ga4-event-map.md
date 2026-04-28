# GA4 Event Map

This landing page currently emits the following GA4 events:

| Event | Trigger | Params | Source file |
| --- | --- | --- | --- |
| `page_view` | On app boot | `page: "landing"` | `src/main.tsx` |
| `cta_click` | Header, hero, pricing, waitlist CTA clicks | `placement: "top_nav" | "hero_primary" | "pricing" | "waitlist"` | `src/components/layout/SiteHeader.tsx`, `src/components/sections/HeroSection.tsx`, `src/components/sections/PricingSection.tsx`, `src/components/sections/WaitlistSection.tsx` |
| `tally_form_open` | Tally popup opens | none | `src/lib/tally.ts` |
| `tally_form_close` | Tally popup closes | none | `src/lib/tally.ts` |
| `tally_form_submit` | Tally submit callback fires | `payload` (full Tally payload object) | `src/lib/tally.ts` |

## Manual verification checklist

1. Set `VITE_GA_MEASUREMENT_ID` and `VITE_TALLY_FORM_ID` in `.env`.
2. Run `npm run dev` and open the landing page.
3. Open browser DevTools and inspect GA requests (`collect?v=2`) or GA4 DebugView.
4. Verify:
   - Initial page load -> `page_view` with `page=landing`
   - Click each CTA location -> `cta_click` with the expected `placement`
   - Open Tally popup -> `tally_form_open`
   - Close Tally popup -> `tally_form_close`
   - Submit Tally form -> `tally_form_submit` with `payload`

## Automated verification

- `npm run test:e2e` validates GA4 data layer events including full `tally_form_submit.payload`.
