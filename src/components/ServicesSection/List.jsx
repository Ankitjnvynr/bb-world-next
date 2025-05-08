import React from 'react';
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa"; // Arrow icon

const list = [
  { name: "E Commerce Development", link: "/ecommerce-development" },
  { name: "SEO", link: "/seo" },
  { name: "Web Development", link: "/web-development" },
  { name: "Digital Marketing", link: "/digital-marketing" },
  { name: "Testing Services", link: "/testing" },
  { name: "Social Media Optimization", link: "/social-media-optimization" },
];

const List = () => {
  return (
    <>
      <section className="w-full bg-gradient-to-b from-[#f0f8ff] to-white py-14 px-4">
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-base text-[#0a243a] mb-4">
            Services We Offer
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            At BigByte, we empower eCommerce brands with scalable, innovative solutions that drive growth, elevate user experiences, and build long-lasting digital success.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto flex flex-col-reverse xl:flex-row items-center gap-12">
          {/* Service List */}
          <div className="w-full xl:w-1/2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {list.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="group p-5 bg-white border border-blue-100 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold text-blue-900 group-hover:text-blue-700">
                    {item.name}
                  </p>
                  <FaArrowRight className="text-blue-900 group-hover:translate-x-1 group-hover:text-blue-700 transition-transform duration-300" />
                </div>
              </Link>
            ))}
          </div>

          {/* Image Section */}
          <div className="w-full xl:w-1/2 flex justify-center mt-6 xl:mt-0">
            <img
              src="/images/hero/s1.jpeg"
              alt="Ecommerce illustration"
              className="w-full max-w-xl rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default List;
