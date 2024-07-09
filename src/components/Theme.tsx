'use client'
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FiArrowRight } from "react-icons/fi";
import Ice from '../images/Ice theme Preview Main.png';
import Blaze from '../images/blazepreview.png';
import { useState, useRef, useEffect } from 'react';
import { useAnimation, useTransform, useScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import Image from "next/image";

const COLORS_TOP = ["#13FFAA"];

const Theme = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(circle at 50% 15%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowIce(prevShowIce => !prevShowIce);
    }, 5000); 

    return () => clearInterval(interval); 
  }, [color]);


  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      id="ThemeSection"
      className="relative grid  place-content-center overflow-hidden bg-gray-950 px-4  pt-16 pb-24 text-gray-200"
    >
      <div  className="text-[23px] md:text-4xl lg:px-80 sm:px-40 text-center font-bold text-white mb-8">
      Make Coding Cooler Than the Other Side of the Pillow.
      </div>
      <div className='flex justify-center'>
        <motion.div className='w-full max-w-4xl'
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1}}
     
        >
        
          <Image src={showIce ? Ice : Blaze} alt={showIce ? 'Ice Theme Preview' : 'Blaze Theme Preview'} className='p-2 border border-slate-400 backdrop-blur-md bg-white/20 rounded-xl mb-5' />
        </motion.div>

      
      </div>
    </motion.section>
  );
};

export default Theme;
