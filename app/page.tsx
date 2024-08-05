import { AppBar } from "@/components/AppBar";
import { Discover } from "@/components/Discover";
import { Explore } from "@/components/Explore";
import { HeroSection } from "@/components/HeroSection";
import { PopularDemand } from "@/components/PopularDemand";
import { QnA } from "@/components/QnA";

export default function Home() {
  return (
    <div className="background bg-[#E8EFF2]">
      <AppBar />
      <HeroSection />
      <PopularDemand />
      <Discover />
      <Explore />
      <QnA />
    </div>
  );
}
