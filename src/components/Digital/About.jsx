import React from 'react';

const About = () => {
  const sections = [
    {
      title: 'Search Engine Optimization',
      points: [
        "Just merely having a website is not enough today. Getting noticed, having a prominent presence on the internet for people to contact you for your services etc. determines the strength of your digital marketing portfolio. Therefore we devise SEO strategy that works round the clock for making your online presence strong. This helps bring a lot of relevant and substantial traffic to your site.",
        "SEO Audit analyzes weak points of your present search engine capacity: content creation with keywords, on-page optimization, and optimized link development."
       
      ],
      link:"/seo",
    },
    {
      title: 'Social Media Marketing',
      points: [
        "We bring a new flavor to your social media marketing with innovative strategies and results. Our Digital Marketing & social media experts make your presence strong and consistent to bring you more customers. Here are some of our effective ways to go Social with digital marketing.",
        "Competitive analysis allows us to understand market trends as well as the competitors. This leads to enhancing our own strategies to come up with better solutions. We create social media campaigns that focus on converting potential users and enquiries into long-term customers."
      ],
      link:"/social-media-optimization",
    },
  ];

  return (
    <div className="px-4 md:px-10 lg:px-20 py-10 bg-white space-y-14">
      {sections.map((section, idx) => (
        <div key={idx} className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-medium text-blue-900 text-start md:text-center lg:text-start">
            {section.title}
          </h2>
          {section.points.map((text, i) => (
            <p
              key={i}
              className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed text-start md:text-center lg:text-start"
            >
              {text}
            </p>
          ))}
          <div className="text-start md:text-center lg:text-start mt-4">
           <a href={section.link}> <button className="bg-blue-950 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-800 transition-all duration-300">
              Learn More
            </button> </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
