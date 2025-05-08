import React from 'react'

const Hero1 = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row w-full h-screen relative z-10 overflow-x-hidden overflow-y-auto">
        
        {/* Left Side Container */}
        <div className="left-side-container bg-[#0a243a] w-full md:w-full xs:h-[20vh] md:h-[15vh] lg:w-[20vw] lg:h-[100vh] "></div>
        
        {/* Orange Bar */}
        <div className="bg-[#ff9908] w-full md:w-full h-[5vh] lg:w-[5vw] lg:h-[100vh] lg:ml-5"></div>
        
        {/* Center Content */}
        <div className="bg-white flex">
          <div className="globe bg-white">
            <div className="heading ml-4 md:ml-8 mt-16 md:mt-10 xs:mt-10 lg:ml-0 lg:mt-48 xl:mt-56 animate-slideInFromTop">
              <div className="flex  items-center xs:gap-0">
                <p className="font-bold text-3xl md:text-[80px] p-2 md:p-3 xs:text-[39px] lg:text-7xl ">BigByte World</p>
                <img src="public/gifs/Globe_ Animation.gif" alt="Globe" className="w-6 h-6 md:w-12 md:h-12 mt-2 md:mt-8 xs:mt-2 xs:w-10 xs:h-10" />
              </div>
              <div className="sub_heading mt-4">
                <p className="font-base text-lg md:text-3xl ml-2 md:ml-4 xs:mr-2 xs:mb-4 lg:ml-4">
                  Delivering Quality Software Products and Premium IT Services Since 2013
                </p>
                <p className="font-base text-lg md:text-3xl ml-2 md:ml-4 xs:mr-2 xs:mb-4 lg:ml-4">
                Tech with Trust
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Container */}
        <div className="right_side_container bg-[#0a243a] w-full xs:h-[50%] xs:w-[100vw] xs:mt-0 h-[80vh] lg:h-[100vh] lg:w-[25vw]  relative mt-8 md:mt-5 lg:mt-0">

          {/* White Card with Image */}
          {/* <div className=" animate-bounceIn absolute md:top-10 xs:top-6 top-10 left-1/2 xs:left-[10.5rem] transform -translate-x-1/2 md:left-[30px]  lg:w-[20vw] lg:mt-[140px] lg:left-[10px] s:left-60  md:translate-x-0 xl:w-[90%] xs:w-[94%]  md:w-[80vw]  xl:left-[-30px] xl:h-[50vh] xs:h-[40vh] md:h-[40vh] bg-white shadow-lg rounded-tr-[50px] md:rounded-tr-[50px] rounded-br-[50px] md:rounded-br-[50px] overflow-hidden ">
            <img
              src="public/images/about/big_byte_innovations_cover.jpg"
              alt="Preview"
              className="w-full h-full object-cover p-2 rounded-tr-[50px] md:rounded-tr-[50px] rounded-br-[50px] md:rounded-br-[50px] "
            />
          </div> */}

          {/* Border Box Behind Image */}
          {/* <div className="hidden xs:block md:block bg-[#0a243a] border-[#ff9908] border-[10px] ml-20 md:ml-20 md:mt-20 xl:w-[20vw] xl:h-[49vh] rounded-tr-[100px] rounded-br-[50px] xs:mt-14 xs:rounded-tr-[40px] xs:rounded-br-[40px] xs:ml-[40px] xs:w-[87vw] xs:h-[40vh] md:w-[80vw] s:ml-[50px] s:mt-[55px] lg:mt-[220px] lg:ml-10 lg:w-[20vw]"></div> */}

          {/* Small Box Behind Image */}
          {/* <div className="hidden lg:block xl:block  bg-[#0a243a] border-[#ff9908] border-[10px] ml-80 mt-24 lg:mt-[-30px] lg:ml-[920px] w-[10vw] h-[10vh] rounded-tl-[20px] rounded-bl-[20px]"></div> */}
          
        </div>

      </div>
    </>
  )
}

export default Hero1
