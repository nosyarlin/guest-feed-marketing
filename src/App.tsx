import { useMemo, useState } from 'react'
import { SiteFooter } from './components/layout/SiteFooter'
import { SiteHeader } from './components/layout/SiteHeader'
import { HeroSection } from './components/sections/HeroSection'
import { JourneySection } from './components/sections/JourneySection'
import { PricingSection } from './components/sections/PricingSection'
import { WaitlistSection } from './components/sections/WaitlistSection'
import { trackEvent } from './lib/analytics'

const productPrice = '$50'
const tallyFormUrl = import.meta.env.VITE_TALLY_FORM_URL || '#'
const utmStorageKey = 'guest_feed_utm_params'

type PayIntent = 'yes' | 'maybe' | 'no'

function getUtmParams(): URLSearchParams {
  const params = new URLSearchParams(window.location.search)
  const allowed = new URLSearchParams()
  ;['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach((key) => {
    const value = params.get(key)
    if (value) {
      allowed.set(key, value)
    }
  })
  if (allowed.size > 0) {
    window.sessionStorage.setItem(utmStorageKey, allowed.toString())
    return allowed
  }

  const persisted = window.sessionStorage.getItem(utmStorageKey)
  return persisted ? new URLSearchParams(persisted) : allowed
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}

function normalizeMonthForTally(monthValue: string): string {
  return monthValue ? `${monthValue}-01` : ''
}

function normalizeEmailForTally(emailValue: string): string {
  return emailValue.trim().toLowerCase()
}

function isTallyConfigured(): boolean {
  return Boolean(tallyFormUrl && tallyFormUrl !== '#')
}

function buildTallyUrl(input: {
  email: string
  eventMonth: string
  payIntent: PayIntent
  consent: boolean
}): string {
  if (!isTallyConfigured()) {
    return '#'
  }

  const url = new URL(tallyFormUrl)
  const utmParams = getUtmParams()
  utmParams.forEach((value, key) => url.searchParams.set(key, value))
  url.searchParams.set('email', normalizeEmailForTally(input.email))
  url.searchParams.set('event_month', normalizeMonthForTally(input.eventMonth))
  url.searchParams.set('would_pay_50', input.payIntent)
  url.searchParams.set('consent', input.consent ? 'yes' : 'no')
  return url.toString()
}

function App() {
  const [email, setEmail] = useState('')
  const [payIntent, setPayIntent] = useState<PayIntent>('maybe')
  const [eventMonth, setEventMonth] = useState('')
  const [consent, setConsent] = useState(false)
  const [confirmed, setConfirmed] = useState(false)
  const hasValidEmail = isValidEmail(email)
  const tallyUnavailable = !isTallyConfigured()
  const canOpenTallyForm = consent && hasValidEmail && !tallyUnavailable

  const ctaHref = useMemo(() => {
    return buildTallyUrl({
      email,
      eventMonth,
      payIntent,
      consent,
    })
  }, [email, eventMonth, payIntent, consent])

  const handlePrimaryCtaClick = () => {
    if (!canOpenTallyForm) {
      return
    }
    trackEvent('cta_click', { placement: 'hero_waitlist' })
    if (payIntent === 'yes') {
      trackEvent('pricing_intent_yes', { source: 'hero_form' })
    }
  }

  const handleConfirmSubmit = () => {
    setConfirmed(true)
    trackEvent('waitlist_submit', { source: 'manual_confirmation' })
  }

  return (
    <main className="mx-auto min-h-screen max-w-[1460px] rounded-2xl border border-[#e2d6c8] bg-[#f9f5ef] px-4 pb-8 pt-4 text-[#1f1812] [background-image:radial-gradient(circle_at_1px_1px,rgba(31,24,18,0.045)_1px,transparent_0),linear-gradient(180deg,#f9f5ef_0%,#f3ede4_45%,#f9f5ef_100%)] [background-size:28px_28px,100%_100%] md:px-12 md:pb-20 md:pt-10">
      <SiteHeader />
      <HeroSection />
      <JourneySection />
      <PricingSection productPrice={productPrice} />
      <WaitlistSection
        productPrice={productPrice}
        email={email}
        eventMonth={eventMonth}
        payIntent={payIntent}
        consent={consent}
        confirmed={confirmed}
        ctaHref={ctaHref}
        hasValidEmail={hasValidEmail}
        canOpenTallyForm={canOpenTallyForm}
        tallyUnavailable={tallyUnavailable}
        onEmailChange={setEmail}
        onEventMonthChange={setEventMonth}
        onPayIntentChange={setPayIntent}
        onConsentChange={setConsent}
        onPrimaryCtaClick={handlePrimaryCtaClick}
        onConfirmSubmit={handleConfirmSubmit}
      />
      <SiteFooter />
    </main>
  )
}

export default App
