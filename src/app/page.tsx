import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import React from 'react'
import Reviews from '@/components/Reviews'
import UserReviewForm from '@/components/UserReviewForm'
import Theme from '../components/Theme'


function Home() {

  return (
    <div className='text-center'>
      <Hero/>
      <Theme/>
      <div className='flex justify-center'>
        <Reviews/>
      </div>
      <UserReviewForm/>
      <Footer/>
    </div>
  )
}

export default Home;
