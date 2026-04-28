import feedScreenshot from "../../assets/feed_screenshot_optimized.jpg";
import telegramScreenshot from "../../assets/telegram_screenshot_optimized.jpg";
import type { ReactNode } from "react";

type StepCardProps = {
  stepLabel: string;
  title: string;
  description: string;
  textColumnClassName?: string;
  mediaColumnClassName?: string;
  cardClassName?: string;
  textExtras?: ReactNode;
  media: ReactNode;
};

function StepCard({
  stepLabel,
  title,
  description,
  textColumnClassName = "",
  mediaColumnClassName = "",
  cardClassName = "",
  textExtras,
  media,
}: StepCardProps) {
  return (
    <li
      className={`grid gap-5 rounded-xl border border-border bg-bg-surface p-6 md:gap-9 md:p-10 ${cardClassName}`.trim()}
    >
      <div
        className={`flex flex-col justify-start ${textColumnClassName}`.trim()}
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">
          {stepLabel}
        </p>
        <h3 className="mt-2 font-['Cormorant_Garamond'] text-3xl md:text-5xl">
          {title}
        </h3>
        <p className="mt-0 max-w-xl text-base leading-7 text-text-muted md:mt-2 md:text-2xl md:leading-9">
          {description}
        </p>
        {textExtras}
      </div>
      <div className={mediaColumnClassName}>{media}</div>
    </li>
  );
}

export function JourneySection() {
  return (
    <section
      id="journey"
      className="border-y border-border px-2 py-12 md:px-6 md:py-24"
    >
      <h2 className="text-center font-['Cormorant_Garamond'] text-4xl md:text-7xl">
        The effortless journey
      </h2>
      <ol className="mt-9 space-y-6 md:mt-16 md:space-y-10">
        <StepCard
          stepLabel="Step 01"
          title="Create"
          description="Start your digital guest book in minutes and get a private password for your wedding guests."
          cardClassName="md:grid-cols-[1fr_1.05fr]"
          textExtras={
            <ul className="mt-2 space-y-3 text-base text-text-muted md:mt-4 md:text-xl">
              <li className="before:mr-2 before:text-accent before:content-['•']">
                Instant guest book setup
              </li>
              <li className="before:mr-2 before:text-accent before:content-['•']">
                Password generated for your event
              </li>
              <li className="before:mr-2 before:text-accent before:content-['•']">
                Ready to share with guests
              </li>
            </ul>
          }
          mediaColumnClassName="relative min-h-[260px] overflow-hidden rounded-xl border border-border bg-bg-soft"
          media={
            <>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgb(157_107_91/0.18),transparent_35%),linear-gradient(130deg,var(--color-bg-surface)_0%,var(--color-bg-soft)_100%)]" />
              <div className="relative z-10 flex h-full items-center justify-center p-6">
                <div className="w-full max-w-[320px] rounded-xl border border-border bg-bg-elevated p-5 shadow-lg">
                  <p className="text-xs uppercase tracking-[0.08em] text-accent">
                    Guest Feed Setup
                  </p>
                  <p className="mt-2 font-['Cormorant_Garamond'] text-3xl text-text-primary">
                    Your Event Password
                  </p>
                  <p className="mt-3 rounded-md border border-border bg-bg-surface px-3 py-2 font-mono text-xl text-text-muted">
                    z9w3-vows
                  </p>
                  <p className="mt-3 text-sm text-text-muted">
                    Share this once with guests to unlock posting.
                  </p>
                </div>
              </div>
            </>
          }
        />

        <StepCard
          stepLabel="Step 02"
          title="Connect"
          description="Guests authenticate with your Telegram bot and instantly start sending photos and wishes from their phone."
          cardClassName="md:grid-cols-[0.9fr_1.1fr]"
          textColumnClassName="order-2 md:order-2"
          mediaColumnClassName="order-1 flex items-center justify-center md:order-1"
          media={
            <div className="relative mx-auto w-full max-w-[330px] rounded-[2.2rem] border-[6px] border-phone-frame bg-phone-shell p-2 shadow-2xl">
              <div className="absolute left-1/2 top-2 h-1.5 w-16 -translate-x-1/2 rounded-full bg-phone-frame" />
              <img
                src={telegramScreenshot}
                alt="Guest authenticating and messaging in Telegram bot from a phone"
                className="h-full w-full rounded-[1.6rem] border border-phone-border object-cover"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 768px) 82vw, 300px"
              />
            </div>
          }
        />

        <StepCard
          stepLabel="Step 03"
          title="Share"
          description="Messages and photos appear on your live social wall so everyone at the wedding can enjoy the memory stream together."
          cardClassName="md:grid-cols-[0.8fr_1.2fr]"
          mediaColumnClassName="overflow-hidden rounded-xl border border-border bg-bg-elevated p-2 shadow-lg"
          media={
            <img
              src={feedScreenshot}
              alt="Live guest feed wall showing messages and photos"
              className="w-full rounded-lg border border-border"
              loading="lazy"
              decoding="async"
              sizes="(max-width: 768px) 100vw, 760px"
            />
          }
        />
      </ol>
    </section>
  );
}
