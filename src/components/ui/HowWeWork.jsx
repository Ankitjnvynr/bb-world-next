import React from 'react';

const HowWeWork = () => {
  return (
    <>
      <div className="p-4 sm:p-8 md:p-14 bg-blue-50">
        <div className="headings text-center">
          <h2 className="text-2xl sm:text-3xl font-base mb-3">HOW WE WORK</h2>
          <h1 className="text-3xl sm:text-5xl ">
            How Assist your <span className="text-blue-950 font-base"><strong>Business</strong></span>
          </h1>
        </div>

        <div className="containers flex flex-wrap xl:flex-nowrap justify-center items-center gap-4 mt-16">
          {/* Card 1 */}
          <div className="bg-blue-200 h-[300px] w-[16rem] sm:w-[18rem] md:w-[20rem] text-center rounded-tl-3xl relative shadow-xl">
            <hr className="border-t-2 border-blue-950 w-full mx-auto mt-28" />
            <div className="absolute bg-white top-[6rem] left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center font-bold border-blue-950 border-l-2">
              1
            </div>
            <p className="mt-20 text-xl sm:text-3xl font-base text-blue-950">Ideas and Concepts</p>
          </div>

          {/* Card 2 */}
          <div className="bg-blue-300 h-[300px] w-[16rem] sm:w-[18rem] md:w-[20rem] text-center relative shadow-xl">
            <hr className="border-t-2 border-blue-950 w-full mx-auto mt-28" />
            <div className="absolute bg-white top-[6rem] left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center font-bold border-blue-950 border-l-2">
              2
            </div>
            <p className="mt-20 text-xl sm:text-3xl font-base text-blue-950">Discussion</p>
          </div>

          {/* Card 3 */}
          <div className="bg-blue-400 h-[300px] w-[16rem] sm:w-[18rem] md:w-[20rem] text-center relative shadow-xl">
            <hr className="border-t-2 border-blue-950 w-full mx-auto mt-28" />
            <div className="absolute bg-white top-[6rem] left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center font-bold border-blue-950 border-l-2">
              3
            </div>
            <p className="mt-20 text-xl sm:text-3xl font-base text-blue-950">Development</p>
          </div>

          {/* Card 4 */}
          <div className="bg-blue-500 h-[300px] w-[16rem] sm:w-[18rem] md:w-[20rem] text-center relative shadow-xl">
            <hr className="border-t-2 border-blue-950 w-full mx-auto mt-28" />
            <div className="absolute bg-white top-[6rem] left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center font-bold border-blue-950 border-l-2">
              4
            </div>
            <p className="mt-20 text-xl sm:text-3xl font-base text-blue-950">Testing and Trying</p>
          </div>

          {/* Card 5 */}
          <div className="bg-blue-600 h-[300px] w-[16rem] sm:w-[18rem] md:w-[20rem] text-center rounded-br-3xl relative shadow-xl">
            <hr className="border-t-2 border-blue-950 w-full mx-auto mt-28" />
            <div className="absolute bg-white top-[6rem] left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center font-bold border-blue-950 border-l-2">
              5
            </div>
            <p className="mt-20 text-xl sm:text-3xl font-base text-blue-950">Execute and Install</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowWeWork;
