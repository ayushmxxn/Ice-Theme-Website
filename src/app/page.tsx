import Navbar from "@/components/Navbar";
import Hero from '@/components/Hero'
import Theme from '../components/Theme'
import Reviews from '@/components/Reviews'
import UserReviewForm from '@/components/UserReviewForm'
import Footer from '@/components/Footer'


function Home() {

  return (
    <div className='text-center'>
      <Navbar/>
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