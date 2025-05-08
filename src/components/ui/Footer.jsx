"use client";


import { useState,useEffect } from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram, FaSquareXTwitter, FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const [currentYear,setCurrentYear]= useState()
  useEffect(()=>{
    const currentDate = new Date();
const currentYear = currentDate.getFullYear();
console.log(currentYear);
setCurrentYear(currentYear)
  },[])

  return (
    <div className="bg-[#EFF6FF] w-full">
      {/* Top Section */}
      <div className="flex flex-col xl:flex-row items-center justify-between px-6 py-10 gap-6">
        <div className="flex flex-col items-center xl:items-start">
          <div className="logo mb-4">
            <img src="images/logo/bigbyte-logo.png" alt="BigByte Logo" className="w-32 s:w-40" />
          </div>
          <div className="text-cyan-950 text-center xl:text-left">
            <p className="text-xl font-base">BigByte World</p>
            <p className="text-lg font-base">Your Vision, Our Innovation.</p>
          </div>
        </div>

        <div className="bg-[#0a243a] text-white w-full xl:w-3/4 p-6 rounded-md">
          {/* Social + Subscribe */}
          <div className="flex flex-col tab:flex-row justify-between items-center gap-6 mb-6 md:flex-row s:flex-row ">
            {/* Social Links */}
            <div>
              <p className="mb-2 text-xl font-medium text-center tab:text-left">Follow Us</p>
              <div className="flex gap-6 justify-center tab:justify-start">
               <a href="https://www.facebook.com/BigByteTechnologies/"> <FaFacebook className="w-6 h-6" /></a>
                <a href="https://www.instagram.com/bigbyteinnovations/"><FaSquareInstagram className="w-6 h-6" /></a>
                <a href="https://www.linkedin.com/company/big-byte-innovations/"><FaLinkedin className="w-6 h-6"/></a>
                {/* <FaSquareXTwitter className="w-6 h-6" /> */}
              </div>
            </div>

            {/* Subscribe */}
            <div className="text-center tab:text-right">
              <p className="text-xl font-base mb-2">Subscribe</p>
              <div className="flex gap-3 justify-center tab:justify-end">
                <input type="text" placeholder="E-mail" className="p-2 rounded-md w-56 xs:w-40 xl:w-52 text-black" />
                <button className="bg-white text-black px-4 rounded-md font-base">Subscribe</button>
              </div>
            </div>
          </div>

          <hr className="my-4 border-gray-500" />

          {/* Links & Contact */}
          <div className="flex flex-col s:flex-row s:flex-wrap md:flex-row justify-between gap-10 text-center  xs:text-left xs:ml-4 tab:flex tab:flex-row tab:gap-3 surface:flex surface:flex-row surface:gap-3">
            {/* IT Services */}
            <div className=''>
              <p className="text-2xl mb-3">IT Services</p>
              <ul className="flex flex-col gap-2 font-base">
                <li><a href="/ecommerce-development">eCommerce Development</a></li>
                <li><a href="SEO">SEO</a></li>
                <li><a href="Web-Development">Web Development</a></li>
                <li><a href="Digital-Marketing">Digital Marketing</a></li>
                <li><a href="/testing">Testing Services</a></li>
                <li><a href="/social-media-optimization">SMO</a></li>
              </ul>
            </div>

            {/* Important Links */}
            <div>
              <p className=" text-2xl mb-3">Important Links</p>
              <ul className="flex flex-col gap-2 font-base">
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact-us">Contact Us</a></li>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
                <li><a href="/refund-and-return-policy">Refund and Returns Policy</a></li>
                <li><a href="/terms-and-conditions">Terms and Conditions</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className='xs:text-left s:text-center md:ml-24 tab:ml-0  '>
              <p className=" text-2xl mb-3 tab:text-left">Get in Touch</p>
              <ul className="flex flex-col gap-2 font-medium s:flex-row s:flex-wrap s:gap-2 tab:flex-col tab:gap-2 tab:flex md:flex md:flex-col md:items-center surface:flex surface:flex-col surface:items-start lg:items-start lg:flex lg:flex-col tab:items-start ">
              <div className='s:flex s:flex-row gap-12 tab:flex tab:flex-col tab:gap-2 surface:flex surface:flex-col surface:items-start lg:items-start lg:flex lg:flex-col '>
                <li className="flex xs:flex-row items-left gap-2 "><FaPhoneAlt className='' /> +91 94661 94004</li>
                <li className="flex items-center gap-2"><MdEmail /> info@bigbyteworld.com</li>
                </div>
                <li className="flex items-start gap-2 s:ml-10 surface:ml-0 tab:ml-0 lg:ml-0"><FaLocationDot /> 
                  <span>
                    Plot No. 151, Industrial Area, Sector-2, <br />
                    <span className='mr-10'>Kurukshetra – 136118 (Haryana)</span>
                  </span>
                </li>
               
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-cyan-900 text-white text-center py-3 text-sm">
        © {currentYear} Big Byte Innovations Pvt. Ltd. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
