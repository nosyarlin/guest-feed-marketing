import { trackEvent } from "../../lib/analytics";
import { openWaitlistForm } from "../../lib/tally";
import { Button } from "../atoms/Button";

export function PricingSection() {
  const handleOnSecureYourDateClick = () => {
    trackEvent("cta_click", { placement: "pricing" });
    openWaitlistForm();
  };

  return (
    <section
      id="pricing"
      className="grid gap-6 border-b border-border px-2 py-10 md:mt-10 md:grid-cols-[1.1fr_0.9fr] md:gap-10 md:px-6 md:py-20"
    >
      <div>
        <h2 className="font-['Cormorant_Garamond'] text-4xl leading-tight md:text-6xl">
          Elegance without the premium price.
        </h2>
        <p className="mt-4 text-lg leading-8 text-text-muted">
          One transparent package for your wedding event, from pre-event setup
          through final delivery.
        </p>
        <ul className="mt-5 grid gap-3 text-lg">
          <li className="before:mr-2 before:text-accent before:content-['●']">
            Live site active 30 days before the event
          </li>
          <li className="before:mr-2 before:text-accent before:content-['●']">
            Your feed stays viewable for 30 days after the wedding
          </li>
          <li className="before:mr-2 before:text-accent before:content-['●']">
            Guests post unlimited photos and messages via Telegram
          </li>
          <li className="before:mr-2 before:text-accent before:content-['●']">
            All memories delivered as ZIP after event
          </li>
        </ul>
      </div>
      <div className="flex min-h-[420px] flex-col rounded-sm border border-border bg-bg-surface p-7 text-center shadow-lg md:min-h-[460px] md:p-10">
        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
          Signature Event
        </p>
        <div className="mt-14">
          <p className="font-['Cormorant_Garamond'] text-6xl leading-none text-text-primary italic md:text-7xl">
            $50
          </p>
          <p className="mt-2 text-base font-semibold uppercase tracking-[0.12em] text-text-muted md:text-lg">
            One-time flat fee
          </p>
        </div>
        <p className="mt-10 font-['Cormorant_Garamond'] text-xl italic text-text-muted md:mt-12 md:text-2xl">
          For your entire wedding journey
        </p>
        <Button
          className="mt-auto py-4 mx-auto w-full"
          onClick={handleOnSecureYourDateClick}
        >
          Secure your date
        </Button>
      </div>
    </section>
  );
}
