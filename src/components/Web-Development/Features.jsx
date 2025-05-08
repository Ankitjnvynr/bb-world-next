import React from "react";

const sections = [
  {
    id: "01",
    title: "Hero Section",
    desc: "Address a key problem directly in the headline. Add a video/demo for instant engagement",
    color: "bg-orange-100",
    pin: "bg-orange-500",
  },
  {
    id: "02",
    title: "Advantages",
    desc: "Showcase 3 main benefits of your product. Each benefit highlighted with a title and brief description",
    color: "bg-blue-100",
    pin: "bg-blue-500",
  },
  {
    id: "03",
    title: "Apply cases",
    desc: "Show who benefits most from your product. Explain in one line how each audience type gains value + add some quick social proof",
    color: "bg-purple-100",
    pin: "bg-purple-500",
  },
  {
    id: "04",
    title: "Features",
    desc: "List core functionalities clearly. Connect features to user advantages where possible",
    color: "bg-orange-100",
    pin: "bg-orange-500",
  },
  {
    id: "05",
    title: "Call to action",
    desc: "CTA that speaks to the user and personalized for the product's niche",
    color: "bg-blue-100",
    pin: "bg-blue-500",
  },
  {
    id: "06",
    title: "Testimonials",
    desc: "Include real faces, links for the proof, success stories, rating and even case studies. The more social proof you have - the better",
    color: "bg-purple-100",
    pin: "bg-purple-500",
  },
];

const Features = () => {
  return (
    <div className="relative w-full flex flex-col items-center px-4 py-10 md:py-20">
      <div className="absolute w-1 bg-gray-300 h-full left-1/2 transform -translate-x-1/2 z-0" />
      <div className="flex flex-col gap-20 w-full max-w-5xl z-10">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""} items-center md:items-start md:justify-between`}
          >
            <div className="w-full md:w-1/2 px-4 md:px-0">
              <div
                className={`relative p-6 rounded-xl shadow-xl ${section.color} max-w-md mx-auto md:mx-0`}
              >
                <div className={`w-4 h-4 rounded-full absolute -top-4 left-1/2 -translate-x-1/2 md:left-auto md:right-[-1rem] md:top-1 ${section.pin}`}></div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  <span className="text-lg text-gray-500 mr-1">{section.id}</span>
                  {section.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">{section.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;