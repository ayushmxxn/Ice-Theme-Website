'use client';
import Image from 'next/image';
import React from 'react';
import { FaRedditAlien } from "react-icons/fa";
import { motion } from 'framer-motion';
import stars from '../images/stars.png';
import { Poppins } from "next/font/google";
import { StaticImageData } from 'next/image';

const poppin = Poppins({ subsets: ["latin"], weight: "500" });

type Mode = 'light' | 'dark';

interface Testimonial {
  image: string | StaticImageData;
  name: string;
  text: string;
  social: string;
}

interface TestimonialProps {
  testimonials: Testimonial[];
  mode?: Mode;
}

const Review: React.FC<TestimonialProps> = ({ testimonials, mode = 'light' }) => {

  const openInNewTab = (url: string) => {
    const win = window.open(url, '_blank');
    if (win) {
      win.focus();
    }
  };

  return (
    <div id='TestimonialSection' className={`${poppin.className}`}>
      <div className={`flex flex-col  items-center justify-center pt-5 bg-black`}>
        <div className='flex flex-col  gap-5 mb-8 mt-10'>
          <span className='text-center text-4xl'>Read what people are saying</span>
          <div>
            <motion.div id='Rating Stars' className='flex justify-center items-center mt-2 mb-5'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Image src={stars} alt='rating' width={40} height={40}></Image>
              <Image src={stars} alt='rating' width={40} height={40}></Image>
              <Image src={stars} alt='rating' width={40} height={40}></Image>
              <Image src={stars} alt='rating' width={40} height={40}></Image>
              <Image src={stars} alt='rating' width={40} height={40}></Image>
            </motion.div>
          </div>
        </div>
      </div>
      <div className='relative '>
        <div className={`flex pb-20 justify-center items-center gap-5 flex-wrap bg-black shadow-black overflow-hidden relative`}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`${mode === 'dark' ? 'bg-black' : 'bg-white'} border border-slate-300 w-96  h-auto rounded-2xl p-5 relative`}
            >
              <div className='flex items-center'>
                <Image
                  src={testimonial.image || 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                  alt='profile'
                  width={40}
                  height={40}
                  className='rounded-full'
                />
                <div className='flex flex-col pl-4 text-sm'>
                  <span className={`${mode === 'dark' ? 'text-white' : 'text-black'}`}>
                    {testimonial.name}
                  </span>
                </div>
              </div>
              <div className='mt-5 mb-5 text-sm text-start leading-6'>
                <span className={`${mode === 'dark' ? 'text-slate-300' : 'text-black'}`}>
                  {testimonial.text}
                </span>
              </div>
              <div onClick={() => openInNewTab(testimonial.social || '')} className='absolute top-5 right-5 cursor-pointer'>
                <FaRedditAlien className={`${mode === 'dark' ? 'text-white' : 'text-slate-800'}`} size={20} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
