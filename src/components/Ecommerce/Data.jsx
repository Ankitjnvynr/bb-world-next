import React from 'react';
import { FaBullseye, FaLightbulb, FaChartPie, FaUser, FaCog } from 'react-icons/fa';

const timelineData = [
  {
    icon: <FaBullseye className="text-2xl text-[#0a243a]" />,
    title: "B2C Marketplaces",
    text: "Big Byte implements a multi-currency and multilingual marketplace for continuous collaboration between sellers and customers. We help suppliers manage their goods and services with ease with our services.",
    align: "left",
  },
  {
    icon: <FaLightbulb className="text-2xl text-[#0a243a]" />,
    title: "B2B Trade Portals",
    text: "Our experts create featured B2B portals to unite all trading stakeholders like manufacturers, wholesalers, suppliers and end-users within a centralised hub. We ensure the secure formation of multichannel global trade.",
    align: "right",
  },
  {
    icon: <FaChartPie className="text-2xl text-[#0a243a]" />,
    title: "WooCommerce",
    text: "WooCommerce is a wordpress plugin that simplifies the creation and management of online stores. It offers reasonable flexibility and several essential features such as secured payments and shipping integration.",
    align: "left",
  },
  {
    icon: <FaUser className="text-2xl text-[#0a243a]" />,
    title: "Magento",
    text: "Magento is Adobe open-source eCommerce platform written in php. It offers a multichannel facility for both B2B and B2C businesses on a single platform. Grasp the power of Magento with the help of Big Byte web developers.",
    align: "right",
  },
  {
    icon: <FaCog className="text-2xl text-[#0a243a]" />,
    title: "Shopify",
    text: "Shopify is the platform to sell products online on Facebook. It offers complete reliability to manage orders, staff, and products from your own space. Our Shopify experts help you to leverage the power of Shopify to build profitable online stores.",
    align: "left",
  },
  {
    icon: <FaBullseye className="text-2xl text-[#0a243a]" />,
    title: "Improve key metrics",
    text: "BIPL follows a dedicated approach to accurately analysing key performance indices of your e-commerce website. We properly analyse performance and discover loopholes in your business websites.",
    align: "right",
  },
  {
    icon: <FaLightbulb className="text-2xl text-[#0a243a]" />,
    title: "Ecommerce aggregators and marketing suites",
    text: "We are expertise in building ecommerce aggregators and marketing suites. Aggregators manage and host diverse brands securely making the promotion easy, while the marketing suite helps optimise the website.",
    align: "left",
  },
  {
    icon: <FaChartPie className="text-2xl text-[#0a243a]" />,
    title: "Multi-vendor platform",
    text: "With elegant UI, low bounce rate and maximum engagement, Big Byte have created several multi-vendor platforms. Advanced functionalities and noticeable features are integrated facilities we offer in multi-vendor platforms.",
    align: "right",
  },
];

const  Data = () => {
  return (
    <>
    <div className='mt-10 '>
        <p className='text-3xl font-bold text-[#0a243a] bg-[#c6e2ed] px-8 py-1 mx-' >Give your global business visibility via eCommerce</p>
        <p className='text-lg mt-4 font-medium px-8 '>The Big Byte Innovations Pvt Ltd (BIPL) is a prominent ecommerce development company offering reliable services that shape your business ideas to excel potential of success. We ensure full-fledged e-commerce solutions that make your business two-way communication. We build interactive websites that persuade potential customers’ active engagement.</p>
    </div>
    <div className="text-start md:text-center lg:text-start mt-4 pl-8">
           <a href="contact-us"> <button className="bg-blue-950 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-800 transition-all duration-300">
              Contact Us 
            </button> 
            </a>
          </div>
    <div className='mt-14 '>
        <p className='text-3xl font-bold text-[#0a243a] px-8 bg-[#c6e2ed] mx-' >Simplifying interaction between customers and your business</p>
        <p className='text-lg mt-4 font-medium px-8'>BIPL follows an entirely different approach to building scalable, modern and secure e-commerce websites for the business. We implement innovative strategies to deliver customised eCommerce websites.</p>
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
