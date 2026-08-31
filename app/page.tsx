import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import IntroSection from "@/components/IntroSection";
import TaglineSection from "@/components/TaglineSection";
import DishSpotlight from "@/components/DishSpotlight";
import FullBleedBanner from "@/components/FullBleedBanner";
import BrandDivider from "@/components/BrandDivider";
import SecondIntroSection from "@/components/SecondIntroSection";
import BanchanSection from "@/components/BanchanSection";
import WalkInSection from "@/components/WalkInSection";
import LocationSection from "@/components/LocationSection";
import FanFavorites from "@/components/FanFavorites";
import Testimonials from "@/components/Testimonials";
import FAQAccordion from "@/components/FAQAccordion";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <IntroSection />
      <TaglineSection />
      <DishSpotlight />
      <FullBleedBanner />
      <BrandDivider />
      <SecondIntroSection />
      <BanchanSection />
      <WalkInSection />
      <LocationSection />
      <FanFavorites />
      <Testimonials />
      <FAQAccordion />
    </>
  );
}
