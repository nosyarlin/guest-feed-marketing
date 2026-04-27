# GA4 Event Map and Validation (RAY-51)

This landing page emits the following GA4 events:

| Event | Trigger | Source file |
| --- | --- | --- |
| `page_view` | On app boot | `src/main.tsx` |
| `video_play` | First play of hero demo video | `src/components/sections/HeroSection.tsx` |
| `cta_click` | Header, hero, pricing, waitlist CTA clicks | `src/components/layout/SiteHeader.tsx`, `src/components/sections/HeroSection.tsx`, `src/components/sections/PricingSection.tsx`, `src/App.tsx` |
| `pricing_intent_yes` | Waitlist intent set to yes and CTA clicked | `src/App.tsx` |
| `waitlist_submit` | Manual waitlist confirmation action | `src/App.tsx` |

## Manual verification checklist

1. Set `VITE_GA_MEASUREMENT_ID` in `.env`.
2. Run `npm run dev` and open the landing page.
3. Open browser DevTools and inspect network requests to `collect?v=2` or inspect GA4 DebugView.
4. Verify these actions emit the expected event:
   - Initial page load -> `page_view`
   - Hero media starts playing -> `video_play`
   - Click each CTA location -> `cta_click`
   - Choose "yes" then click waitlist CTA -> `pricing_intent_yes`
   - Click confirm submission button -> `waitlist_submit`

## Verification evidence in this branch

- Static checks: `npm run build`
- Source audit confirms all acceptance-criteria events are instrumented and mapped above.
