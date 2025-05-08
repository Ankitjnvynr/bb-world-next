import React from 'react'

const Hero = () => {
  return (
    <>
      <div className=' flex flex-row bg-blue-100 xs:overflow-hidden '>
        <div className=' text-[#0a243a] font-bold xs:text-2xl xs:mt-[170px] xs:pl-4 md:pl-14 md:text-4xl lg:text-5xl tab:mt-[200px] tab:text-4xl xl:text-6xl xl:pl-20 xl:mt-[250px]'>Search Engine Optimization (SEO)</div>
        <img src="./images/hero/seo.png" alt="" className='xs:w-[200px] xs:mt-16 md:w-[220px] lg:w-[280px] lg:mt-10 xl:w-[350px] '/>
      </div>
    </>
  )
}

export default Hero
