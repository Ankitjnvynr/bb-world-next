import React from 'react'

const AboutData = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center ">
        
        {/* Left Side - Text */}
        <div className=" md:w-2/3 w-full mix-blend-multiply">
          <h2 className="text-black font-medium text-xl md:text-3xl  decoration-blue-950 mb-3">
            Our Company
          </h2>
          <h1 className="  md:text-xl text-lg mb-2 ">
            One of the Best <span className="text-blue-950 font-serif italic">Website Development</span> Company in India
          </h1>
          <h3 className=" text-lg md:text-base mb-1 text-gray-900 ">
            A company's website is the first impression to its customers and it tells them all about that company.
          </h3>
          <p className="text-lg md:text-base text-gray-900 ">
            To get a functional, updated and competitive business website, you need a business partner that can provide you with the same and has understanding of the industry. BigByte is your one-stop centre for all your needs. We specialize in the development of multifunctional, dynamic and robust business websites using the most advanced technologies.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/5 w-full flex justify-center">
          <img
            src="/images/about/globe2.png"
            alt="globe-bigbyteworld"
            className="w-full max-w-[400px] object-contain"
          />
        </div>
      </div>
    </>
  )
}

export default AboutData
