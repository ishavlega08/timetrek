import { AppBar } from "@/components/AppBar";
import { Discover } from "@/components/Discover";
import { Explore } from "@/components/Explore";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { PopularDemand } from "@/components/PopularDemand";
import { Updates } from "@/components/Updates";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div className="background bg-[#E8EFF2]">
      <AppBar />
      <HeroSection />
      <PopularDemand />
      <Discover />
      <Explore />
      <WhyChooseUs />
      <Updates />
      <Footer />
    </div>
  );
}
