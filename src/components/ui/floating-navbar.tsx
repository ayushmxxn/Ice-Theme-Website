"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";

export const FloatingNav = ({
  
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
  
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
   
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.01) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(false);
        } else {
          setVisible(false);
        }
      }
    }
  });

   const openExtensionPage = () => {

    const id= 'vscode:extension/AyushmaanSingh.blazetheme'
    window.open(id)
    
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
  "flex max-w-fit fixed top-6 inset-x-0 mx-auto border border-white/[0.3] rounded-full bg-white/10  backdrop-blur-md shadow-[0px_4px_8px_rgba(0,0,0,0.1)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
  className
)}

      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative text-neutral-50 items-center flex space-x-1   hover:text-neutral-300"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </Link>
        ))}
        <button onClick={()=> openExtensionPage()} className="border  text-sm font-medium relative border-white/40 text-white  px-4 py-2 rounded-full">
          <span>Get theme</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-200 to-transparent  h-px" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
