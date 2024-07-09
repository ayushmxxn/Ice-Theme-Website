'use client'
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import logo from '../images/logo.png'
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import Image from "next/image";
import Navbar from "./Navbar";

const COLORS_TOP = ["#1E67C6"];

const Hero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  
  const openExtensionPage = () => {

    const id= 'vscode:extension/AyushmaanSingh.blazetheme'
    window.open(id)
    
  };
  

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
    >
      <div className="relative z-10 flex flex-col items-center">
        <Navbar/>
        <Image src={logo} alt='logo' className='w-32 mb-5 z-10'/>
       <h1 className="bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-5xl font-semibold leading-tight text-transparent sm:text-6xl sm:leading-tight md:text-7xl md:leading-tight">
          Ice Theme
        </h1>
        <p className="mt-2 mb-10  text-center text-lg font-medium leading-relaxed  md:text-xl  md:leading-relaxed">
         Ice Theme for Visual Studio Code. <br /> Embrace Serenity with Icy Tones
        </p>
        <motion.button
        onClick={() => openExtensionPage()}
          style={{
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
        >
          Add to VS Code
          <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
        </motion.button>
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};

export default Hero;