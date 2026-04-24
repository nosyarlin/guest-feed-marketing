import { trackEvent } from "../../lib/analytics";
import { ButtonLink } from "../ui/ButtonLink";
import heroImage from "../../assets/hero_optimized.jpg";
import heroImageMobile from "../../assets/hero_mobile.jpg";
import telegramCutoutImage from "../../assets/telegram_cutout.png";

export function HeroSection() {
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
      <div className="relative min-h-[360px] md:min-h-[560px]">
        <div className="absolute inset-x-0 bottom-2 top-0 rounded-xl border border-[#e2d6c8] bg-[linear-gradient(165deg,rgba(255,253,248,0.55),rgba(243,237,228,0.95)),radial-gradient(circle_at_55%_32%,rgba(157,107,91,0.28),transparent_38%),linear-gradient(35deg,#fffefa,#f3ede4)]">
          <picture>
            <source media="(max-width: 768px)" srcSet={heroImageMobile} />
            <img
              src={heroImage}
              alt="Wedding couple"
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
              decoding="async"
            />
          </picture>
        </div>
        <div className="absolute -bottom-3 -right-3 w-[100px] md:w-[220px] md:-bottom-16 md:-right-12">
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
