import Image from 'next/image';
import Blaze from '../images/Blaze Theme Preview.png'

function Theme() {
  return (
    <div className="mt-64 bg-indigo-500">
        <p className='text-4xl p-16  px-5 font-bold'>Sorry Draculas for making you all exist in snow</p>
    <div className='flex justify-center '>
        
        <Image src={Blaze} alt='theme' className='md:w-[900px] rounded-lg mb-24 px-3'/>
    </div>
      
    </div>
  )
}

export default Theme;
// bg-gradient-to-t from-sky-400 to-blue-500