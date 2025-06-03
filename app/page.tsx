import FeaturedBadges from "@/components/Sections/FeaturedBadges";
import HeroSection from "@/components/Sections/HeroSection";
import HowItWorks from "@/components/Sections/HowItWorks";
import PricingSection from "@/components/Sections/PriceSection";
import UserReviews from "@/components/Sections/UserReviews";

export default function Home() {
  return (
    <div className="font-sans">
      <main className="flex flex-col">
        <HeroSection />
        <HowItWorks />
        <PricingSection />
        <FeaturedBadges />
        <UserReviews />
      </main>
    </div>
  );
}
