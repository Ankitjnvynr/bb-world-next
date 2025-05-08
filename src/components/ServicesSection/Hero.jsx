import React from 'react';

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative">
        <img 
          src="/images/hero/d2.jpeg" 
          alt="Hero Background" 
          className="w-[100vw] h-[100vh] object-cover xs:w-full xs:h-[100vh]"
        />
        <div className="absolute text-[#0a243a] font-bold transition-colors
          xl:text-7xl xl:top-72 xl:ml-16 xl:w-[40rem]
          md:top-[40%] md:text-6xl md:w-[35rem] md:ml-16
          tab:top-[40%] tab:text-7xl
          xs:top-[65%] xs:text-3xl xs:w-48 xs:ml-6">
          Your Success, Our Service Mission
        </div>
      </div>

      {/* Description Section */}
      <div className="bg-white px-6 md:px-16 lg:px-24 py-12 space-y-6 text-gray-800">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 leading-snug">
          A website is more than just a design — it's your brand's first conversation with the world.
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
          At BigByte, we offer a comprehensive range of digital services tailored to meet your business goals.
          From cutting-edge web and mobile app development to strategic digital marketing and SEO solutions,
          we combine innovation with expertise to deliver impactful results. Whether you're a startup looking
          to build your online presence or an established brand aiming to scale, our team is here to turn your
          ideas into powerful digital experiences. With a focus on quality, creativity, and performance, we
          ensure every service we offer drives measurable growth for your business.
        </p>
        <div className="text-start md:text-center lg:text-start mt-4">
           <a href="contact-us"> <button className="bg-blue-950 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-800 transition-all duration-300">
              Contact Us 
            </button> 
            </a>
          </div>
      </div>
    </>
  );
};

export default Hero;
