import React from 'react';
import review1 from '../images/review1.png';
import review2 from '../images/review2.png';
import review3 from '../images/review3.jpg';
import review4 from '../images/review4.jpg';
import review5 from '../images/review5.jpg';
import review6 from '../images/review6.jpg';
import review7 from '../images/review7.jpg';
import review8 from '../images/review8.jpg';
import review9 from '../images/review9.jpg';

import Image from 'next/image';

function Reviews() {
  return (
    <div>
      <div id='TestimonialSection' className='text-4xl mb-16 font-bold'>
        Read what people are saying
      </div>
       <div className='p-5 mb-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6'>
      <div className='rounded-md overflow-hidden bg-[#111111] shadow-md'>
        <Image src={review1} alt='review' />
      </div>
      <div className='rounded-md overflow-hidden bg-[#111111] shadow-md'>
        <Image src={review3} alt='review' />
      </div>
      
      <div className='rounded-md overflow-hidden bg-[#111111] shadow-md'>
        <Image src={review4} alt='review' />
      </div>
      <div className='rounded-md overflow-hidden bg-[#111111] shadow-md'>
        <Image src={review2} alt='review' />
      </div>
     
      
      <div className='rounded-md overflow-hidden bg-[#111111] shadow-md'>
        <Image src={review5} alt='review' />
      </div>
      <div className='rounded-md overflow-hidden bg-[#111111] shadow-md'>
        <Image src={review6} alt='review' />
      </div>
      <div className='rounded-md overflow-hidden bg-[#111111] shadow-md'>
        <Image src={review7} alt='review' />
      </div>
      <div className='rounded-md overflow-hidden bg-[#111111] shadow-md'>
        <Image src={review8} alt='review' />
      </div>
      <div className='rounded-md overflow-hidden bg-[#111111] shadow-md'>
        <Image src={review9} alt='review' />
      </div>
    </div>
    </div>
   
  );
}

export default Reviews;
