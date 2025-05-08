import React from 'react';

const About = () => {
  const sections = [
    {
      title: 'Fixed Price',
      points: [
        "With our fixed price mode, we propose our customers a low-risk option. Moreover, this approach can be effectively implemented when the scope and specifications of the project are clearly defined.",
      ],
    },
    {
      title: 'Time & Material',
      points: [
        "This Testing as a service model is ideally suited for projects where the scope and specifications are not entirely defined at the beginning of the engagement. Consequently, it offers flexibility and adaptability. Moreover, it ensures a tailored approach as the project evolves.",
      ],
    },
    {
      title: 'Risk Sharing',
      points: [
        "Under risk-sharing models, we can invest and share the development costs. In return, we jointly own the Intellectual Property (IP) and share revenue or licensing fees. Moreover, we actively share the risks involved in both developing and marketing a product, collaborating closely with our customers.",
      ],
    },
    {
      title: 'Dedicated ODC',
      points: [
        "Clients will be given an option to screen and select a resource to work on their project. Moreover, our specialists will work exclusively on the client’s project. In addition, the Offshore Development Centre (ODC) operation is an appropriate model for businesses that wish to expand their own team seamlessly.",
      ],
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-6 sm:px-10 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto space-y-20">
        {sections.map((section, idx) => (
          <div key={idx} className="space-y-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-base text-blue-900 text-center lg:text-left">
              {section.title}
            </h2>
            {section.points.map((point, i) => (
              <p
                key={i}
                className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed text-center lg:text-left"
              >
                {point}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
