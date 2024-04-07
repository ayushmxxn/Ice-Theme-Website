'use client'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import { SparklesCore } from "@/components/ui/sparkles";
import Image from 'next/image'
import React from 'react'
import logo from '../images/logo.png'
import Reviews from '@/components/Reviews'
import UserReviewForm from '@/components/UserReviewForm'
import Preview from '@/components/Preview'
import TabsTheme from '@/components/Tabs';
import Theme from '../components/Theme'







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
        <button className="cursor-pointer text-black inline-flex items-center justify-center whitespace-nowrap font-semibold px-4 py-3 leading-none border-none rounded-md shadow-md bg-gradient-to-br from-white to-blue-400">
          Add to VS Code
        </button>
      </div>
   
      

   
      <Theme/>
      

     
     
      <div className='flex justify-center'>
        <Reviews/>
      </div>
      <UserReviewForm/>
      <Footer/>
    </div>
  )


}

export default Home
