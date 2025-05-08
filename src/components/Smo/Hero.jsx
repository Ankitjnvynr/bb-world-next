import React from 'react';

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <div className='relative '>
        <img src="/images/hero/9583201.jpg" alt="" className='w-[100vw] h-[130vh] xs:w-[100vw]'/>
        <div className='xl:text-7xl absolute xl:top-80 xl:ml-16 xl:w-[40rem] text-[#0a243a] font-bold xs:text-3xl xs:w-48 xs:top-96 xs:ml-6 md:top-[40%] md:text-6xl md:w-[35rem] md:ml-16
        tab:top-[40%] tab:text-7xl right-0 pb-5'>Social Media Optimization</div>
      </div>
      {/* Description Section */}
      <div className="bg-white px-6 md:px-16 lg:px-24 py-12 space-y-6 text-gray-800">
        <h2 className="text-2xl md:text-3xl font-medium text-blue-900 leading-snug">
        Ready to expand your business on social media?
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
        Social media has made the connection between people in different corners of the world possible. 
        Everyone is glued to their social media feeds in some way. So, it is always a better option to promote your business on 
        social media platforms. BigByte has experts who have deep knowledge of how SMM works and how it can benefit your business. 
        We provide all the services related to SMM at very affordable costs and guarantee boosting your business through it. 
        Here we learn to uncover unique insights to know our customers and competitive products.
        </p>
        <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
        <strong>GROW WITH THE POWER OF SOCIAL MEDIA</strong>
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
