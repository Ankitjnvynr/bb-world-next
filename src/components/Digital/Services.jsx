import React from "react";
import { FaFacebookSquare, FaInstagramSquare, FaYoutube, FaLinkedin } from "react-icons/fa";
import { SiGoogleads } from "react-icons/si";

const steps = [
  {
    icon: <FaFacebookSquare className="text-white text-2xl" />,
    title: "Facebook Ads",
    description:
      "Facebook is something we simply can’t ignore as it is most actively used. It enhances brand visibility, raises awareness and encourages engagement.",
    color: "bg-blue-600",
  },
  {
    icon: <FaInstagramSquare className="text-white text-2xl" />,
    title: "Instagram Ads",
    description:
      "Popular among the youth, Instagram offers trending promotion tools like reels, stories & carousel posts to capture attention.",
    color: "bg-gradient-to-r from-pink-500 to-yellow-500",
  },
  {
    icon: <SiGoogleads className="text-white text-2xl" />,
    title: "Google Ads",
    description:
      "Google Ads brings targeted traffic, while SEO builds organic growth — both essential for a digital strategy.",
    color: "bg-green-500",
  },
  {
    icon: <FaYoutube className="text-white text-2xl" />,
    title: "YouTube Ads",
    description:
      "Second-largest search engine! Run your own ads or advertise on others’ videos to reach global audiences.",
    color: "bg-red-600",
  },
  {
    icon: <FaLinkedin className="text-white text-2xl" />,
    title: "LinkedIn Ads",
    description:
      "Ideal for B2B connections and brand credibility. Showcase your expertise and generate leads through professional networking.",
    color: "bg-blue-800",
  },
];

const Services = () => {
  return (
    <section className="py-12 bg-white px-4 sm:px-8 lg:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-950 mb-10">
        Our Social Media Ad Services
      </h2>
      <div className="grid gap-8 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 max-w-7xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="rounded-xl shadow-md border hover:shadow-xl transition duration-300 bg-white p-6 text-center flex flex-col items-center"
          >
            {/* Icon with background circle */}
            <div className={`w-16 h-16 flex items-center justify-center rounded-full mb-4 shadow-inner ${step.color}`}>
              {step.icon}
            </div>
            {/* Title & Description */}
            <h3 className="text-lg font-semibold text-blue-950 mb-2">{step.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
