"use client"

import React from 'react'
import { useState} from 'react';

import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { toast } from 'react-toastify';


const ContactUs = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7e7d1d1e-99f5-4e7c-bc54-a404934d9e72");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    

    if (data.success) {
      setResult();
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };
  return (
    <>
      <div className=' contact-us container relative xl:mb-24 xs:mb-[32rem] md:mb-24 lg:mb-[18rem]'>
        <div className='bg-[#0a243a] w-[85%] h-[28rem] rounded-r-3xl shadow-2xl '>
         <div className='text-center '>
        <div className='p-7 '>
         <p className='text-2xl font-medium text-white'>We are here to answer your <span className='text-[#ff9908]'>Questions</span> 24/7</p>
         <p className='text-4xl font-bold text-white'>We run all Kinds of IT Services that vow your Success</p>
         </div>
         <div className='contact-form flex xs:flex-col md:flex-row surface:gap-8 xs:gap-0 md:gap-10 lg:gap-24 xl:gap-16 mt-2 border-2 border-white rounded-r-3xl xs:rounded-l-3xl lg:rounded-l-none border-l-0 left-0 text-center mr-96 bg-blue-50 shadow-2xl xs:w-[90vw] xs:ml-5 xl:w-[60vw] lg:ml-0   '>
            <form onSubmit={onSubmit}  className='flex flex-col gap-14 xl:p-10 xl:ml-44 xs:ml-0 xs:p-5 xs:gap-10 md:ml-14 lg:gap-14 lg:p-16 surface:ml-20 s:gap-10 s:px-16 s:pt-10 '>
                <input type="text" name='user_name' placeholder='Full Name' className='border-b-2 border-black bg-cyan-50 font-bold  text-cyan-700' />
                <input type="text" name="user_email" placeholder='Email' className='border-b-2 border-black bg-cyan-50 font-bold text-cyan-700' />
                <input type="text" name='message' placeholder='Message' className='border-b-2 border-black bg-cyan-50 font-bold text-cyan-700' />
                <button type='submit' className='bg-[#0a243a] rounded-2xl h-12 text-white font-bold mt-6 '>{result?result:"Contact Us"}</button>
                </form>
                <div className='flex flex-col xl:gap-10 tab:gap-12 xl:mt-12 xl:ml-5 xs:gap-7 xs:mb-4 md:gap-14 md:mt-3 md:ml-0 lg:mt-12 lg:gap-16 surface:gap-12 tab:ml-10 '>
                    <div className=''>
                    <p className='font-bold text-2xl text-[#0a243a]'>Contact</p>
                    <p className='font-semibold'>info@bigbyteworld.com</p>
                    <p className='font-semibold'>Pankaj@bigbyteworld.com</p>
                    </div>
                    {/* <div className=''>
                        <p className='font-bold text-xl'>Based in</p>
                        <p className='font-semibold'>Kurukshetra
                            <p>Plot No. 151, Industrial Area,</p>
                            <p>Sector. 2,</p>
                            <p>Kurukshetra – 136118 (Haryana)</p>
                          </p>
                    </div> */}
                    <div className=''>
                        <p className='font-bold text-2xl text-[#0a243a]'>Call us</p>
                        <p className='font-semibold'>+91 94661 94004</p>
                        <p className='font-semibold'>+91 87080 42248</p>
                    </div>
                    <div className=' flex flex-row gap-14 xl:ml-2 xl:mt-8 xs:ml-20 lg:ml-2 s:ml-40  tab:ml-10 md:ml-0 '>
                    <a href="https://www.facebook.com/BigByteTechnologies/"> <FaFacebook className="w-7 h-7" /></a>
                     <a href="https://www.instagram.com/bigbyteinnovations/"><FaSquareInstagram className="w-7 h-7" /></a>
                     <a href="https://www.linkedin.com/company/big-byte-innovations/"><FaLinkedin className="w-7 h-7"/></a>
                    </div>
                </div>
         </div>
         </div>
        </div>
        <div className='bg-blue-50 xl:w-[20%] xl:h-[13rem] lg:top-[19rem] lg:right-3 xs:hidden lg:block  xl:right-20  xl:top-40 rounded-3xl absolute border-2 border-white shadow-2xl'>

        </div>
      
      <div className=''>

      </div>
      </div>
    </>
  )
}

export default ContactUs
