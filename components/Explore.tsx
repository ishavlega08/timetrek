import Image from "next/image";

export const Explore = () => {
    return (
        <div className="text-white mt-32 mx-auto max-w-7xl px-4 sm:px-6 lg:px-7 flex">
            <div className="bg-dark-blue rounded-l-2xl  overflow-hidden flex flex-col justify-center items-center w-1/2">
                <div className="max-w-lg">
                    <h1 className="font-bold text-4xl text-start">Explore New Pixel</h1>
                    <p className="mt-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsa nulla et saepe.</p>

                    <div className="flex mt-6 items-center">
                        <button className="text-black font-semibold bg-white rounded-lg py-2 px-4 text-md w-1/2">Buy Now</button>
                        <h3 className="mx-auto text-lg tracking-wider">Starts from ₹12,000</h3>
                    </div>
                </div>
            </div>
            <div className="w-1/2 cursor-pointer">
                <Image
                    src="/images/explore1.png"
                    alt="exploreImg"
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="rounded-r-2xl"
                />
            </div>
        </div>
    );
}