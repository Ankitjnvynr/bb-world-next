import React from "react";
import { TbDeviceImacSearch } from "react-icons/tb";
import { BiSearchAlt } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import { LuClipboardPenLine } from "react-icons/lu";
import { IoAnalyticsSharp } from "react-icons/io5";

const steps = [
  {
    number: <TbDeviceImacSearch className=""/>,
    title: "CMS",
    description:
      "Content Management System is required by every website to create and maintain websites efficiently. We are experts in working with CMS like WordPress, Drupal, Shopify, Magento, and Woo Commerce.",
    color: "bg-yellow-400",
    icon:"bg-yellow-100" ,
  },
  {
    number: <BiSearchAlt />,
    title: "Website Redevelopment",
    description:
      "We have the solution if your website isn’t appealing and updated. Our redevelopment techniques will make your website lucrative and user-friendly. We create robust solutions depending on the business outlook.",
    color: "bg-orange-500",
    icon: "bg-orange-100",
  },
  {
    number: <IoIosPeople />,
    title: "Corporate Website",
    description:
      "We are a team of experts that provide professional websites that represent your business in the best way possible. We ensure to build websites that facilitate a better visitor’s experience.",
    color: "bg-teal-400",
    icon:"bg-teal-100",
  },
  {
    number: <LuClipboardPenLine />,
    title: "Ecommerce Websites",
    description:
      "We offer the development of an ecommerce portal to showcase products and sell them online. We at Big Byte have a team of highly trained and motivated professionals who are experts in creating a perfect user-friendly e-commerce website. We build an attractive website that no customer wants to leave.",
    color: "bg-amber-700",
    icon: "bg-pink-100",
  },
  {
    number: <IoAnalyticsSharp />,
    title: "Blogging Websites",
    description:
      "We provide all kinds of website designing solutions to help you acquire a simple, user-friendly, but at the same time desirable and stylish type of blogging website. We provide best in class designs and types of social media sharing options.",
    color: "bg-pink-700",
    icon: "bg-red-100",
  },
  {
    number: <IoAnalyticsSharp />,
    title: "Custom Website",
    description:
      "Big Byte, one of the leading web development companies, provides customized web development services. We provide fully functional websites to take your business to new horizons.",
    color: "bg-red-500",
    icon: "bg-blue-100",
  },
  {
    number: "07",
    title: "Planning before implementation",
    description:
      "The web development experts work strategically to provide a complete web strategy. We understand the importance of planning before starting with the implementation steps.",
    color: "bg-blue-700",
    icon: "bg-teal-100",
  },
  {
    number: "08",
    title: "Mobile-friendly website",
    description:
      "As more of the population is leaning towards the usage of mobile phones, we necessarily offer a whole host of mobile services to keep your brand ahead.",
    color: "bg-cyan-700",
    icon: "bg-cyan-100",
  },
  {
    number: "09",
    title: "Maximize profit",
    description:
      "Build a solid online presence that not only connects your business with the right audience but validates the brand and drives revenue.",
    color: "bg-zinc-300",
    icon: "bg-zinc-100",
  },
  {
    number: "09",
    title: "Visual Hierarchy",
    description:
      "We set up a complete visual hierarchy that highlights essential elements of the website to the user. This enhances their experience on the website and encourages them to take favorable actions.",
    color: "bg-zinc-300",
    icon: "bg-green-100",
  },
  {
    number: "09",
    title: "Performance Monitoring",
    description:
      "Not only do we intend to make your website the best, but we also keep an eye on the website’s performance and look for the chances for improvement.",
    color: "bg-zinc-300",
    icon: "bg-purple-100",
  },
  {
    number: "09",
    title: "Brand Interface Creation",
    description:
      "We create a brand interface for the website to ensure ease of communication with the audience on the website. This interface creation intends to make a solid customer base, and it is the best way to monitor a brand and maintain its identity.",
    color: "bg-zinc-300",
    icon: "bg-indigo-100",
  },
];

const Services = () => {
  return (
    <>
     <div className='mt-0 '>
        <p className='text-5xl font-medium text-[#0a243a] text-center mt-6  px-8 py-1 mx-5 xs:px-1' >
        Our Web Development Services</p>
        <p className="text-xl xl:px-36 font-base text-gray-700 px-20 py-2 xs:px-8">We offer comprehensive end to end Solutions for your busniess Projects. Our Accurately Programmed Web Applications Fit Perfectly To Your Business Requirements.
        </p>
           </div>
    <div className=" flex xl:items-center  justify-center bg-white ">
      <div className="bg-white  grid grid-cols-4 xs:grid-cols-1 xs:p-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:mt-3 xl:grid-cols-3 xl:mt-3  gap-7 w-full max-w-7xl">
        {steps.map((step, index) => (
          <div
            key={index}
            className= {`bg-slate-200 shadow-xl shadow-slate-600 rounded-tl-[24%] rounded-br-[24%] border-0 border-blue-950  flex flex-col items-center text-center p-4 `}
          >
            {/* Number circle */}
            {/* <div className="w-16 h-16  rounded-full flex items-center justify-center text-black font-bold text-lg mb-3 shadow-inner border-2 border-white relative">
              <div className={`absolute inset-0 rounded-full ${step.color}`} />
              <span className="relative z-10">{step.number}</span>
            </div> */}

            {/* Title & Description */}
            <h3 className="text-sm font-base uppercase tracking-wide mb-2">{step.title}</h3>
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
