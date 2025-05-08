import React, { useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const clients = [
  { name: 'CBS College of Nursing', logo: '/images/logoClient/logo1.jpeg' },
  { name: 'CBS College of Ayurvedic', logo: '/images/logoClient/logo2.jpeg' },
  { name: 'Gieo Gita', logo: '/images/logoClient/logo3.jpeg' },
  { name: 'Hindustan Lab', logo: '/images/logoClient/logo4.jpeg' },
  { name: 'Radha Krishan Hospital', logo: '/images/logoClient/logo5.jpeg' },
  { name: 'CBS', logo: '/images/logoClient/logo6.jpeg' },
  { name: 'Aspire Education', logo: '/images/logoClient/logo7.jpeg' },
  { name: 'Aggarsain Public School', logo: '/images/logoClient/logo8.jpeg' },
  { name: 'Overseas', logo: '/images/logoClient/logo9.jpeg' },
  { name: 'Daulat', logo: '/images/logoClient/logo10.jpeg' },
  { name: 'Career Guru', logo: '/images/logoClient/logo11.jpeg' },
  { name: 'Katani Sweets', logo: '/images/logoClient/logo12.jpeg' },
  { name: 'Jump & Rise', logo: '/images/logoClient/logo13.jpeg' },
  { name: 'Goel Hospital', logo: '/images/logoClient/logo14.jpeg' },
  { name: 'Nex Gen Royal Enfield', logo: '/images/logoClient/logo15.jpeg' },
  { name: 'Global Admissions', logo: '/images/logoClient/logo16.jpeg' },
  { name: 'Sidharth Hospital', logo: '/images/logoClient/logo18.jpeg' },
  { name: 'Anthem International', logo: '/images/logoClient/logo19.jpeg' },
  { name: 'Pratham Test Prep', logo: '/images/logoClient/logo20.jpeg' },
  { name: 'Study Pedia', logo: '/images/logoClient/logo21.jpeg' },
  { name: 'VPS Motors', logo: '/images/logoClient/logo22.jpeg' },
  { name: 'Real Estate', logo: '/images/logoClient/logo23.jpeg' },
  { name: 'Cheetanya', logo: '/images/logoClient/logo24.jpeg' },
  { name: 'Genesis', logo: '/images/logoClient/logo25.jpeg' },
  { name: 'Dr. Mittal Path Lab', logo: '/images/logoClient/logo26.png' },
  { name: 'The Heights', logo: '/images/logoClient/logo27.jpeg' },
  { name: 'Akira Consultancy', logo: '/images/logoClient/logo29.jpeg' },
  { name: 'KS Convent Public School', logo: '/images/logoClient/logo30.jpeg' },
  { name: 'Aggarwal Nursing Home', logo: '/images/logoClient/logo31.jpeg' },
  { name: 'BS Heart Care', logo: '/images/logoClient/logo32.jpeg' },
  { name: 'BR International', logo: '/images/logoClient/logo33.jpg' },
];

const ClientsScroller = () => {
  const scrollRef = useRef();

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const interval = setInterval(() => {
      if (scrollContainer) {
        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollContainer.scrollBy({ left: 200, behavior: 'smooth' });
        }
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="relative w-full py-10 bg-white text-center px-4 sm:px-8 md:px-16">
      <h2 className="text-base sm:text-4xl md:text-5xl  text-[#0a243a] mb-10">
        Our Clients
      </h2>

      <div className="relative flex items-center justify-center w-full">
        {/* Left Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-2 sm:left-4 z-10 p-2 sm:p-3 bg-white rounded-full shadow-md hover:bg-gray-100"
        >
          <FaChevronLeft size={20} className="sm:size-6" />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 sm:gap-8 overflow-x-auto scroll-smooth scrollbar-hide mt-6"
          style={{
            width: '90%',
            maxWidth: '100%',
            height: 'auto',
            paddingBottom: '1rem',
          }}
        >
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-28 sm:w-36 md:w-40 flex-shrink-0 transition-transform duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain mb-2"
              />
              <p className="text-xs sm:text-sm font-medium text-center">{client.name}</p>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={scrollRight}
          className="absolute right-2 sm:right-4 z-10 p-2 sm:p-3 bg-white rounded-full shadow-md hover:bg-gray-100"
        >
          <FaChevronRight size={20} className="sm:size-6" />
        </button>
      </div>
    </div>
  );
};

export default ClientsScroller;
