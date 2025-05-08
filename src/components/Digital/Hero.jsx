import React from 'react';

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <div className='relative '>
        <img src="/images/hero/dm4.jpg" alt="" className='w-[100vw] h-[100vh] xs:w-[100vw]'/>
        <div className='xl:text-7xl absolute xl:top-80 xl:ml-16 xl:w-[40rem] text-[#0a243a] font-bold xs:text-3xl xs:w-48 xs:top-96 xs:ml-6 md:top-[40%] md:text-6xl md:w-[35rem] md:ml-16
        tab:top-[40%] tab:text-7xl transition-colors '></div>
      </div>
      {/* Description Section */}
      <div className="bg-white px-6 md:px-16 lg:px-24 py-12 space-y-6 text-gray-800">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 leading-snug">
          A company’s website is the first impression to its customers and it tells them all about that company.
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
          To get a functional, updated and competitive business website, you need a business partner that can provide
          you with the same and has understanding of the industry. <strong>BigByte</strong> is your one-stop centre for
          all your needs. We specialize in the development of multifunctional, dynamic and robust business websites
          using the most advanced technologies.
        </p>
        <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
          Looking to drive more traffic and increase conversions for your business? Let us help you develop a digital
          marketing strategy that delivers real results. By utilizing cutting-edge marketing techniques and targeted
          campaigns, we can help you reach your target audience and convert them into loyal customers. Plus, with our
          ongoing analysis and optimization, you can be sure that your marketing efforts are always delivering maximum
          ROI.
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
