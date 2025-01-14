import React from 'react';
import Image from 'next/image';

function EditorPick() {
  return (
    <div className='bg-gray-100'>
      <br /><br /><br />
      <div className="w-[1350px] h-[500px] mx-auto bg-gray-100 relative">
        <EditorsPickTitle />
        <br /><br />
        {/* Main Grid Container */}
        <div className="grid grid-cols-4 grid-rows-4 gap-4 w-full h-full p-4 px-[150px]">
          {/* MEN (Spanning 2 rows and 2 columns) */}
          <div className="relative col-span-2 row-span-4">
            <Image
              src="/images/Card1.png"
              alt="Men"
              className="h-full object-cover"
              width={516}
              height={500}
            />
            <div className="absolute inset-0 flex items-end justify-start ">
              <span className="text-black font-bold text-[15px] bg-white pt-[13px] pr-[70px] pb-[13px] pl-[70px] mb-6 ml-[40px]">
                MEN</span>
            </div>
          </div>

          {/* WOMEN (Spanning 2 columns) */}
          <div className="relative row-span-4">
            <Image
              src="/images/Card2.png"
              alt="Women"
              className="w-full h-full object-cover"
              width={516}
              height={500}
            />
            <div className="absolute inset-0 flex items-end justify-start ">
              <span className="text-black font-bold text-[15px] bg-white pt-[13px] pr-[40px] pb-[13px] pl-[40px] mb-6 ml-3">
                WOMEN</span>
            </div>
          </div>

          {/* ACCESSORIES */}
          <div className="relative row-span-2">
            <Image
              src="/images/Card3.png"
              alt="Accessories"
              className="w-full h-full object-cover overflow-hidden"
              width={516}
              height={500}
            />
            <div className="absolute inset-0 flex items-end justify-start ">
              <span className="text-black font-bold text-[15px] bg-white pt-[13px] pr-[35px] pb-[13px] pl-[35px] mb-6 ml-3">
                ACCESSORIES</span>
            </div>
          </div>

          {/* KIDS */}
          <div className="relative row-span-2">
            <Image
              src="/images/Card4.png"
              alt="Kids"
              className="w-full h-full object-cover"
              width={516}
              height={500}
            />
            <div className="absolute inset-0 flex items-end justify-start ">
              <span className="text-black font-bold text-[15px] bg-white pt-[13px] pr-[35px] pb-[13px] pl-[35px] mb-6 ml-3">
                KIDS</span>
            </div>
          </div>
        </div>
      </div>
      <br /><br /><br /><br /><br /><br />
    </div>
  );
}

export default EditorPick;

function EditorsPickTitle() {
  return (
    <div className="text-[#252B42] w-[607px] h-[62px] justify-self-center">
      <h1 className="font-[700] text-[24px] leading-[32px] tracking-[0.1px] text-center pb-3 text-[#252B42]">EDITOR&apos;S PICK</h1>
      <p className="font-[600] text-[14px] text-[#737373] leading-[20px] tracking-[0.2px] text-center pb-[-20px]">
        Problems trying to resolve the conflict between
      </p>
    </div>
  )
}
