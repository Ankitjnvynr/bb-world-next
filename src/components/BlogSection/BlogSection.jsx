import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';

const blogs = [
  {
    date: "March 5, 2025",
    title: "AI and automation are shaping the future.",
    image: "/images/hero/b3.jpg", 
  },
  {
    date: "March 5, 2025",
    title: "The Impact of Artificial Intelligence.",
    image: "/images/hero/b4.jpg",
  },
  {
    date: "March 5, 2025",
    title: "The Role of SEO in Digital Marketing",
    image: "/images/hero/b5.jpg",
  },
  {
    date: "March 5, 2025",
    title: "DeepSeek, Gemini, and ChatGPT.",
    image: "/images/hero/b6.webp", 
  },
  {
    date: "March 5, 2025",
    title: "Meta’s New AI Challenger",
    image: "/images/hero/b1.jpg",
  },
  {
    date: "March 5, 2025",
    title: "What is Blogging?",
    image: "/images/hero/b2.webp",
  },
];

const BlogSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50 px-4 md:px-8 lg:px-16 xl:px-24">
      <h2 className="text-3xl md:text-5xl font-extrabold text-blue-950 text-center  mt-14 mb-10 animate-fade-in-up">
        Latest Insights
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="group border border-gray-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white flex flex-col hover:scale-105 transform"
          >
            <div className="overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center text-gray-500 text-sm gap-2 mb-3">
                <FaRegCalendarAlt className="text-blue-600" />
                <span>{blog.date}</span>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-all duration-300">
                {blog.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
