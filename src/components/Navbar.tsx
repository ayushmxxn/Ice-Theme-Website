'use client'
import React, { useState, useEffect } from "react";
import { FloatingNav } from "./ui/floating-navbar";
import Image from "next/image";
import logo from '../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import heart from '../images/heart.png'
import code from '../images/code.png'
import testimonial from '../images/testimonial.png'
import star from '../images/star.png'
import { Nunito_Sans } from "next/font/google";



interface NavItem {
  name: string;
  link: string;
  onClick: () => void;
}

const Nunito = Nunito_Sans({subsets: ['latin'], weight: '700'})

export function Navbar() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 760); 
    };

    handleResize(); 
    window.addEventListener('resize', handleResize); 

    return () => {
      window.removeEventListener('resize', handleResize); 
    };
  }, []);

  useEffect(() => {
    if (openNav) {
      setMenuHeight(document.getElementById('menuList')?.scrollHeight || 0);
    } else {
      setMenuHeight(0);
    }
  }, [openNav]);

  function toggleNavbar() {
    setOpenNav(!openNav);
  }

  function reloadPage() {
    window.location.reload();
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
      link: "#ThemeSection",
      onClick: () => scrollToSection('ThemeSection'),
    },
    {
      name: "Testimonials",
      link: "#TestimonialSection",
      onClick: () => scrollToSection('TestimonialSection'),
    },
    {
      name: "Write a review",
      link: "https://marketplace.visualstudio.com/items?itemName=AyushmaanSingh.blazetheme&ssr=false#review-details",
      onClick: () => scrollToSection('ReviewSection'),
    },
  ];

  return (
    <div id='MainPage' className="relative w-full flex justify-between items-center">
      <div onClick={() => reloadPage()} className="flex items-center p-5 gap-2 mt-3 relative bottom-2">
        <Image src={logo} alt="logo" className="w-10 cursor-pointer"/> 
        <span className={`font-medium cursor-pointer ${Nunito.className}`}>Ice Theme</span>
      </div>

      { !isSmallScreen && <FloatingNav navItems={navItems} /> }
      <div className="flex justify-end items-center gap-5 mr-5">

        <a href="https://github.com/Ayushmaan0101/Ice-Theme" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} style={{ color: 'white', fontSize: '30px' }} />
        </a>

        <a href="https://twitter.com/ayushmxxn" target="_blank" rel="noopener noreferrer">
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
          <button onClick={() => toggleNavbar()} type="button" className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none dark:text-gray-400 ${openNav && 'bg-gray-700 focus:ring-gray-600 focus:ring-2'}  `}>
            <span className="sr-only">Open main menu</span>
            {!openNav ?
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
              :
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            }
         </button>
         
         {openNav &&
           <div className={`absolute right-0 w-full  z-50 transition-all ease-linear duration-500`} style={{ maxHeight: menuHeight, overflow: 'hidden' }}>
              <ul id="menuList" className="font-medium flex flex-col space-y-5 p-4 px-4 mt-4 h-64 bg-slate-900 bg-opacity-10 backdrop-blur-xl border-gray-700">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a href={item.link} onClick={() => toggleNavbar()} className="flex items-center gap-2 py-2 px-3 text-white font-semibold rounded">
                      <Image src={index === 0 ? code : index === 1 ? testimonial : star} alt="icon" className="w-5"/>
                      {item.name}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="https://www.buymeacoffee.com/ayushmaanx" target="_blank" rel="noopener noreferrer" className="flex font-semibold items-center gap-2 py-2 px-3 pb-10 rounded text-white ">
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
