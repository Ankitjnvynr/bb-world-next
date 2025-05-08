import React from 'react';

const Hero2 = () => {
  return (
    <div className="relative w-[100vw] h-[100vh] overflow-hidden">
      <img src="./images/hero/new.jpg" alt="" className="w-full h-full object-cover" />

      {/* Overlay container */}
      <div className="absolute top-[40%] left-6 md:left-16 text-[#0a243a]">
        <div className="flex flex-row gap-2 animate-fade-up opacity-0 animation-delay-200 animation-fill-forwards">
          <h1 className="font-bold text-3xl md:text-6xl xl:text-7xl w-[90%] md:w-[35rem] xl:w-[31rem]">
            BigByte World
          </h1>
          <img
            src="gifs/reduced-globe.gif"
            alt="Globe"
            className="w-6 h-6 md:w-12 md:h-12 mt-2 md:mt-6 xs:mt-2 xs:w-10 xs:h-10 "
          />
        </div>
        <p className="font-bold text-lg md:text-2xl xl:text-3xl mt-6 w-[90%] md:w-[30rem] xl:w-[32rem] animate-fade-up opacity-0 animation-delay-500 animation-fill-forwards">
          Delivering Quality Software Products and Premium IT Services Since 2013
        </p>
      </div>

      {/* Custom animation keyframes */}
      <style>
        {`
          @keyframes fadeUp {
            0% {
              transform: translateY(40px);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }
          .animate-fade-up {
            animation: fadeUp 1s ease-out forwards;
          }
          .animation-delay-200 {
            animation-delay: 0.2s;
          }
          .animation-delay-500 {
            animation-delay: 0.5s;
          }
          .animation-fill-forwards {
            animation-fill-mode: forwards;
          }
        `}
      </style>
    </div>
  );
};

export default Hero2;
