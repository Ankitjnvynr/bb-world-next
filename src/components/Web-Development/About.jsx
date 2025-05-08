import React from 'react'

const About = () => {
  return (
    <>
      <div className=' mb-4 lg:flex lg:flex-row xl:gap-10 lg:gap-2 xl:px-10 mt-10 bg-gray-100 xs:px-2 xs:flex-col xs:gap-1  '>
        <div className="image xl:p-10 mt-5 xs:px-7 lg:">
            <img src="./images/Industries/Web-Dev/web-about.png" alt="" className='xl:w-[2800px] xl:h-[300px] xs:w-[320px] xs:h-[200px] md:w-[800px] md:h-[400px] lg:w-[3200px] lg:h-[300px] s:w-[800px] s:h-[300px]' />
        </div>
        <div className=''>
            <p className='title xl:text-4xl xl:text-start font-bold xl:px-5 xl:py-2 xl:mt-10 text-blue-950 xs:px-2 xs:py-0 xs:mt-0 xs:text-3xl md:text-5xl md:text-center lg:px-1 lg:py-2 lg:mt-1 lg:text-2xl'>Responsive Website Design Services in India</p>
            <p className='data xl:text-xl font-medium xl:px-5 xl:text-start mt-2 xs:px-2 xs:text-base text-gray-700 xs:mt-1 md:text-lg md:mt-5 md:px-5 md:text-center lg:text-xl lg:text-start  lg:mt-0 surface:text-2xl xl:'>Our designs are unique and attractive so that it attracts the attention of any customer and result in high audience numbers. Our sole focus is to provide our clients with the best and most user-friendly websites that are easy to use for their customers and present the client’s business well. Our professionals are very well trained to provide all types of website development and web design solutions.</p>
        </div>
      </div>
    </>
  )
}

export default About
