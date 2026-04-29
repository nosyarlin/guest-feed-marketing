import { SiteFooter } from "./components/layout/SiteFooter";
import { SiteHeader } from "./components/layout/SiteHeader";
import { HeroSection } from "./components/sections/HeroSection";
import { JourneySection } from "./components/sections/JourneySection";
import { PricingSection } from "./components/sections/PricingSection";
import { WaitlistSection } from "./components/sections/WaitlistSection";

function App() {
  return (
    <main className="mx-auto min-h-screen max-w-[1460px] rounded-2xl border border-border bg-bg-page px-4 pb-8 pt-4 text-text-primary bg-[radial-gradient(circle_at_1px_1px,rgb(31_24_18/0.045)_1px,transparent_0),linear-gradient(180deg,var(--color-bg-page)_0%,var(--color-bg-soft)_45%,var(--color-bg-page)_100%)] bg-size-[28px_28px,100%_100%] md:px-12 md:pb-20 md:pt-10">
      <SiteHeader />
      <HeroSection />
      <JourneySection />
      <PricingSection />
      <WaitlistSection />
      <SiteFooter />
    </main>
  );
}

export default App;
