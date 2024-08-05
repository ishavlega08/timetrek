import Image from "next/image";

export const Discover = () => {
  return (
    <div className="mt-32 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8">Discover The Latest Watches</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 cursor-pointer">
        <div className="rounded-2xl overflow-hidden">
          <Image
            src="/images/discover1.jpg"
            alt="discover1"
            width={600}
            height={400}
            objectFit="cover"
          />
        </div>
        <div className="rounded-2xl overflow-hidden">
          <Image
            src="/images/discover2.png"
            alt="discover2"
            width={600}
            height={400}
            objectFit="cover"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-2xl overflow-hidden">
          <Image
            src="/images/discover3.jpg"
            alt="discover3"
            width={400}
            height={300}
            objectFit="cover"
          />
        </div>
        <div className="rounded-2xl overflow-hidden">
          <Image
            src="/images/discover3.jpg"
            alt="discover4"
            width={400}
            height={300}
            objectFit="cover"
          />
        </div>
        <div className="rounded-2xl overflow-hidden">
          <Image
            src="/images/discover5.jpg"
            alt="discover5"
            width={400}
            height={300}
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};