import { AppBar } from "@/components/AppBar";
import { Discover } from "@/components/Discover";
import { HeroSection } from "@/components/HeroSection";
import { PopularDemand } from "@/components/PopularDemand";

export default function Home() {
  return (
    <div className="background bg-[#E8EFF2]">
      <AppBar />
      <HeroSection />
      <PopularDemand />
      <Discover />
    </div>
  );
}
