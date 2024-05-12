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

  useEffect(() => {
    const interval = setInterval(() => {
      setShowIce((prevShowIce) => !prevShowIce);
    }, 5000);

    return () => clearInterval(interval);
  }, []); 
 
  return (
    <div id='ThemeSection' className={`py-12 sm:py-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-indigo-800 to-violet-600 `}>
      <motion.h1 ref={ref} style={{ scale: scaleProgress, opacity: scrollYProgress }} className='text-[23px] md:text-4xl lg:px-80 sm:px-40 text-center font-bold text-white mb-8 ' transition={{ duration: 0.5 }}>
        Make Coding Cooler Than the
        Other Side of the Pillow.
      </motion.h1>
      <div className='flex justify-center'>
        <div className='w-full max-w-4xl  '>
          <Image src={showIce ? Ice : Blaze} alt={showIce ? 'Ice Theme Preview' : 'Blaze Theme Preview'} className='p-3 rounded-2xl mb-5' />
        </div>
      </div>
    </div>
  );
}

export default Theme;
