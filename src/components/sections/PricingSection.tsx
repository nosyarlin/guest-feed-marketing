import { trackEvent } from "../../lib/analytics";

type PricingSectionProps = {
  productPrice: string;
};

export function PricingSection({ productPrice }: PricingSectionProps) {
  return (
    <section
      id="pricing"
      className="grid gap-6 border-b border-[#e2d6c8] px-2 py-10 md:mt-10 md:grid-cols-[1.1fr_0.9fr] md:gap-10 md:px-6 md:py-20"
    >
      <div>
        <h2 className="font-['Cormorant_Garamond'] text-4xl leading-tight md:text-6xl">
          Elegance without the premium price.
        </h2>
        <p className="mt-4 text-lg leading-8 text-[#5c4f44]">
          One transparent package for your wedding event, from pre-event setup
          through final delivery.
        </p>
        <ul className="mt-5 grid gap-3 text-lg">
          <li className="before:mr-2 before:text-[#9d6b5b] before:content-['●']">
            Live site active 30 days before and 1 day after the event
          </li>
          <li className="before:mr-2 before:text-[#9d6b5b] before:content-['●']">
            Guests post unlimited photos and messages via Telegram
          </li>
          <li className="before:mr-2 before:text-[#9d6b5b] before:content-['●']">
            Complete ZIP keepsake delivery after shutdown
          </li>
        </ul>
      </div>
      <div className="flex min-h-[420px] flex-col rounded-sm border border-[#e2d6c8] bg-[#fffefa] p-7 text-center shadow-[0_0_24px_rgba(157,107,91,0.17)] md:min-h-[460px] md:p-10">
        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9d6b5b]">
          Signature Event
        </p>
        <div className="mt-14">
          <p className="font-['Cormorant_Garamond'] text-6xl leading-none text-[#1f1812] italic md:text-7xl">
            {productPrice}
          </p>
          <p className="mt-2 text-base font-semibold uppercase tracking-[0.12em] text-[#5c4f44] md:text-lg">
            One-time flat fee
          </p>
        </div>
        <p className="mt-10 font-['Cormorant_Garamond'] text-xl italic text-[#5c4f44] md:mt-12 md:text-2xl">
          For your entire wedding journey
        </p>
        <a
          className="mt-auto inline-block rounded-sm bg-[#9d6b5b] px-6 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-[#fffdf8]"
          href="#waitlist"
          onClick={() => trackEvent("cta_click", { placement: "pricing" })}
        >
          Secure your date
        </a>
      </div>
    </section>
  );
}
