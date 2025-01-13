import Image from 'next/image';

export default function Vite() {
  return (
    <div className=" bg-white  mt-10 pr-10 pl-10">
    <div className="bg-[#23856D]  mt-10 p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div className="flex flex-col items-start ml-[200px] w-[300px]">
          <h2 className="text-white text-sm uppercase mb-8">Summer 2020</h2>
          <h1 className="text-white text-5xl mb-4  w-[350px] text-[58px] font-bold ${montserrat.className} leading-[70px]">Vita Classic Product</h1>
          <p className="text-white text-sm mb-6 ${montserrat.className}">
            We know how large objects will act. We know how objects will act. We know.
          </p>
          <div className="flex items-center gap-5">
            <span className="text-white font-bold text-xl">$16.48</span>
            <button className="bg-[#2DC071] text-sm ml-10 text-white px-7 py-4  ${montserrat.className} font-bold hover:bg-green-600 rounded-md hover:text-white transition-all duration-300">
              ADD TO CART
            </button>
          </div>
        </div>

        {/* Product Image */}
        <div className="flex justify-center mb-[-40px] w-[500px] mr-[250px]">
          <Image
            src="/images/shop-Hero.png"
            alt="Product image"
            width={300}
            height={300}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
    </div>
  );
}
