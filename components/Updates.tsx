export const Updates = () => {
  return (
    <div className="mt-32 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex">
        <div className="w-1/2">
            <h1 className="text-4xl font-bold mb-8">Don&apos;t Miss Any Updates</h1>

            <div className="flex w-10/12 h-16">
                <input
                type="search"
                className="w-full border-2 border-black rounded-l-md text-xl p-2 outline-none"
                />
                <button
                    type="submit"
                    className="bg-black text-white border-2 border-black rounded-r-md p-2"
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-12"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                    </svg>
                </button>
            </div>
        </div>
        
        <div className="w-1/2 flex flex-col">
            <p className="text-gray-700 text-xl w-full leading-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, sit voluptate.</p>
            <p className="text-gray-700 text-xl w-full leading-8 mt-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, sit voluptate.</p>
            <p className="text-gray-700 text-xl w-full leading-8 mt-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, sit voluptate.</p>
            <p className="text-gray-700 text-xl w-full leading-8 mt-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, sit voluptate.</p>
        </div>
    </div>
  );
};
