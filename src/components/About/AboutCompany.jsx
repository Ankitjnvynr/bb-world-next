import React from "react";

const AboutCompany = () => {
  return (
    <div className=" font-sans  space-y-8">
      {/* Header */}
      <div className="text-center border-white px-8">
        <div className="flex justify-center font-bold mt-10  space-x-2 text-xl p-1 border-[#2c3546] shadow-lg shadow-slate-400 border-4 rounded-xl bg-[#2c3546] text-white ">
          <span > 9 Years of Experience</span>
          {/* <span>•</span>
          <span>Vsco.enthusiast</span> */}
        </div>
        
      </div>

      {/* Image and Palette */}
      <div>
      <div className="flex xl:flex-row xl:gap-3 justify-between relative xs:flex-col xs:gap-10 s:gap-32 ">
        <div className=" xl:max-w-[53rem] xs:max-w-[100%] ">
        <h1 className="text-7xl font-bold mt-12 ml-[65px] xs:ml-0 xs:px-7">ABOUT <span className="text-blue-950">US</span></h1>
        <p className="text-xl font-medium mt-5 px-16 xs:px-7">Big Byte Innovations Pvt Ltd (BIPL) is India's leading IT and Software company. 
            It has a registered office in New Delhi, India, and an office in Kurukshetra,
             Haryana. The company started way back in 2013 as the brainchild of two management
             graduates aiming to combine innovation with ever-growing technology.
            Big Byte specializes in providing softwares solutions, IT services, digital marketing
             and web technologies. BIPL has a prime motto-Think Big! which ideally reflects our 
             company's objective as we at Big Byte think out of the box with constant innovation
              to deal with each project distinctly and in the best way possible.
               Now with dedicated efforts, Big Byte is recognized globally as a bunch of reliable
                services flourishing in the field of technologies.</p>
        </div>
        <div className="flex justify-center shadow-2xl shadow-black xs:ml-10 xs:overflow-x-hidden  ">
            <div className="bg-[#2c3546]  ">
          <img
            src="/images/about/big_byte_innovations_cover.jpg"
            alt="Sunset"
            className=" xl:w-[650px] xl:h-[430px] py-10 ml-10 xs:h-[400px] xs:w-[22.5rem] xs:ml-8 xs:py-10 md:w-[48rem] md:h-[500px] lg:w-[60rem] lg:h-[580px] surface:w-[65rem] s:w-[30rem] tab:w-[55rem]"
          />
          </div>
        </div>
        <div className="s:w-full bg-gray-200 xl:h-[180px] absolute xl:top-[21rem] s:top-[30rem] s:h-[20rem] md:top-[21rem] lg:top-[18rem] -z-30  xs:hidden xl:block s:block ">
        <div className="flex justify-center space-x-2 mt-36 xs:mt-[8rem] md:">
          <div className="w-10 h-10 bg-[#5a5d80]"></div>
          <div className="w-10 h-10 bg-[#7a7ae6]"></div>
          <div className="w-10 h-10 bg-[#342c66]"></div>
          <div className="w-10 h-10 bg-[#12263d]"></div>
        </div>
        </div>  
        </div>
       
      </div>
      
      {/* Quote Section */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <img
            src="/path-to-palm-sunset.jpg"
            alt="Palm Sunset"
            className="rounded-xl"
          />
        </div>
        <div className="text-sm">
          <p className="italic mb-2">Page 324 of 365 📆</p>
          <p>
            Senja memang indah. Maklum jika tak sedikit orang yg takjub hingga menjadikannya sebagai momen favorit mereka.
          </p>
          <p className="mt-2">
            Tapi sayangnya, ia hanya mampir sebentar saja. Di penghujung sore menjelang malam, itupun kalau cuaca sedang cerah.
            Kalau cuaca sedang tidak bersahabat, ketika musim hujan misalnya, indahnya langit menjelang matahari tenggelam
            itu tidak terlihat seindah biasanya karena tertutup awan mendung.
          </p>
        </div>
      </div> */}

      {/* Footer Quote */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <img
            src="/path-to-beach-people.jpg"
            alt="Beach Sunset"
            className="rounded-xl"
          />
        </div>
        <div className="text-sm">
          <p>
            Entah senja pulang dalam waktu yang cepat atau terlampau lama.
          </p>
          <p className="mt-2">
            Terlepas dari itu semua, ada baiknya jika setiap yg masih diberikan Allah kenikmatan untuk melihat keindahan fenomena
            alam itu bersyukur.
          </p>
          <p className="mt-2">
            Bersyukur dengan menunaikan hal yg lebih wajib yaitu sholat. Bukan dengan setia memandanginya seraya mengucapkan hamdalah
            sampai lupa kalau waktu maghrib sudah tiba.
          </p>
        </div>
      </div> */}

      {/* Footer */}
      {/* <div className="text-center text-sm mt-8">
        <p>Picture by: @s.sptr</p>
        <p>Created by: Fiyah.sknh</p>
      </div> */}
    </div>
  );
};

export default AboutCompany;
