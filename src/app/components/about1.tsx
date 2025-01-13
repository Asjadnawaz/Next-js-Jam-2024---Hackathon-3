import { useEffect } from 'react';
import Head from 'next/head'


export default function About1() {
      return (
       <div className="text-[#252B42]"> 
       <h1 className="font-bold text-[58px] ${montserrat.className} w-[542px]  ml-[500px] mt-[20px] h-[80px]">ABOUT US </h1>
       <h4 className="font-semibold  ${montserrat.className} w-[400px] text-[20px]  ml-[480px] text-[#737373]"> We know how large objects will act, 
       but things on a small scale</h4>
       <button className=" pr-[40px] pt-[15px] pb-[15px] pl-[40px] gap-[10px]  ml-[550px] text-[#23A6F0]">Get Quote Now</button>
       </div>

        
      )
    }
    