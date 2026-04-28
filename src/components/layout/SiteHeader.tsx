import { trackEvent } from "../../lib/analytics";
import { openWaitlistForm } from "../../lib/tally";
import { Button } from "../atoms/Button";

export function SiteHeader() {
  const handleOnJoinWaitlistClick = () => {
    trackEvent("cta_click", { placement: "top_nav" });
    openWaitlistForm();
  };

  return (
    <header className="flex h-20 items-center justify-between rounded-xl border border-border bg-bg-elevated/90 px-5 shadow-md md:h-24 md:px-8">
      <div className="font-['Cormorant_Garamond'] text-3xl font-bold text-accent md:text-4xl">
        GuestFeed
      </div>
      <nav className="hidden gap-8 md:flex">
        <a
          href="#journey"
          className="text-sm uppercase tracking-[0.08em] text-text-muted hover:text-accent"
        >
          How it works
        </a>
        <a
          href="#pricing"
          className="text-sm uppercase tracking-[0.08em] text-text-muted hover:text-accent"
        >
          Pricing
        </a>
      </nav>
      <Button
        className="hidden font-bold tracking-[0.04em] md:inline-block"
        size="compact"
        onClick={handleOnJoinWaitlistClick}
      >
        Join waitlist
      </Button>
    </header>
  );
}
