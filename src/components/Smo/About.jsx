import React from 'react';

const About = () => {
  return (
    <section className="w-full bg-white py-14 px-6 sm:px-10 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* Text Content */}
        <div className="lg:w-1/2 space-y-6 text-gray-800">
          <h4 className="text-sm font-semibold text-gray-500 uppercase">
            Affordable SMO Services
          </h4>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
            Stay on Top with BigByte
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            Be a brand that is attractive, valuable, and trusted by everyone. BigByte helps
            you achieve your goals by crafting campaigns with potential customers that hit
            the right notes. We provide innovation mixed up with creativity, strategy, and
            technology, ensuring broad exposure to the business.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            Established with the tagline “Think Big” we provide many social media services.
            We are recognized as the top SMO company in India, believing in building long-term
            relations with our clients. We have a team of dedicated experts working at the
            grass-root level and start building your brand.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            Firstly we grab the audience’s attention and convert them into loyal customers.
            Also, our services strive to keep the existing customers intact. The purpose of
            SMO is not only to bring traffic but also to convert them into customers with
            intelligent strategies. If you are looking for a one-stop solution for all your
            SMO needs, BigByte is the right choice.
          </p>
        </div>

        {/* Image */}
        <div className="lg:w-1/2">
          <img
            src="/images/hero/sm2.jpeg"
            alt="SMO Illustration"
            className="w-full h-auto rounded-xl shadow-md object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default About;
