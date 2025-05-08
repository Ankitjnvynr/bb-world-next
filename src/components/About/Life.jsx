import React from 'react';

const images =[
    {
        link:"/images/about/life/gallery/1.jpg",
    },
    {
        link:"/images/about/life/gallery/2.jpg",
    },
    {
        link:"/images/about/life/gallery/3.jpg",
    },
    {
        link:"/images/about/life/gallery/5.jpg",
    },
    {
        link:"/images/about/life/gallery/6.jpg",
    },
    {
        link:"/images/about/life/gallery/7.jpg",
    },
    {
        link:"/images/about/life/gallery/8.jpg",
    },
    {
        link:"/images/about/life/gallery/9.jpg",
    },
    {
        link:"/images/about/life/gallery/10.jpg",
    },
];
const Life = () => {
  return (
    <div className="flex flex-col items-center w-full bg-white px-10 mt-32 mb-16">

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-[#2C3546] to-[#2C3546] shadow-xl shadow-slate-400 p-8 pt-4 flex flex-col xl:flex-row items-center justify-around  overflow-hidden">
        <div className="max-w-4xl text-white text-center xl:text-left px-4 p-2">
          {/* <p className="text-sm tracking-widest mb-2">Life at BigByte World</p> */}
          <h1 className="xl:text-[50px] xs:text-4xl sm:text-5xl font-bold leading-tight font-serif">
           Life at <span className='font-serif italic'>BigByte</span> <span className='text-yellow-500 italic'>World</span>
          </h1>
        </div>
        {/* <img 
          src="/images/logo/bb-logo.png" 
          alt="Modern Home"
          className="mt-9 xl:mt-3 w-full xl:w-[400px] xl:h-44  object-cover"
        /> */}
      </section>

      {/* Dream Section */}
      <section className="w-full max-w-7xl py-16 px-4 flex flex-col items-center gap-8">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-4 h-4 bg-black rotate-45"></div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-light">
            If you can <span className="italic font-semibold">dream it</span>, we can <span className="font-semibold">build it.</span>
          </h2>
          <p className="text-gray-600 max-w-xl text-base">
          We foster a culture built on collaboration, innovation, and growth, where every voice matters. Whether it’s brainstorming new ideas, celebrating wins, or supporting each other through challenges, we’re a team first — always striving to create an environment where people thrive personally and professionally.


          </p>
          {/* <button className="mt-4 px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
            Get in touch
          </button> */}
        </div>

        {/* Dream Section Images */}
        <div className="md:grid md:grid-cols-2 gap-4 w-full mt-8 xs:flex xs:flex-col xs:flex-wrap ">
          <img 
            src="/images/about/life/life1.jpg" 
            alt="House Left" 
            className="rounded-2xl w-full h-48 object-cover lg:h-72 surface:h-80"
          />
          <img 
            src="/images/about/life/life2.jpg" 
            alt="House Right" 
            className="rounded-2xl w-full h-48 object-cover lg:h-72 surface:h-80"
          />
        </div>
      </section>

      {/* Inclusions Section */}
      <section className="w-full bg-[#2C3546] text-white py-20 px-4  overflow-hidden shadow-lg shadow-slate-600">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl  font-bold">
            More than just a  <span className="italic">Workplace</span>
          </h2>
          <p className="text-gray-400 max-w-xl text-base">
          Beyond work, we build friendships, celebrate milestones, and create a community where everyone thrives
          </p>
          {/* <button className="mt-4 px-6 py-2 bg-white text-black rounded hover:bg-gray-100 transition">
            View Inclusions
        
        </button> */}
    <div className='flex flex-row flex-wrap gap-8 justify-center  '>
       { images.map((img,index)=>{
        return(
        <img 
        key={index}
          src={img.link} 
          alt="" 
          className="  mt-4 object-cover  shadow-sm shadow-slate-200 w-[25rem] h-[15rem] md:w-[44rem] md:h-[22rem] lg:w-[27rem] lg:h-[15rem] surface:w-[60rem] surface:h-[34rem] xl:w-[25rem]"
        />
       
        );
       })}
        </div>
          {/* <div className='flex flex-row flex-wrap gap-8'>
          <img 
            src="/images/about/life/gallery/1.jpg" 
            alt="Kitchen Inclusions" 
            className="  mt-10 object-cover w-[25rem] h-[15rem] md:w-[44rem] md:h-[22rem] lg:w-[58rem] lg:h-[30rem] surface:w-[60rem] "
          />
          <img 
            src="/images/about/life/gallery/2.jpg" 
            alt="Kitchen Inclusions" 
            className="w-[25rem]  mt-10 object-cover h-[15rem] md:w-[44rem] md:h-[22rem] lg:w-[58rem] lg:h-[30rem] surface:w-[60rem] "
          />
          <img 
            src="/images/about/life/gallery/3.jpg" 
            alt="Kitchen Inclusions" 
            className="w-[25rem]  mt-10 object-cover h-[15rem] md:w-[44rem] md:h-[22rem] lg:w-[58rem] lg:h-[30rem] surface:w-[60rem] "
          />
          <img 
            src="/images/about/life/gallery/5.jpg" 
            alt="Kitchen Inclusions" 
            className="w-[25rem]  mt-10 object-cover h-[15rem] md:w-[44rem] md:h-[22rem] lg:w-[58rem] lg:h-[30rem] surface:w-[60rem] "
          />
          <img 
            src="/images/about/life/gallery/6.jpg" 
            alt="Kitchen Inclusions" 
            className="w-[25rem] mt-10 object-cover h-[15rem] md:w-[44rem] md:h-[22rem] lg:w-[58rem] lg:h-[30rem] surface:w-[60rem] "
          />
          <img 
            src="/images/about/life/gallery/7.jpg" 
            alt="Kitchen Inclusions" 
            className="w-[25rem] mt-10 object-cover h-[15rem] md:w-[44rem] md:h-[22rem]  lg:w-[58rem] lg:h-[30rem] surface:w-[60rem] "
          />
          <img 
            src="/images/about/life/gallery/8.jpg" 
            alt="Kitchen Inclusions" 
            className="w-[25rem] mt-10 object-cover h-[15rem] md:w-[44rem] md:h-[22rem]  lg:w-[58rem] lg:h-[30rem] surface:w-[60rem] "
          />
          <img 
            src="/images/about/life/gallery/9.jpg" 
            alt="Kitchen Inclusions" 
            className="w-[25rem]  mt-10 object-cover h-[15rem] md:w-[44rem] md:h-[22rem]  lg:w-[58rem] lg:h-[30rem] surface:w-[60rem] "
          />
          <img 
            src="/images/about/life/gallery/10.jpg" 
            alt="Kitchen Inclusions" 
            className="w-[25rem]  mt-10 object-cover h-[15rem] md:w-[44rem] md:h-[22rem] lg:w-[58rem] lg:h-[30rem] surface:w-[60rem] "
          />
          </div> */}
        </div>
      </section>

    </div>
  );
};

export default Life;
