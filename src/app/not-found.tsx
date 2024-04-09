
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import errorimg from '../images/error.png'
import { Poppins } from 'next/font/google';

const poppin = Poppins({subsets: ['latin'] , weight: '400'})

const NotFound: React.FC = () => {
  return (
    <div className={`flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white ${poppin.className}`}>
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold mb-4 text-indigo-500">Oops!</h1>
        <p className="text-lg mb-4">Looks like you&apos;ve taken a wrong turn.</p>
        <p className="text-lg mb-4">The page you&apos;re looking for doesn&apos;t exist.</p>
      </div>
      <div className="relative w-72 h-72 mb-8">
        <Image
          src={errorimg} // Replace with the path to your image
          alt="404 Illustration"
          layout="fill"
          objectFit="contain"
          quality={100}
        />
      </div>
      <Link href="/">
        <p className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded transition duration-300">
          Go Back 
        </p>
      </Link>
    </div>
  );
};

export default NotFound;
