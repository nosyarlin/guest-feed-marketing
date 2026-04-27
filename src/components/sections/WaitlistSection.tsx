import type { ChangeEvent } from 'react'

type PayIntent = 'yes' | 'maybe' | 'no'

type WaitlistSectionProps = {
  productPrice: string
  email: string
  eventMonth: string
  payIntent: PayIntent
  consent: boolean
  confirmed: boolean
  ctaHref: string
  hasValidEmail: boolean
  canOpenTallyForm: boolean
  tallyUnavailable: boolean
  onEmailChange: (email: string) => void
  onEventMonthChange: (eventMonth: string) => void
  onPayIntentChange: (payIntent: PayIntent) => void
  onConsentChange: (consent: boolean) => void
  onPrimaryCtaClick: () => void
  onConfirmSubmit: () => void
}

export function WaitlistSection({
  productPrice,
  email,
  eventMonth,
  payIntent,
  consent,
  confirmed,
  ctaHref,
  hasValidEmail,
  canOpenTallyForm,
  tallyUnavailable,
  onEmailChange,
  onEventMonthChange,
  onPayIntentChange,
  onConsentChange,
  onPrimaryCtaClick,
  onConfirmSubmit,
}: WaitlistSectionProps) {
  const onPayIntentSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    onPayIntentChange(event.target.value as PayIntent)
  }

  return (
    <section id="waitlist" className="px-2 py-10 md:px-6 md:py-24">
      <div className="mx-auto max-w-[860px] rounded border border-[#e2d6c8] bg-[#fffdf8]/90 px-7 py-10 text-center md:px-10 md:py-12">
        <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-6xl">
          Be part of the premiere.
        </h2>
        <p className="mx-auto mt-4 max-w-[40rem] text-base leading-7 text-[#5c4f44] md:text-lg md:leading-8">
          We are rolling out Guest Feed for weddings. Join the waitlist to
          secure your spot.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <label className="grid gap-2 text-left text-xs uppercase tracking-[0.06em] text-[#5c4f44] md:col-span-2">
            Email
            <input
              className="rounded-sm border border-[#e2d6c8] bg-[#fffefa] px-3 py-3 text-base text-[#1f1812]"
              type="email"
              value={email}
              onChange={(event) => onEmailChange(event.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </label>
          <label className="grid gap-2 text-left text-xs uppercase tracking-[0.06em] text-[#5c4f44]">
            Wedding month
            <input
              className="rounded-sm border border-[#e2d6c8] bg-[#fffefa] px-3 py-3 text-base text-[#1f1812]"
              type="month"
              value={eventMonth}
              onChange={(event) => onEventMonthChange(event.target.value)}
            />
          </label>
          <label className="grid gap-2 text-left text-xs uppercase tracking-[0.06em] text-[#5c4f44]">
            Would you pay {productPrice}?
            <select
              className="rounded-sm border border-[#e2d6c8] bg-[#fffefa] px-3 py-3 text-base text-[#1f1812]"
              value={payIntent}
              onChange={onPayIntentSelect}
            >
              <option value="yes">Yes</option>
              <option value="maybe">Maybe</option>
              <option value="no">No</option>
            </select>
          </label>
        </div>
        <label className="mt-5 grid grid-cols-[auto_1fr] items-center gap-2 text-left text-sm text-[#5c4f44] md:text-base">
          <input
            className="accent-[#9d6b5b]"
            type="checkbox"
            checked={consent}
            onChange={(event) => onConsentChange(event.target.checked)}
          />
          I consent to Guest Feed contacting me for this interest check.
        </label>
        <a
          className={`mt-5 inline-block w-full rounded-sm px-6 py-3.5 text-xs font-bold uppercase tracking-[0.04em] md:text-sm ${
            canOpenTallyForm
              ? 'bg-[#9d6b5b] text-[#fffdf8]'
              : 'pointer-events-none bg-[#9d6b5b]/55 text-[#fffdf8]/75'
          }`}
          href={canOpenTallyForm ? ctaHref : '#'}
          target="_blank"
          rel="noreferrer"
          onClick={onPrimaryCtaClick}
        >
          Register interest
        </a>
        {!hasValidEmail ? (
          <p className="mt-2 text-left text-sm text-[#9d6b5b]">
            Enter a valid email to continue.
          </p>
        ) : null}
        {tallyUnavailable ? (
          <p className="mt-2 text-left text-sm text-[#9d6b5b]">
            Tally form URL is not configured yet. Set `VITE_TALLY_FORM_URL`.
          </p>
        ) : null}
        <button
          type="button"
          className="mt-4 w-full rounded-sm border border-[#e2d6c8] bg-[#fffefa] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.04em] text-[#1f1812] md:text-sm"
          onClick={onConfirmSubmit}
        >
          I submitted the form
        </button>
        {confirmed ? (
          <p className="mt-3 font-semibold text-[#9d6b5b]">
            Thank you. You are on the list.
          </p>
        ) : null}
      </div>
    </section>
  )
}
