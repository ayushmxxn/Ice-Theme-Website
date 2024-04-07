"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";

function Hero() {
  return (
    <div className=" w-full  flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-3xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
        Ice Theme
      </h1>
      <h1 className="mt-3 md:text-2xl text-2xl lg:text-2xl font-medium text-center text-slate-200 relative z-20">
        Icy tones create a serene workspace.
      </h1>
      <div className="w-[30rem] h-30 rounded-full relative">
        
        {/* Gradients */} 
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1000}
          className="w-full h-full"
          particleColor="#FFF"
        />
        
        

       
        
      </div>
    </div>
  );
}

export default Hero;