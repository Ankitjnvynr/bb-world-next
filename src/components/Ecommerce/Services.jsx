import React from 'react';

const services = [
  "Grocery Store ",
  "Restaurants",
  "Fashion & Clothing",
  "Jewellery Store",
  "Travel & Tourism",
  "Online Booking",
  "Medical & Pharmacy",
];

const Services = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#f0f8ff] to-white py-14 px-4">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#0a243a] mb-4">
          Industries We Serve
        </h2>
        <p className="text-lg sm:text-xl text-gray-600">
          Our services cater to a wide range of eCommerce businesses, delivering scalable and user-centric solutions.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto flex flex-col-reverse xl:flex-row items-center gap-12">
        {/* Service List */}
        <div className="w-full xl:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-5 bg-white border border-blue-100 rounded-xl shadow-md hover:shadow-xl transition-transform hover:scale-[1.02]"
            >
              <p className="text-lg font-medium text-blue-900">{service}</p>
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="w-full xl:w-1/2 flex justify-center">
          <img
            src="./images/Industries/Ecommerce/ecommerce2.png"
            alt="Ecommerce illustration"
            className="w-full max-w-xl rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
