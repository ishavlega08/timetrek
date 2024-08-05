import Image from "next/image";

export const PopularDemand = () => {
  return (
    <div className="mt-32 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

      <h1 className="text-4xl font-bold mb-8">Popular Demands</h1>

      <div className="flex cursor-pointer">
        <div className="bg-white rounded-xl shadow-md overflow-hidden w-56 mx-auto">
            <div className="relative h-80">
            <Image
                src="/images/popular1.png"
                alt="Gucci Smart Watch"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
            />
            </div>
            <div className="p-1 bg-black text-white">
            <p className="text-md font-medium text-center">Gucci Smart Watch</p>
            </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden w-56 mx-auto">
            <div className="relative h-80">
            <Image
                src="/images/popular2.png"
                alt="Gucci Smart Watch"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
            />
            </div>
            <div className="p-1 bg-black text-white">
            <p className="text-md font-medium text-center">Gucci Smart Watch</p>
            </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden w-56 mx-auto">
            <div className="relative h-80">
            <Image
                src="/images/popular3.png"
                alt="Gucci Smart Watch"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
            />
            </div>
            <div className="p-1 bg-black text-white">
            <p className="text-md font-medium text-center">Rolex Smart Watch</p>
            </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden w-56 mx-auto">
            <div className="relative h-80">
            <Image
                src="/images/popular4.png"
                alt="Gucci Smart Watch"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
            />
            </div>
            <div className="p-1 bg-black text-white">
            <p className="text-md font-medium text-center">Gucci Smart Watch</p>
            </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden w-56 mx-auto">
            <div className="relative h-80">
            <Image
                src="/images/popular5.png"
                alt="Gucci Smart Watch"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
            />
            </div>
            <div className="p-1 bg-black text-white">
            <p className="text-md font-medium text-center">Gucci Smart Watch</p>
            </div>
        </div>
      </div>

      <div className="flex justify-center mt-32 overflow-hidden">
        <div className="rounded-lg mx-3 w-44 h-44">
            <img src="/images/brand 1.png" alt="rolex logo" />
        </div>
        <div className="rounded-lg mx-3 w-44 h-44">
            <img src="/images/brand 2.png" alt="zenith logo" />
        </div>
        <div className="rounded-lg mx-3 w-44 h-44">
            <img src="/images/brand 3.png" alt="omega logo" />
        </div>
        <div className="rounded-lg mx-3 w-44 h-44">
            <img src="/images/brand 4.png" alt="gucci logo" />
        </div>
      </div>
    </div>
  );
};
