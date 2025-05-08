import React from 'react'

const Features1 = () => {
  return (
    <div>
      <div className="main xl:flex mt-6  justify-around xs:flex xs:flex-wrap xs:gap-5 lg:flex lg:flex-row xs:mx-3  ">
        <div className='container xl:h-[250px] xl:w-[400px] text-center shadow-2xl shadow-gray-600 border-blue-950 bg-blue-50 border-[12px] rounded-lg md:w-[550px] lg:w-[450px] surface:w-[400px] tab:w-[650px]'>
            <p className='title font-bold text-3xl p-3'>Website Security</p>
            <p className='content font-medium text-base p-2 text-gray-600'>Building an attractive website with all essential elements is not the only thing to be considered. Instead, one of the most unzippable steps in website security, and the purpose is to prevent websites from any attacks from unauthorized access.</p>
        </div>
        <div className='container xl:h-[250px] xl:w-[400px] text-center shadow-2xl shadow-gray-600 bg-blue-50  border-blue-950 border-[12px] rounded-lg md:w-[550px] lg:w-[450px] surface:w-[400px] tab:w-[650px]'>
            <p className='title font-bold text-3xl p-3'>Mobile-friendly website</p>
            <p className='content font-medium text-base p-2 text-gray-600'>As more of the population is leaning towards the usage of mobile phones, we necessarily offer a whole host of mobile services to keep your brand ahead.</p>
        </div>
        <div className='container xl:h-[250px] xl:w-[400px] text-center shadow-2xl shadow-gray-600 bg-blue-50 border-blue-950 border-[12px] rounded-lg md:w-[550px] lg:w-[450px] surface:w-[400px] tab:w-[650px]'>
            <p className='title font-bold text-3xl p-3'>Performance Monitoring</p>
            <p className='content font-medium text-base p-2 text-gray-600'>Not only do we intend to make your website the best, but we also keep an eye on the website’s performance and look for the chances for improvement.</p>
        </div>
      </div>
    </div>
  )
}

export default Features1
