// import { ChevronDown } from 'lucide-react';
import React from 'react'
import Link from 'next/link';


const FirstHeader = () => {
  return (
    <div className="bg-[#252B42] items-center text-white h-[50px] px-2 py-1 pt-2 xs:hidden md:hidden lg:block sm:hidden">
    <div className="container mt-[-9px] mx-auto px-4 flex justify-between items-center text-sm">
      {/* Contact Info */}
      <div className="flex items-center space-x-4 w-[700px] p-[10px] gap-5">
      <span className="flex items-center">
            <i className="bi bi-telephone mr-2"></i> (225) 555-0118
      </span>

      <span className="flex items-center font-bold">
            <i className="bi bi-envelope mr-2"></i> michelle.rivera@example.com
      </span>
      </div>

      {/* Promotion Message */}
      <div className="flex items-center font-semibold  mr-[20px] w-[400px] text-sm gap-4">
        <span>Follow Us and get a chance to win 80% off</span>
      </div>

      {/* Social Media & Utility Icons */}
      <div className="w-[250px] h-[30px] p-5 pb-9  flex items-center gap-4">
       <h6 className="w-[233px]  mt-[22px] h-[24px] font-bold ">Follow Us :</h6>
        
        <div className="flex gap-4 items-center justify-center mx-auto my-auto">
          <i className="bi bi-instagram hover:text-gray-300 cursor-pointer"></i>
          <i className="bi bi-youtube hover:text-gray-300 cursor-pointer"></i>
          <i className="bi bi-facebook hover:text-gray-300 cursor-pointer"></i>
          <i className="bi bi-twitter hover:text-gray-300 cursor-pointer"></i>
        </div>
        </div>
      </div>
      </div>
  
  )
}
export default FirstHeader;

