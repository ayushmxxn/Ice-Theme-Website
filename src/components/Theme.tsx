'use client'
import Image from 'next/image';
import Blaze from '../images/Blaze Theme Preview.png';
import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Poppins } from 'next/font/google';
const poppin = Poppins({subsets: ['latin'] , weight: '600'})
function Theme() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "3.33 1"]
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <div id='ThemeSection' className={`bg-gradient-to-t from-indigo-400 to-blue-500 py-20 md:bg-gradient-to-t md:from-indigo-500 md:to-blue-500 ${poppin.className}`}>
      <motion.h1 ref={ref} style={{ scale: scaleProgress, opacity: scrollYProgress }} className='text-[24px] md:text-4xl lg:px-80 sm:px-40 text-center font-bold text-white mb-12' transition={{ duration: 0.5 }}>
        Code like it&apos;s below zero with Frozen Rainbow
      </motion.h1>
      <div className='flex justify-center'>
        <div className='w-full max-w-4xl'>
          <Image src={Blaze} alt='Blaze Theme Preview' className='p-3 rounded-2xl' />
        </div>
      </div>
    </div>
  );
}

export default Theme;
