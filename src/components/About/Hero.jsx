import React from 'react';

const Hero = () => {
  return (
    <div className="relative w-full">
      <img
        src="./images/about/About-bg.jpeg"
        alt="About Background"
        className="w-full h-auto object-cover xs:h-[400px] xs:w-[460px] s:w-[580px] md:w-[900px] lg:w-full tab:w-[980px] xl:w-full xl:h-[100vh] "
      />
      <div className="
        absolute 
        text-white 
        font-bold 
        text-4xl 
        xs:text-5xl 
        sm:text-6xl 
        md:text-7xl 
        xl:text-[100px]
        top-[60%] 
        left-1/2 
        -translate-x-1/2
        -translate-y-1/2 
        text-center 
        lg:text-end
        w-[90%] 
        md:w-[35rem] 
        lg:w-[45.3rem]
        xl:w-[70rem]
        lg:ml-[150px]
        xl:ml-20
        xl:px-0
      ">
        About BigByte World
      </div>
    </div>
  );
};

export default Hero;
