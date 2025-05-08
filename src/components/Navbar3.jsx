"use client"

import React, { useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io"; // for close icon
import Link from 'next/link';

const NavbarMenu = [
  { id: 1, title: 'Home', link: '/' },
  { id: 2, title: 'Services', link: '/services', 
    submenu: [
      { title: 'Web Development', link: '/services/web-development' },
      { title: 'App Development', link: '/services/app-development' },
      { title: 'Digital Marketing', link: '/services/digital-marketing' },
      { title: 'SEO Services', link: '/services/seo-services' },
    ]
  },
  { id: 3, title: 'About us', link: '/about' },
  { id: 4, title: 'Blogs', link: '/blogs' },
  { id: 5, title: 'Contact Us', link: '/contact-us' },
];

const Navbar3 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="bg-white fixed w-[90vw] h-auto border-blue-950 border-4 shadow-2xl z-30 mt-5 rounded-xl duration-500 ease-in-out transform animate-fadeIn
        xs:ml-4 xs:h-20 s:h-20 sm:mx-1 sm:w-[90vw] tab:mx-10 tab:h-[12vw] md:mx-9 lg:mx-10 lg:h-20 surface:h-24 xl:mx-9 xl:w-[95vw] xxl:h-16  ">
        <div className=" flex justify-between items-center xl:flex xl:py-0 lg:py-1 lg:ml-2 lg:mr-4 xl:ml-[4rem]  ">

          {/* Logo Section */}
          <div className=" h-3  ">
            <img 
              src="/images/logo/bigbyte-logo.png" 
              alt="Bigbyte logo" 
              className="bg-white h-6 w-28 transition-transform 
              duration-500 hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.6)] rounded-lg 
              xs:h-12 xs:mt-0 s:h-10 tab:h-20 tab:w-[16vw] md:h-12 lg:h-12 surface:h-16 lg:w-36 xl:h-11 xl:w-44" 
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block xl:ml-12 md:translate-y-3 tab:translate-y-7 lg:translate-y-4 xl:translate-y-3 ">
            <ul className="flex items-center  gap-6 text-black tab:ml-1 tab:mx-0 md:gap-2  lg:mx-3 lg:gap-4 lg:w-[45vw] ">
              {NavbarMenu.map((menu) => (
                <li key={menu.id} className="transition-transform duration-500 hover:scale-110 hover:text-blue-950 hover:translate-y-1">
                  <Link 
                    href={menu.link} 
                    className="inline-block py-1 px-3 hover:text-primary font-bold lg:text-sm tab:text-[18px]"
                  >
                    {menu.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden xl:flex space-x-4 items-center tab:w-[50vw] tab:ml-[30%] xl:ml-10 xl:translate-y-3  ">
            <button className="text-gray-700 font-medium hover:text-yellow-500 transition-all duration-300 ease-in-out transform hover:scale-105 lg:text-sm lg:font-bold">
              Apply as a Freelancer
            </button>
            <button className="px-4 py-2 bg-blue-950 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-500 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 lg:text-sm">
              Hire Top Talent
            </button>
            <button className="text-gray-700 font-medium hover:text-yellow-500 transition-all duration-300 ease-in-out transform hover:scale-105 lg:text-sm lg:font-bold lg:p-2 lg:w-20">
              <Link href="/log-in">
              Log In
              </Link>
            </button>
          </div>

          {/* Hamburger Icon (mobile only) */}
          <div className="xl:hidden xs:translate-y-4 tab:translate-y-7 lg:translate-y-4">
            <button onClick={toggleMenu}>
              {isOpen ? <IoMdClose className="text-4xl" /> : <IoMdMenu className="text-4xl" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed xl:hidden top-28 left-0 w-full bg-white shadow-lg z-20 px-6 py-4 space-y-4 transition-all duration-300 ease-in-out">
          {NavbarMenu.map((menu) => (
            <Link 
              key={menu.id} 
              href={menu.link}
              className="block text-lg font-semibold text-gray-800 hover:text-blue-900 transition md:hidden"
              onClick={() => setIsOpen(false)} // close menu on link click
            >
              {menu.title}
            </Link>
          ))}
          <hr />
          <button className="block w-full text-left text-gray-700 font-medium hover:text-yellow-500 ">Apply as a Freelancer</button>
          <button className="block w-full text-left text-gray-700 font-medium hover:text-yellow-500">Hire Top Talent</button>
          <button className="block w-full text-left text-gray-700 font-medium hover:text-yellow-500">Log In</button>
        </div>
      )}
    </>
  );
};

export default Navbar3;
