import React from "react";
import { FaCamera, FaNetworkWired, FaFingerprint, FaVideo, FaRobot } from "react-icons/fa";
import { MdCameraIndoor, MdSecurity } from "react-icons/md";
import { GiCctvCamera } from "react-icons/gi";
import { BsShieldLock } from "react-icons/bs";

const services = [
  { icon: <GiCctvCamera size={28} />, title: "Local SEO",desc:"Local SEO is one of the best marketing tools to target audiences in specific geographic boundaries. Outshine your competitors and attract potential customers with the help of local SEO" },
  { icon: <FaNetworkWired size={28} />, title: "Start-up SEO",desc:"With quality optimization of your website on search engines, your startup can reach new heights. SEO facilitates growth which is unmatched by the ways provided by paid promotions" },
  { icon: <FaFingerprint size={28} />, title: "Enterprise SEO",desc:"If your eyes are holding a dream of making your business visible internationally, enterprise SEO is the best thing you can opt for. Elevate your business in the global market with our expert services" },
  { icon: <MdCameraIndoor size={28} />, title: "Ecommerce SEO" ,desc:"Ecommerce SEO is essential to boost the website’s visibility and optimize it according to search engine perception. We focus on images and reviews on the website and the keywords used to find the website."},
  { icon: <MdSecurity size={28} />, title: "WooCommerce SEO",desc:"Even though WooCommerce makes it simpler to create customized eCommerce websites, it sometimes becomes challenging to rank it on SERP. Our team of experts work to bring more traffic to your eCommerce website." },
  { icon: <FaVideo size={28} />, title: "Magento SEO" ,desc:"Magneto or adobe-commerce is a famous open-source eCommerce platform. It comes with hundreds of unique features that quickly grab the audience’s attention. We ensure the best SEO services that sneak peek at your business."},
  { icon: <BsShieldLock size={28} />, title: "Amazon SEO",desc:"Amazon is the leading platform for selling products online. Search Engine Optimization on Amazon lets your business outshine various competitors. It increases the product’s visibility, ultimately leading to higher sales and revenue." },
  { icon: <FaRobot size={28} />, title: "Mobile SEO",desc:"With the increasing usage of mobile phones, mobile SEO lets users easily navigate your website on their smartphones. We focus on those parameters which ensure excellent user experience on phones like page load speed, site design for mobile, etc." },
  { icon: <FaRobot size={28} />, title: "Shopify SEO",desc:"The simplicity of services on Shopify lets setup of the store done in minutes. But the matter of concern is to rank your store on the top results of the search page, and our SEO professionals make it possible for you." },
  { icon: <FaRobot size={28} />, title: "Guest blogging SEO",desc:"Guest blogging offers significant benefits for the business. It sets up an authorized brand with credibility, builds up relations with renowned leaders in your field and gives exposure to trade with new customers. Our expert content writers do it well for you." },
  { icon: <FaRobot size={28} />, title: "Comprehensive SEO Audit",desc:"SEO audits help figure out what is going well and whatnot in terms of the website’s search engine ranking. Big Byte does it for your website in a strategic way. We check the website on all SEO parameters and deliver detailed reports with authenticity." },
  { icon: <FaRobot size={28} />, title: "Google penalty assessment",desc:"Websites which include black hat SEO practices and other unfair means for being on top are often penalized by Google, and it dramatically reduces the visibility of websites. Our team keeps a regular analysis of your website so that it may not get punished in any way possible." },
];

const ServicesOffer = () => {
  return (
    <>
    <div className='mt-10 '>
        
        <p className='text-3xl font-bold text-[#0a243a] bg-blue-100 px-2 py-1 mx-5' >Take a look at a Services we offer</p>
       
    </div>
    <div className="p-6 s:p-10 bg-white">
      <div className="grid grid-cols-1 s:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {/* Left Highlighted Box */}
        <div className="bg-blue-100 p-6 flex flex-col justify-center rounded-md shadow-md">
          <p className="text-sm text-orange-600 font-bold">SERVICES WE OFFER</p>
          <h2 className="text-2xl font-bold mt-2">Take a look at a Services we offer</h2>
        </div>

        {/* Services Boxes */}
        {services.map((service, index) => (
          <div
            key={index}
            className="border-4 p-6 rounded-md shadow-lg hover:shadow-md transition-all flex flex-col gap-2 justify-start"
          >
            {/* <div className="text-cyan-700">{service.icon}</div> */}
            <h3 className="font-semibold text-lg">{service.title}</h3>
            <p className="text-sm text-gray-600">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ServicesOffer;
