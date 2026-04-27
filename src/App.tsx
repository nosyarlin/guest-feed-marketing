import { SiteFooter } from "./components/layout/SiteFooter";
import { SiteHeader } from "./components/layout/SiteHeader";
import { HeroSection } from "./components/sections/HeroSection";
import { JourneySection } from "./components/sections/JourneySection";
import { PricingSection } from "./components/sections/PricingSection";
import { WaitlistSection } from "./components/sections/WaitlistSection";

function App() {
  return (
    <main className="mx-auto min-h-screen max-w-[1460px] rounded-2xl border border-[#e2d6c8] bg-[#f9f5ef] px-4 pb-8 pt-4 text-[#1f1812] [background-image:radial-gradient(circle_at_1px_1px,rgba(31,24,18,0.045)_1px,transparent_0),linear-gradient(180deg,#f9f5ef_0%,#f3ede4_45%,#f9f5ef_100%)] [background-size:28px_28px,100%_100%] md:px-12 md:pb-20 md:pt-10">
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
