import Image from "next/image";

export const HeroSection = () => {
  return (
    <div className="">
      <div className="flex justify-center items-center bg-purple w-screen rounded-3xl mt-24">
        <div className="w-1/2">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Smart Watches Facilitate Your Every Activity
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Embrace Elegance: Define Your Moments with Exquisite Timepieces
          </p>
        </div>
        <div className="w-1/2 relative h-[400px]">
          <Image
            src="/images/heroSection.png"
            alt="Hero Section"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};
