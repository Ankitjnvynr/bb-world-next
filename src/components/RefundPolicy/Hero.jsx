import React from 'react';

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative">
        <img 
          src="/images/hero/refund.jpeg" 
          alt="Hero Image" 
          className="w-full h-screen object-cover" 
        />
        <div 
          className="absolute text-white text-end font-bold leading-tight 
          top-[70%] left-6 xs:top-[75%] xs:left-6 xs:w-48 xs:text-3xl 
          sm:top-[65%] sm:left-10 sm:w-64 sm:text-4xl 
          md:top-[40%] md:left-16 md:w-[35rem] md:text-6xl 
          lg:top-[40%] lg:left-16 lg:w-[40rem] lg:text-7xl
          xl:top-[40%] xl:left-16 xl:w-[80rem] xl:text-8xl
          "
        >
          {/* Text content here */}
          <h1>Refund and Returns Policy</h1>
        </div>
      </div>

      {/* Description Section */}
      <div className="bg-white px-4 xs:px-6 md:px-16 lg:px-24 py-12 space-y-6 text-gray-800">
        <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 leading-relaxed">
          All Web Design / Web Development / Mobile Application Development / Software Development / Search Engine Optimization / Digital Marketing / Maintenance of a website are carried out and accepted after total analysis and creation of a complete scope document, in order to ensure that our teams have full understanding of the work needed to be done, eliminating possibilities of any project cancellation / reversal / dispute. 
        </p>
        <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 leading-relaxed">
          1. The client understands that there is work involved to achieve every milestone of the project and completion of every module, a refund would not be possible for the work once assigned to us.
        </p>
        <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 leading-relaxed">
          2. We shall deduct the administrative/processing charges not less than Rs.(amount only) if we are unable to process the application due to non-submission of required documents as per government guideline or any kind of non-cooperation from the applicant or any other circumstances restricting us to process the application.
        </p>
        <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 leading-relaxed">
          3. If any government fee, duty, challan, or any other sum is paid in the course of processing your registration application, we are not liable to refund such government fees. (No worries, no government fee shall be deducted until the Government challan or any other payment proof is provided to you.)
        </p>
        <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 leading-relaxed">
          4. No refund shall be issued if you have already availed of any complimentary service or discount offer attached to the paid service for which you are seeking a refund, such as one-day ad banner publication, software subscription, etc.
        </p>
        <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 leading-relaxed">
          5. No refund shall be possible at any stage with respect to any subscription-based service such as GST return packages, Company annual compliance packages if the same service is partially processed or delivered.
        </p>
        <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 leading-relaxed">
          6. Under any circumstances, the amount of refund cannot exceed the amount paid by the customer.
        </p>

        <div className="text-start md:text-center lg:text-start mt-4">
          <a href="contact-us">
            <button className="bg-blue-950 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-800 transition-all duration-300">
              Contact Us
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
