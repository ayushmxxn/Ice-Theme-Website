"use client";
import React from "react";
import logo from '../images/logo.png'
import Image from 'next/image'
import { SparklesCore } from "./ui/sparkles";
import { Poppins } from "next/font/google";
const poppin = Poppins({subsets: ['latin'] , weight: '600'})
function Hero() {

  const openExtensionPage = () => {

    const id= 'vscode:extension/AyushmaanSingh.blazetheme'
    window.open(id)
    
  };

  return (
    <div className={`relative  w-full h-[600px]  flex flex-col items-center justify-center overflow-hidden rounded-md`}>
      <Image src={logo} alt='logo' className='w-32 mb-5 relative bottom-24 sm:bottom-20  z-10'/>
      <h1 className="sm:text-7xl text-5xl md:text-8xl  font-bold text-center text-indigo-100 relative bottom-24 sm:bottom-20 z-20 ">
        Ice Theme
      </h1>
      <h1 className={`mt-4 sm:px-[10px] md:px-[190px] lg:px-[420px] text-2xl mx-3 lg:text-2xl font-semibold text-center text-slate-200 relative bottom-24 sm:bottom-20 z-20`}>
        Make Coding Cooler Than the
        Other Side of the Pillow.
      </h1>
      <div className="absolute top-0 left-0 w-full h-full">
        <SparklesCore
          background="linear-gradient(to top, #ffffff, #d9e1e8, #ffffff)" 
          minSize={0.4}
          maxSize={1}
          particleDensity={200} 
          className="absolute top-0 left-0 w-full h-full"
          particleColor="#ffffff" 
        />
      </div>
      <div id='Get Theme Button' onClick={()=> openExtensionPage()}>
        <button className={`cursor-pointer relative bottom-8 sm:bottom-8 text-black inline-flex items-center justify-center whitespace-nowrap font-semibold px-4 py-3 leading-none border-none rounded-md shadow-md bg-gradient-to-br from-white to-blue-400 ${poppin.className}`}>
          Add to VS Code
        </button>
      </div>
    </div>
  );
}

export default Hero;
