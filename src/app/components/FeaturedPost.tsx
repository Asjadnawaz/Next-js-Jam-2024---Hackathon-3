import React from 'react';
import Image from 'next/image';
import { LuAlarmClock } from "react-icons/lu";
import { LiaCommentsSolid } from "react-icons/lia";
const FeaturedPosts = () => {
  return (
    <div className="container  ml-[60px] mt-[6px] px-4 py-3 ">
      <br /><br /><br />
      {/* Section Header */}
      <h6 className="text-3xl text-center text-[16px] h-[24px] font-bold text-[#23A6F0] mb-8">Practice Advice</h6>
      <h2 className="text-3xl font-bold text-center text-[40px]  ${montserrat.className} font-bold text-[#252B42] mb-8">Featured Posts</h2>
      <p className="text-lg justify-self-center text-center text-[#737373] mt-[-20px] text-[14px]  ${montserrat.className} w-[500px] mb-16">
        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
      </p>
      
      {/* Grid of Featured Posts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* First Featured Post */}
        <div className="bg-white  shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="bg-[#E74040] text-white font-bold px-2  ">NEW</div>
          </div>
          <Image
            src="/images/road.png"
            alt="Featured Post 1"
            width={350}
            height={250}
            className=" mb-4 "></Image>
          <h4 className=" ${montserrat.className}  text-xl font-bold mb-2 text-[#252B42]">Loudest à la Madison #1 (L&apos;integral)</h4>
          <p className=" ${montserrat.className}   text-[#737373]] mb-4">
            We focus on ergonomics and meeting you where you work. It&apos;s only a keystroke away.
          </p>
          
          <div className="flex items-center mt-10">
            {/* Author Icon */}
            <div className="flex items-center mr-4">
              <div className="w-[120px] flex">
            <span>  <LuAlarmClock className="text-[#23A6F0] text-sm"/></span>

            <div className='ml-2 '>
            21 April 2021
            </div>

            </div>
            </div>
            {/* Time Icon */}
            <div className="flex items-center mr-4">
            <div className="w-[140px] flex">
            <span>  <LiaCommentsSolid  className="text-[#23A6F0] text-sm"/></span>

            <div className='ml-2'>
            10 comments
            </div>

            </div>
        
            </div>
          </div>
        </div>
{/* Second Featured Post */}
<div className="bg-white  shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="bg-[#E74040] text-white font-bold  px-2">NEW</div>
          </div>
          <Image
            src="/images/car.png"
            alt="Featured Post 1"
            width={350}
            height={250}
            className="mb-4 "
          />
          <h4 className="text-xl font-bold mb-2 text-[#252B42]">Loudest à la Madison #1 (L&apos;integral)</h4>
          <p className="text-gray-700 mb-4">
            We focus on ergonomics and meeting you where you work. It&apos;s only a keystroke away.
          </p>
          <br />
          <div className="flex items-center">
            {/* Author Icon */}
            <div className="flex items-center mr-4">
              <div className="w-[120px] flex">
            <span>  <LuAlarmClock className="text-[#23A6F0] text-sm"/></span>

            <div className='ml-2 '>
            21 April 2021
            </div>

            </div>
            </div>
            {/* Time Icon */}
            <div className="flex items-center mr-4">
            <div className="w-[140px] flex">
            <span>  <LiaCommentsSolid  className="text-[#23A6F0] text-sm"/></span>

            <div className='ml-2'>
            10 comments
            </div>

            </div>
        
            </div>
          </div>
        </div>
        {/* Third Featured Post */}
        <div className="bg-white  shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="bg-[#E74040] text-white font-bold  px-2">NEW</div>
          </div>
          <Image
            src="/images/unsplash.png"
            alt="Featured Post 2"
            width={350}
            height={250}
            className=" mb-4 "
          />
          <h4 className="text-xl font-bold mb-2 text-[#252B42]">Aesthetic Vibrance & Design</h4>
          <p className="text-gray-700 mb-4">
            A detailed exploration of aesthetics in modern visual design systems.
          </p>
          <br />
          <br />
          <div className="flex items-center">
            {/* Author Icon */}
            <div className="flex items-center mr-4">
              <div className="w-[120px] flex">
            <span>  <LuAlarmClock className="text-[#23A6F0] text-sm"/></span>

            <div className='ml-2 '>
            21 April 2021
            </div>

            </div>
            </div>
            {/* Time Icon */}
            <div className="flex items-center mr-4">
            <div className="w-[140px] flex">
            <span>  <LiaCommentsSolid  className="text-[#23A6F0] text-sm"/></span>

            <div className='ml-2'>
            10 comments
            </div>

            </div>
        
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
