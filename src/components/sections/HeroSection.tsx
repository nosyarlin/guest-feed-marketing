import { useRef } from "react";
import { trackEvent } from "../../lib/analytics";
import { ButtonLink } from "../ui/ButtonLink";
import feedDemoMp4 from "../../assets/tiny_feed_demo_v2.mp4";
import feedDemoMobileMp4 from "../../assets/tiny_feed_demo_v2_mobile.mp4";
import feedDemoWebm from "../../assets/tiny_feed_demo_v2.webm";
import feedDemoMobileWebm from "../../assets/tiny_feed_demo_v2_mobile.webm";
import feedDemoPoster from "../../assets/tiny_feed_demo_v2_poster.jpg";
import telegramCutoutImage from "../../assets/telegram_cutout.png";

export function HeroSection() {
  const hasTrackedVideoPlay = useRef(false);

  const handleDemoPlay = () => {
    if (hasTrackedVideoPlay.current) {
      return;
    }
    hasTrackedVideoPlay.current = true;
    trackEvent("video_play", { placement: "hero_demo" });
  };

  return (
    <section className="grid gap-6 px-2 pb-12 pt-8 md:grid-cols-[1.1fr_1fr] md:gap-12 md:px-6 md:pb-24 md:pt-24">
      <div>
        <p className="mb-5 inline-flex rounded-full border border-[#d4c1ad] px-4 py-1.5 text-xs uppercase tracking-[0.09em] text-[#9d6b5b]">
          Private and sophisticated
        </p>
        <h1 className="mb-6 font-['Cormorant_Garamond'] text-4xl leading-[1.05] md:mb-7 md:text-8xl">
          Capturing the magic of your special day, <em>live.</em>
        </h1>
        <p className="max-w-2xl text-base leading-7 text-[#5c4f44] md:text-xl md:leading-9">
          A private social wall for your wedding. Guests share photos and wishes
          via Telegram, appearing instantly on the live display.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonLink
            href="#waitlist"
            className="text-sm"
            onClick={() =>
              trackEvent("cta_click", { placement: "hero_primary" })
            }
          >
            Express interest
          </ButtonLink>
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-md pb-6 pt-0 md:mx-0 md:max-w-none md:pb-10">
        <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-[#e2d6c8] bg-[#f2ebe2] shadow-[0_12px_32px_rgba(61,45,32,0.1)]">
          <video
            className="h-full w-full object-contain object-center"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster={feedDemoPoster}
            onPlay={handleDemoPlay}
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
        <div className="absolute -bottom-2 -right-2 w-[100px] md:-bottom-10 md:-right-10 md:w-[220px]">
          <img
            src={telegramCutoutImage}
            alt="Telegram app on phone"
            className="h-auto w-full drop-shadow-[0_16px_20px_rgba(31,24,18,0.35)]"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
