import React from 'react';
import { FaBullseye, FaLightbulb, FaChartPie, FaUser, FaCog } from 'react-icons/fa';

const timelineData = [
  {
    icon: <FaBullseye className="text-2xl text-[#0a243a]" />,
    title: "Develop Brand Awareness",
    text: "SMM techniques, if appropriately used, can set up powerful brand identity and awareness. We create fascinating content that establishes brand voice and tone on social media, which gives credibility to the business.",
    align: "left",
  },
  {
    icon: <FaLightbulb className="text-2xl text-[#0a243a]" />,
    title: "Community Management",
    text: "Social Media Optimization forms the whole community of the target audience. The initial stage commences with the post and enhances business presence by engaging a large chunk of potential customers.",
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
    title: "Build relation",
    text: "With our result-driven services, A successful SMM methodology helps to understand the curious minds of consumers, build up trust and turn them into loyal brand advocates. Our ethical strategies enhance the brand value",
    align: "right",
  },
  {
    icon: <FaCog className="text-2xl text-[#0a243a]" />,
    title: "Grow Revenue",
    text: "As more and more people engage with social media posts, more sales and leads. A business gets its potential customer, which builds up the whole network chain of people interested in the business",
    align: "left",
  },
  {
    icon: <FaBullseye className="text-2xl text-[#0a243a]" />,
    title: "Build marketing persona",
    text: "We adhere to putting together creative minds and their enormous brainstorming sessions and build up the whole structure based on the data collected from social media accounts.",
    align: "right",
  },
  {
    icon: <FaChartPie className="text-2xl text-[#0a243a]" />,
    title: "Measuring the impact of branding efforts",
    text: "We watch the social media insights of whether our actions are impactful. We provide fortnightly reports which enable you to keep a track record of the performance.",
    align: "left",
  },
];

const Data = () => {
  return (
    <>
      {/* Header */}
      <div className="bg-white px-6 md:px-16 lg:px-24 py-12 space-y-6 text-gray-800">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 leading-snug">
          SMO is essential in multiple ways
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
          BigByte is a full-fledged digital marketing company creating admirable digital footprints. We design brand experience through actionable plans grounded in reality. Our services comprise
        </p>
      </div>

      {/* Timeline Section */}
      <div className="relative flex flex-col items-center w-full max-w-7xl mx-auto py-10 px-4 sm:px-8">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              item.align === "right" ? "md:flex-row-reverse" : ""
            } items-center w-full mb-16 gap-6`}
          >
            {/* Icon */}
            <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-white border-4 border-[#0a243a] rounded-full shadow-md z-10">
              {item.icon}
            </div>

            {/* Connector */}
            <div className="hidden md:block w-full h-1 bg-gradient-to-r from-[#0a243a] to-[#ff9908] mx-4" />

            {/* Text Card */}
            <div className="bg-white shadow-lg p-5 rounded-md w-full max-w-md sm:max-w-lg">
              <h3 className="text-lg font-bold text-[#0a243a] mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Data;
