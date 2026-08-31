import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import FanFavorites from "@/components/FanFavorites";
import Story from "@/components/Story";
import BanchanSection from "@/components/BanchanSection";
import Testimonials from "@/components/Testimonials";
import LocationSection from "@/components/LocationSection";
import FAQAccordion from "@/components/FAQAccordion";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <FanFavorites />
      <Story />
      <BanchanSection />
      <Testimonials />
      <LocationSection />
      <FAQAccordion />
    </>
  );
}
