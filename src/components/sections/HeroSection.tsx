import { trackEvent } from "../../lib/analytics";
import feedDemoMp4 from "../../assets/tiny_feed_demo_v2.mp4";
import feedDemoMobileMp4 from "../../assets/tiny_feed_demo_v2_mobile.mp4";
import feedDemoWebm from "../../assets/tiny_feed_demo_v2.webm";
import feedDemoMobileWebm from "../../assets/tiny_feed_demo_v2_mobile.webm";
import feedDemoPoster from "../../assets/tiny_feed_demo_v2_poster.jpg";
import telegramCutoutImage from "../../assets/telegram_cutout.png";
import { openWaitlistForm } from "../../lib/tally";
import { Button } from "../atoms/Button";

export function HeroSection() {
  const handleOnExpressInterestClick = () => {
    trackEvent("cta_click", { placement: "hero_primary" });
    openWaitlistForm();
  };

  return (
    <section className="grid gap-6 px-2 pb-12 pt-8 md:gap-10 md:px-6 md:pb-24 md:pt-20 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:pt-24">
      <div>
        <p className="mb-5 inline-flex rounded-full border border-border-soft px-4 py-1.5 text-xs uppercase tracking-[0.09em] text-accent">
          Private and sophisticated
        </p>
        <h1 className="mb-6 font-['Cormorant_Garamond'] text-4xl leading-[1.05] md:mb-7 md:text-7xl lg:text-8xl">
          Capturing the magic of your special day, <em>live.</em>
        </h1>
        <p className="max-w-2xl text-base leading-7 text-text-muted md:text-xl md:leading-9">
          A private social wall for your wedding. Guests share photos and wishes
          via Telegram, appearing instantly on the live display.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button
            className="font-bold tracking-[0.04em]"
            onClick={handleOnExpressInterestClick}
          >
            Express interest
          </Button>
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-md pb-6 pt-0 md:max-w-2xl md:pb-14 lg:mx-0 lg:max-w-none lg:pb-10">
        <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-border bg-bg-muted shadow-xl">
          <video
            className="h-full w-full object-contain object-center"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster={feedDemoPoster}
          >
            <source
              media="(max-width: 767px)"
              src={feedDemoMobileWebm}
              type="video/webm"
            />
            <source
              media="(max-width: 767px)"
              src={feedDemoMobileMp4}
              type="video/mp4"
            />
            <source src={feedDemoWebm} type="video/webm" />
            <source src={feedDemoMp4} type="video/mp4" />
            <img
              src={feedDemoPoster}
              alt="Wedding feed with guest messages"
              className="h-full w-full object-contain object-center"
              loading="eager"
              decoding="async"
            />
          </video>
        </div>
        <div className="absolute -bottom-2 -right-2 w-[100px] md:bottom-4 md:-right-4 md:w-[170px] lg:bottom-6 lg:right-6 lg:w-[180px] xl:-bottom-10 xl:-right-10 xl:w-[220px]">
          <img
            src={telegramCutoutImage}
            alt="Telegram app on phone"
            className="h-auto w-full drop-shadow-xl"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
