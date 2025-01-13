import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function PartNeuralPage() {
    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-center  mt-[-31px] ">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center ">
                    {/* Image Section */}
                    <div className="flex justify-center">
                        <Image
                            src="/images/winter-clothes.png"
                            alt="Neural Universe"
                            className="shadow-md"
                            width={500}
                            height={500}
                        />
                    </div>


                    {/* Text Content */}
                    <div className="flex flex-col w-[600px] ml-10 items-start text-center md:text-left">
                        <h5 className="${montserrat.className} font-bold  text-[#BDBDBD] text-[16px]">SUMMER 2020</h5>
                        <h2 className="text-5xl  text-[#252B42] font-bold text-40px] mb-4 ${montserrat.className}">
                            Part of the Neural Universe
                        </h2>
                        <h4 className="text-lg mb-6 w-[400px] text-[#737373] text-[20px] ${montserrat.className}">
                            We know how large objects will act, but things on a small scale.
                        </h4>
                        <div className="flex gap-4">
                            <button className="bg-[#2DC071]  text-white font-bold py-2 px-4 rounded transition duration-300">
                                Buy Now
                            </button>
                            <button className="bg-white  border-[#2DC071] shadow-md boader-1 r-5 text-[#2DC071] ml-3 font-bold py-2 px-4 rounded transition duration-300">
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
