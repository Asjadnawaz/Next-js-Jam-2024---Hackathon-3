import React from 'react'
import Link from 'next/link';

import {
    FaRegUser,
    FaShoppingCart,
    FaRegHeart,
    FaSearch,
  } from "react-icons/fa";

const SecondHeader = () => {
    return (
        <header>
          {/* Main Navigation Bar */}<div className="bg-white shadow py-5">
            <div className="container lg:mx-auto md:mx-auto px-4 flex justify-between items-center text-lg w-full">
          
              {/* Brand Name */}
              <h3 className="text-[#252B42] font-bold  ${montserrat.className} text-[24px] leading-8 tracking-[0.1px] ">Bandage</h3>
    
              {/* Navigation Links */}
              <nav className="flex space-x-6 items-center xs:hidden md:hidden lg:flex">
                <Link href="/" className="hover:text-blue-500 font-bold text-[14px] ${montserrat.className} text-[#737373] tracking-[0.2px]">
                  Home
                </Link>
                <Link href="/Shop" className="hover:text-blue-500 font-bold text-[14px] ${montserrat.className} text-[#737373] tracking-[0.2px]">
                  Shop
                </Link>
                <Link href="/About" className="hover:text-blue-500 font-bold text-[14px] ${montserrat.className} text-[#737373] tracking-[0.2px]">
                  About
                </Link>
                <Link href="/Blog" className="hover:text-blue-500 font-bold text-[14px] ${montserrat.className} text-[#737373] tracking-[0.2px]">
                  Blog
                </Link>
                <Link href="/Contact" className="hover:text-blue-500 font-bold text-[14px] ${montserrat.className} text-[#737373] tracking-[0.2px]">
                  Contact
                </Link>
                <Link href="/pages" className="hover:text-blue-500 font-bold text-[14px] ${montserrat.className} text-[#737373] tracking-[0.2px]">
                  Pages
                </Link>
              </nav>
    
              {/* Login/Register & Cart Options */}
              <div className="flex text-left space-x-6 items-center text-sm lg:text-[#23A6F0] text-black">
                <Link href="/login" className="flex gap-2 invisible lg:visible mr-[100px] items-left hover:text-[#23A6F0] font-bold text-[14px] ${montserrat.className} tracking-[0.2px]">
                  <FaRegUser className="h-5 w-5 " /> Login / Register
                </Link>
                <div className='flex space-x-6 items-center gap-2'>
                <i className="bi bi-search hover:text-blue-700 cursor-pointer text-[20px]"></i>
                <i className="bi bi-cart hover:text-blue-700 cursor-pointer text-[20px]"></i>1
                <i className="lg:bi bi-heart lg:hover:text-blue-700 lg:cursor-pointer lg:text-[20px] lg:block hidden"></i>

                <Link href ="/menu" className='block lg:hidden'>
                <i className="bi bi-list text-[20px]"></i>
                </Link>
                </div>
              </div>
            </div>
          </div>
        </header>
      );
    }
        
    

export default SecondHeader;

