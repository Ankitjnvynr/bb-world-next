import React from 'react';
import { FaBullseye, FaLightbulb, FaChartPie, FaUser, FaCog } from 'react-icons/fa';

const timelineData = [
  {
    icon: <FaBullseye className="text-2xl text-[#0a243a]" />,
    title: "User-friendly website",
    text: "With proper SEO techniques, businesses can grow faster with an efficient website that could quench the thirst of users to get relevant information about the product and services provided. It ensures the easy availability of the business to the target audience.",
    align: "left",
  },
  {
    icon: <FaLightbulb className="text-2xl text-[#0a243a]" />,
    title: "Strong brand awareness",
    text: "A substantial brand build-up when more people get to know about the business: SEO makes it possible for the company. With a well-optimized website, you can drive high traffic and leads into your business",
    align: "right",
  },
  {
    icon: <FaChartPie className="text-2xl text-[#0a243a]" />,
    title: "Gain Trust",
    text: "A brand that fulfils search engine criteria gains more trust and recognition from your target. BigByte provides transparent SEO Services and conducts work on your website, which has a commercial impact on business with undeniable discoverability.",
    align: "left",
  },
  {
    icon: <FaUser className="text-2xl text-[#0a243a]" />,
    title: "Drive sales-qualified leads.",
    text: "Our SEO services intend to bring more traffic to the website, which may attract high-quality authentic business leads.",
    align: "right",
  },
  {
    icon: <FaCog className="text-2xl text-[#0a243a]" />,
    title: "Performance tracking",
    text: "We adhere to maintaining a track record of insights on how our services impact your business’s online presence. The objective is to monitor whether we are on the right track or if further improvement is required.",
    align: "left",
  },
//   {
//     icon: <FaBullseye className="text-2xl text-[#0a243a]" />,
//     title: "Improve key metrics",
//     text: "BIPL follows a dedicated approach to accurately analysing key performance indices of your e-commerce website. We properly analyse performance and discover loopholes in your business websites.",
//     align: "right",
//   },
//   {
//     icon: <FaLightbulb className="text-2xl text-[#0a243a]" />,
//     title: "Ecommerce aggregators and marketing suites",
//     text: "We are expertise in building ecommerce aggregators and marketing suites. Aggregators manage and host diverse brands securely making the promotion easy, while the marketing suite helps optimise the website.",
//     align: "left",
//   },
//   {
//     icon: <FaChartPie className="text-2xl text-[#0a243a]" />,
//     title: "Multi-vendor platform",
//     text: "With elegant UI, low bounce rate and maximum engagement, Big Byte have created several multi-vendor platforms. Advanced functionalities and noticeable features are integrated facilities we offer in multi-vendor platforms.",
//     align: "right",
//   },
];

const  Data = () => {
  return (
    <>
    <div className='mt-10 '>
        <p className='text-xl font-base text-[#0a243a] px-2 py-1 mx-5'>HIRE SEO EXPERTS FOR GROWTH</p>
        <p className='text-3xl font-medium text-[#0a243a] bg-blue-100 px-2 py-1 mx-5' >Grow Your Online Presence With Big Byte</p>
        <p className='text-lg mt-4 font-base px-8 '>Everyone wants their website to be on the first page of Google? Search Engine Optimisation can do it for you. Every business must maintain its online presence to flourish in the market in this age of high competition and growing technology. All a brand needs is to present at the right place at the right time. Search Engine Optimisation improves the visibility of a website organically on the search engine by incorporating search engine friendly elements into a website.</p>
    </div>
    <div className="text-start md:text-center lg:text-start mt-4 pl-8">
           <a href="contact-us"> <button className="bg-blue-950 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-800 transition-all duration-300">
              Contact Us 
            </button> 
            </a>
          </div>
    <div className='mt-14 '>
    <p className='text-xl font-base text-[#0a243a] px-2 py-1 mx-5'>RANK YOUR WEBSITE ON TOP
    </p>
        <p className='text-3xl font-medium text-[#0a243a] px-2 bg-blue-100 mx-5' >SEO is essential in many ways</p>
        {/* <p className='text-lg mt-4 font-medium px-8'>BIPL follows an entirely different approach to building scalable, modern and secure e-commerce websites for the business. We implement innovative strategies to deliver customised eCommerce websites.</p> */}
    </div>
    <div className="relative flex flex-col items-center w-full max-w-6xl mx-auto py-10 ">
      {timelineData.map((item, index) => (
        <div
          key={index}
          className={`flex items-center w-full mb-16 ${
            item.align === "right" ? "flex-row-reverse" : ""
          }`}
        >
          {/* Icon Circle */}
          <div className="flex items-center justify-center w-16 h-16 bg-white border-4 border-[#0a243a] rounded-full shadow-md z-10 xs:mx-3">
            {item.icon}
          </div>

          {/* Connector Line */}
          <div className="w-full h-1 bg-gradient-to-r from-[#0a243a] to-[#ff9908] mx-4 "></div>

          {/* Text Box */}
          <div className="bg-white shadow-lg p-4 rounded-md w-[400px] xs:w-[1200px] xs:mx-3">
            <h3 className="text-lg font-bold text-[#0a243a]">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Data;
