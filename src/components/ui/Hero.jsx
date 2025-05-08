import React from 'react'

const Hero = () => {
  return (
    <>
      <div className='container flex w-full h-screen relative z-10 overflow-scroll '>
        <div className='left-side-container bg-[#0a243a] w-[10vw] '></div>
        <div className='bg-[#ff9908] w-[5vw] ml-10 '></div>
        <div className='bg-white flex-1'>
        <div className="globe bg-white">
     <div className="heading ml-8 mt-72  ">
        <div className='flex '>
        <p className='font-extrabold text-7xl p-3'>BigByte World </p>
        <img src="public/gifs/Globe_ Animation.gif" alt="" className='w-10 h-10 mt-11' />
        </div>
        <div className="sub_heading mt-4">
            <p className='font-bold text-3xl ml-4 '>Delivering Quality Software Products and Premium IT Services Since 2013</p>
        </div>
     </div>
        </div>
        
        </div>
        <div className="right_side_container bg-[#0a243a] right w-[60vh] h-[100vh] relative ">
            {/* <img src="public/images/about/big_byte_innovations_cover.jpg" alt="" /> */}
        <div className="absolute top-40 left-[-30px] w-[25vw] h-[60vh] bg-white shadow-lg rounded-tr-[100px] rounded-br-[100px]">
          <img
            src="public/images/about/big_byte_innovations_cover.jpg"
            alt="Preview"
            className="w-full h-full object-cover rounded-tr-[100px] rounded-br-[100px] p-2"
          />
        </div>
        <div className='bg-[#0a243a] border-[#ff9908] border-[10px] ml-20 mt-32 w-[21vw] h-[58vh] rounded-tr-[100px] rounded-br-[50px] '>

        </div>
        <div className='bg-[#0a243a] border-[#ff9908] border-[10px] ml-80 mt-24 w-[10vw] h-[10vh] rounded-tl-[20px] rounded-bl-[20px] '></div>
        </div>

      </div>
    </>
  )
}

export default Hero
