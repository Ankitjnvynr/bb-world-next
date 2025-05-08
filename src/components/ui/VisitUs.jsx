import React from 'react';

const VisitUs = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12">

        {/* Left Side - Text and Image */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <div className="space-y-3">
            <p className="text-gray-500 uppercase tracking-wider text-sm font-semibold">
              Visit Us
            </p>
            <h2 className=" md:text-4xl text-base  text-gray-900 leading-snug">
              Located in the heart of Kurukshetra,<br className="hidden md:block" /> 
              where innovation and excellence converge!
            </h2>
          </div>
          <img
            src="/images/hero/kurukshetra1.jpeg"
            alt="Kurukshetra Sketch"
            className="w-full max-w-md mx-auto lg:mx-0 rounded-xl shadow-lg"
          />
        </div>

        {/* Right Side - Google Map */}
        <div className="w-full lg:w-1/2">
          <div className="w-full h-80 md:h-[450px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="W3 Dream Solutions Location"
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d110604.37935422939!2d76.80548464584226!3d29.96831035874661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390e46c929dacd87%3A0x411dbf9c880cc833!2sPlot%20No%2C%20151%2C%20Industrial%20Area%20Rd%2C%20Sector%202%2C%20Kurukshetra%2C%20Haryana%20136118!3m2!1d29.968335999999997!2d76.887886!5e0!3m2!1sen!2sin!4v1745825291628!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
};

export default VisitUs;
