import { trackEvent } from "../../lib/analytics";
import { openWaitlistForm } from "../../lib/tally";

export function SiteHeader() {
  const handleOnJoinWaitlistClick = () => {
    trackEvent("cta_click", { placement: "top_nav" });
    openWaitlistForm();
  };

  return (
    <header className="flex h-20 items-center justify-between rounded-xl border border-[#e2d6c8] bg-[#fffdfa]/90 px-5 shadow-[0_8px_24px_rgba(31,24,18,0.06)] md:h-24 md:px-8">
      <div className="font-['Cormorant_Garamond'] text-3xl font-bold text-[#9d6b5b] md:text-4xl">
        GuestFeed
      </div>
      <nav className="hidden gap-8 md:flex">
        <a
          href="#journey"
          className="text-sm uppercase tracking-[0.08em] text-[#5c4f44] hover:text-[#9d6b5b]"
        >
          How it works
        </a>
        <a
          href="#pricing"
          className="text-sm uppercase tracking-[0.08em] text-[#5c4f44] hover:text-[#9d6b5b]"
        >
          Pricing
        </a>
      </nav>
      <button
        className="rounded-sm bg-[#9d6b5b] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.04em] text-[#fffdf8] hover:cursor-pointer hidden md:inline-block md:px-5 md:py-2.5 md:text-sm"
        onClick={handleOnJoinWaitlistClick}
      >
        Join waitlist
      </button>
    </header>
  );
}
