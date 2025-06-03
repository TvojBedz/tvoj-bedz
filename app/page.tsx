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
        <section
          id="kontakt"
          className="min-h-screen flex flex-col items-center justify-center px-6 bg-white text-center"
        >
          <div>
            <h2 className="text-3xl font-semibold mb-6">Kontaktiraj nas</h2>
            <p className="max-w-screen-md mx-auto text-gray-700 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin
              eros at velit laoreet.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
