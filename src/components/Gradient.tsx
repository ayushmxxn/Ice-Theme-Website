import React from "react";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import Image from "next/image";
import Blaze from '../images/Blaze Theme Preview.png'

export function Gradient() {
  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
          <Image src={Blaze} alt='theme' className='md:w-[900px] rounded-lg mb-32 mt-64'/>
        </p>
      </div>
    </BackgroundGradientAnimation>
  );
}
