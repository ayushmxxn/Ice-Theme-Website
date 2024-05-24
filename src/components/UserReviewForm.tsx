"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";





function UserReviewForm() {

    function redirectUser(){
        
        const extensionId = "AyushmaanSingh.blazetheme";
        window.open(`https://marketplace.visualstudio.com/items?itemName=${extensionId}&ssr=false#review-details`);
    }
  
  return (
    
    <LampContainer>
      
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className={`mt-44 sm:mt-8  bg-gradient-to-br from-slate-200 to-slate-100 py-4 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:text-6xl`}
      >
        Writing a review only takes a moment.
       <div id="ReviewSection" className="relative top-10">
        
       <button 
  onClick={() => redirectUser()} 
  className="text-white font-medium text-xl bg-white/10 border px-4 py-1 rounded-full shadow-xl backdrop-filter backdrop-blur-md backdrop-opacity-50 hover:backdrop-opacity-100 transition duration-300 ease-in-out"
>
  Write a review
</button>

       </div>
      </motion.h1>
    </LampContainer>
  );
}
export default UserReviewForm;