import Image from "next/image";

export const PopularDemand = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-10">

      <h1 className="text-4xl font-bold mb-8">Popular Demands</h1>

      <div className="flex justify-evenly">
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

      <div className="flex justify-center mt-32">
        <div className="bg-white rounded-lg mx-3 w-44 h-44">
            Rolex
        </div>
        <div className="bg-white rounded-lg mx-3 w-44 h-44">
            Zenith
        </div>
        <div className="bg-white rounded-lg mx-3 w-44 h-44">
            Omega
        </div>
        <div className="bg-white rounded-lg mx-3 w-44 h-44">
            Gucci
        </div>
      </div>
    </div>
  );
};
