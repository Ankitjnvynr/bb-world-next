import React from 'react';

const services = [
  "UI / UX Automation",
  "Unit & Integration",
  "Performance Testing",
  "Manual Testing",
  "QA Consulting",
  "Mobile Application",
  "API & Web Service",
  "Functional Testing",
];

const Services = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#f0f8ff] to-white py-16 px-6 md:px-12 lg:px-24">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#0a243a] mb-4">
          Testing Services We Provide
        </h2>
        <p className="text-lg md:text-xl text-gray-600">
          Helping You Overcome Your Testing Challenges
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto flex flex-col-reverse xl:flex-row items-center gap-14">
        {/* Service List */}
        <div className="w-full xl:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white border border-blue-100 rounded-2xl shadow-md hover:shadow-lg transition-transform hover:scale-[1.03] duration-300"
            >
              <p className="text-lg font-base text-blue-900">{service}</p>
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="w-full xl:w-1/2 flex justify-center">
          <img
            src="/images/hero/4380747.jpg"
            alt="Testing services illustration"
            className="w-full max-w-md md:max-w-lg rounded-2xl shadow-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
