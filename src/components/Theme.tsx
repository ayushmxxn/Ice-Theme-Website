'use client'
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Ice from '../images/Ice theme Preview Main.png';
import Blaze from '../images/blazepreview.png';
import { useScroll, useTransform } from 'framer-motion';

const Theme = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "3.33 1"]
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  const [showIce, setShowIce] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowIce((prevShowIce) => !prevShowIce);
    }, 5000);

    // Check if the user is on a mobile device
    function isMobileDevice() {
      return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1) || (window.screen && window.screen.width < 768);
    }

    setIsMobile(isMobileDevice());

    return () => clearInterval(interval);
  }, []); 

  return (
    <div id='ThemeSection' className={`${isMobile ? "bg-gradient-to-b from-sky-500 via-indigo-500 to-indigo-500" : "bg-gradient-to-b from-sky-500 via-violet-600 to-violet-600"} py-12 sm:py-20`}>
      <motion.h1 ref={ref} style={{ scale: scaleProgress, opacity: scrollYProgress }} className='text-[23px] md:text-4xl lg:px-80 sm:px-40 text-center font-bold text-white mb-8 ' transition={{ duration: 0.5 }}>
        Make Coding Cooler Than the Other Side of the Pillow.
      </motion.h1>
      <div className='flex justify-center'>
        <div className='w-full max-w-4xl'>
          <Image src={showIce ? Ice : Blaze} alt={showIce ? 'Ice Theme Preview' : 'Blaze Theme Preview'} className='p-3 rounded-2xl mb-5' />
        </div>
      </div>
    </div>
  );
}

export default Theme;
