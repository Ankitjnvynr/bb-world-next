import React from "react";
import { TbDeviceImacSearch } from "react-icons/tb";
import { BiSearchAlt } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import { LuClipboardPenLine } from "react-icons/lu";
import { IoAnalyticsSharp } from "react-icons/io5";

import { FiBell, FiMapPin, FiBarChart2, FiMonitor, FiTruck } from "react-icons/fi";

const steps = [
  {
    number: <TbDeviceImacSearch className=""/>,
    title: "SEO Audit",
    description:
      "We carefully analyze all the parameters that could affect the website’s performance on search engines and foundational issues that prevent the organic growth of the website.",
    color: "bg-yellow-400",
    icon:"" ,
  },
  {
    number: <BiSearchAlt />,
    title: "Keyword Research",
    description:
      "We are bound to research those specific keywords that could maximize the traffic on your website, keeping in mind the user’s search intent to direct them to your website.",
    color: "bg-orange-500",
    icon: <FiTruck className="w-6 h-6" />,
  },
  {
    number: <IoIosPeople />,
    title: "Persona model",
    description:
      "We precisely maintain a record of visitors’ behaviour on your website- their time on your website and their bounce rate. It helps you to emphasize the factors to make improvements.",
    color: "bg-teal-400",
    icon: <FiMapPin className="w-6 h-6" />,
  },
  {
    number: <LuClipboardPenLine />,
    title: "Content Marketing",
    description:
      "Keeping in mind the importance of relevant content for a website, we adhere to creating more engaging content for the user, keeping in mind the search engine metrics.",
    color: "bg-amber-700",
    icon: <FiBarChart2 className="w-6 h-6" />,
  },
  {
    number: <IoAnalyticsSharp />,
    title: "In-depth Analysis",
    description:
      "Our services purposely intend to analyze the website’s performance through search engine analytics deeply. For this reason, we set goals, make custom reports, and plan accordingly.",
    color: "bg-pink-700",
    icon: <FiMonitor className="w-6 h-6" />,
  },
//   {
//     number: "06",
//     title: "Shopping Cart development integrated with payment gateway",
//     description:
//       "BIPL efficiently develops shopping carts for your business with customer-centric features. Also, we provide a payment gateway system that caters to business needs and forms a strong global customer base.",
//     color: "bg-red-500",
//     icon: <FiMonitor className="w-6 h-6" />,
//   },
//   {
//     number: "07",
//     title: "Caters need the business efficiently",
//     description:
//       "As India’s leading ecommerce development agency, we help both B2B and B2C businesses expand their business and boost sales. We follow an agile eCommerce development approach which suits you well.",
//     color: "bg-blue-700",
//     icon: <FiTruck className="w-6 h-6" />,
//   },
//   {
//     number: "08",
//     title: "Future proof solutions",
//     description:
//       "Our team is expertise in diverse technologies. We strikingly provide our clients with future-ready ecommerce websites. Our services involve the usage of modern tools and technologies.",
//     color: "bg-cyan-700",
//     icon: <FiMapPin className="w-6 h-6" />,
//   },
//   {
//     number: "09",
//     title: "Social Media integration",
//     description:
//       "Social media is a trending medium to indulge shoppers with your website. Therefore, we integrate your eCommerce website with social media so that you don’t miss any way to engage your business with today’s social shoppers.",
//     color: "bg-zinc-300",
//     icon: <FiBarChart2 className="w-6 h-6" />,
//   },
];

const Services = () => {
  return (
    <>
     <div className='mt-0 '>
        <p className='text-3xl font-bold text-[#0a243a] bg-blue-100 px-8 py-1 mx-5 xs:px-1' >
        Elite SEO Services at affordable rate</p>
           </div>
    <div className=" flex xl:items-center  justify-center bg-white ">
      <div className="bg-white  grid grid-cols-4 xs:grid-cols-1 xs:p-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:mt-3 xl:grid-cols-3 xl:mt-14  gap-7 w-full max-w-7xl">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-tl-[24%] rounded-br-[24%] border-8 border-gray-300 shadow-sm flex flex-col items-center text-center p-4 "
          >
            {/* Number circle */}
            <div className="w-16 h-16  rounded-full flex items-center justify-center text-black font-bold text-lg mb-3 shadow-inner border-2 border-white relative">
              <div className={`absolute inset-0 rounded-full ${step.color}`} />
              <span className="relative z-10">{step.number}</span>
            </div>

            {/* Title & Description */}
            <h3 className="text-sm font-bold uppercase tracking-wide mb-2">{step.title}</h3>
            <p className="text-xs text-gray-600 mb-3">{step.description}</p>

            {/* Icon */}
            {/* <div className="text-black">{step.icon}</div> */}
          </div>
        ))}
      </div>
    </div>
    {/* <div className="mt-14 mb-16 xs:mt-4 xs:mb-10">
        <p className='text-base mt-4 font-base px-32 xs:p-3'>Being a top ecommerce development company, Big Byte offers a holistic approach to designing and developing websites that are appealing and easy to navigate, fast and responsive.</p>
        <p className='text-base mt-4 font-base px-32 xs:p-3'>We strive to create an engaging atmosphere for your customers with our eCommerce development services.</p>
        <p className='text-base mt-4 font-base px-32 xs:p-3'>To sell a product digitally, a company website must provide a unique and interactive experience that can leave a mark on the customer’s mind. BIPL offers completely managed eCommerce solutions with excellence.</p>
        <p className='text-base mt-4 font-base px-32 xs:p-3'>Big Byte Innovations Pvt Ltd guides online entry strategy for your business to reach an extensive array of customers. Take advantage of our reliable and affordable services to develop a whole ecosystem, enabling you to directly sell products to your customer.</p>
    </div> */}
    </>
  );
};

export default Services;
