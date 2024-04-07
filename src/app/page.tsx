'use client'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'

import Image from 'next/image'
import React from 'react'
import logo from '../images/logo.png'
import Reviews from '@/components/Reviews'
import UserReviewForm from '@/components/UserReviewForm'
import Preview from '@/components/Preview'




function Home() {

   const openExtensionPage = () => {

    const id= 'vscode:extension/AyushmaanSingh.blazetheme'
    window.open(id)
    
  };

  return (
    <div className='text-center mt-12 '>
      
      <div className='flex justify-center'>
        <Image src={logo} alt='logo' className='w-32 mb-5'/>
      </div>
      <Hero/>
      <div id='Get Theme Button' onClick={()=> openExtensionPage()}>
        <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-1 ">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-rose-100 to-teal-100 px-4 py-1 text-sm font-medium text-black backdrop-blur-3xl">
          Add to VS Code
          </span>
        </button>
      </div>
    
      <Preview/>
     
      <div className='flex justify-center'>
        <Reviews/>
      </div>
      <UserReviewForm/>
      <Footer/>
    </div>
  )


}

export default Home
