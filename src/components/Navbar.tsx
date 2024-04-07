'use client'
import React, { useState, useEffect } from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconMessage, IconUser } from "@tabler/icons-react";
import Image from "next/image";
import logo from '../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import heart from '../images/heart.png'
import code from '../images/code.png'
import testimonial from '../images/testimonial.png'
import star from '../images/star.png'






interface NavItem {
  name: string;
  link: string;
  icon: JSX.Element;
  onClick: () => void;
}

export function Navbar() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [opennav, setOpenNav] = useState(false)


  function openNavbar(){
    setOpenNav(!opennav)
  }


  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 760); // Adjust the threshold as per your requirement
    };

    handleResize(); // Call initially to set the initial state based on window width
    window.addEventListener('resize', handleResize); // Add event listener for window resize

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up event listener on component unmount
    };
  }, []);

  function reloadPage(){
    window.location.reload()
  }
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems: NavItem[] = [
    {
      name: "Preview",
      link: "#PreviewSection",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
      onClick: () => scrollToSection('PreviewSection'),
    },
    {
      name: "Testimonials",
      link: "#TestimonialSection",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
      onClick: () => scrollToSection('TestimonialSection'),
    },
    {
      name: "Feedback",
      link: "#ReviewSection",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
      onClick: () => scrollToSection('ReviewSection'),
    },
  ];

  return (
    <div id='MainPage' className="relative  w-full flex justify-between items-center">
      <div onClick={() => reloadPage()} className="flex  items-center p-5 gap-2 mt-3 relative bottom-2">
        <Image src={logo} alt="logo" className="w-10 cursor-pointer"/> 
        <span className="font-medium cursor-pointer">Ice Theme</span>
      </div>
      {/* Conditionally render FloatingNav based on screen size */}
      { !isSmallScreen && <FloatingNav navItems={navItems} /> }
      <div className="flex justify-end items-center gap-5 mr-5">
        {/* GitHub icon */}
        <a href="https://github.com/Ayushmaan0101/Ice-Theme" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} style={{ color: 'white', fontSize: '30px' }} />
          
        </a>
        {/* Twitter icon */}
        <a href="https://twitter.com/AyushmaansinghX" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faXTwitter} style={{ color: 'white', fontSize: '30px' }}/>
        </a>
        {!isSmallScreen &&
        <div>
          <a href="https://www.buymeacoffee.com/ayushmaanx" target="_blank" rel="noopener noreferrer">
            <Image src={heart} alt="support" className="w-8"/>
          </a> 
        </div>
        }
        
        
        {isSmallScreen && 
        <div>
          <button onClick={() => openNavbar()} type="button" className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none   dark:text-gray-400 ${opennav && 'bg-gray-700 focus:ring-gray-600 focus:ring-2'}  `}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
         </button>
         {opennav &&
         <div className="absolute right-0 w-full z-50">
            <ul className="font-medium flex flex-col space-y-4 p-4 px-4 mt-4  bg-slate-900 border-gray-700">
              
              <li>
                
                <a href="#PreviewSection" className="flex items-center gap-2 py-2 px-3 text-black font-semibold bg-gradient-to-br from-white to-blue-400  rounded">
                  <Image src={code} alt="support" className="w-5"/>
                  Preview</a>
                
              </li>
              <li>
                <a href="#TestimonialSection" className="flex items-center gap-2 py-2 px-3 rounded font-semibold bg-gradient-to-br from-white to-blue-400  text-black">
                  <Image src={testimonial} alt="support" className="w-5"/>
                   Testimonials
                </a>
              </li>
              <li>
                <a href="#ReviewSection" className="flex items-center gap-2 py-2 px-3 rounded font-semibold bg-gradient-to-br from-white to-blue-400  text-black  ">
                  <Image src={star} alt="support" className="w-5"/> 
                  Write a review
                </a>
              </li>
              <li>
                <a href="https://www.buymeacoffee.com/ayushmaanx" target="_blank" rel="noopener noreferrer" className="flex  font-semibold items-center gap-1 py-2 px-3 rounded bg-gradient-to-br from-white to-blue-400  text-black ">
                  <Image src={heart} alt="support" className="w-5"/>
                  Support
                </a>
              </li>
             
            </ul>
          </div> 
         }
        </div>
        }
      </div>
    </div>
  );
}

export default Navbar;
