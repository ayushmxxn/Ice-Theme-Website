'use client'
import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useTransform, useScroll, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Ice from '../images/Ice theme Preview Main.png';
import Blaze from '../images/blazepreview.png';
import { useInView } from 'react-intersection-observer';

const Theme = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "3.33 1"]
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  const [showIce, setShowIce] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const controls = useAnimation();

  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, translateY: 0 });
    }
  }, [controls, inView]);

  return (
    <div id='ThemeSection' className={`${isMobile ? "bg-gradient-to-b from-indigo-500 via-purple-300 to-indigo-500" : "bg-gradient-to-b from-indigo-500 via-purple-300 to-indigo-500"} py-12 sm:py-20`} ref={sectionRef}>
      <motion.div
        initial={{ opacity: 0, translateY: 10 }}
        animate={controls}
        transition={{ duration: 0.5 }}
        className='text-[23px] md:text-4xl lg:px-80 sm:px-40 text-center font-bold text-white mb-8'
      >
        Make Coding Cooler Than the Other Side of the Pillow.
      </motion.div>
      <div className='flex justify-center'>
        <div className='w-full max-w-4xl'>
          <Image src={showIce ? Ice : Blaze} alt={showIce ? 'Ice Theme Preview' : 'Blaze Theme Preview'} className='p-2 rounded-2xl mb-5' />
        </div>
      </div>
    </div>
  );
}

export default Theme;
