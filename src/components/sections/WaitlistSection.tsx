import { trackEvent } from "../../lib/analytics";
import { openWaitlistForm } from "../../lib/tally";
import { Button } from "../atoms/Button";

export function WaitlistSection() {
  const handleOnJoinWaitlistClick = () => {
    trackEvent("cta_click", { placement: "waitlist" });
    openWaitlistForm();
  };

  return (
    <section id="waitlist" className="px-2 py-10 md:px-6 md:py-24">
      <div className="mx-auto max-w-[860px] rounded border border-border bg-bg-elevated/90 px-7 py-10 text-center md:px-10 md:py-12">
        <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-6xl">
          Be part of the premiere.
        </h2>
        <p className="mx-auto mt-4 max-w-160 text-base leading-7 text-text-muted md:text-lg md:leading-8">
          We are rolling out Guest Feed for weddings. Join the waitlist to
          secure your spot.
        </p>
        <Button className="mt-12 py-4" fullWidth onClick={handleOnJoinWaitlistClick}>
          Join waitlist
        </Button>
      </div>
    </section>
  );
}
