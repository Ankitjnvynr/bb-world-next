import React from "react";
import { useId } from "react";


export function FeaturesSectionDemo() {
  return (
    <>
      <div className="bg-white py-14 px-4 ">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900">
            Industries We <span className="text-yellow-500">Serve</span>
          </h1>
          <p className="text-2xl font-medium text-gray-700 mt-4">
            Highly tailored <span className="text-yellow-500">IT</span> Solutions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {grid.map((feature) => (
            <div
              key={feature.title}
              className="relative bg-gradient-to-br from-white via-white to-transparent p-6 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <Grid size={20} />
              <p className="text-blue-950 text-lg font-bold relative z-20">
                {feature.title}
              </p>
              <p className="text-gray-700 mt-3 text-base relative z-20">
                {feature.description}
              </p>
              <p className="text-cyan-800 text-lg font-bold relative z-20 mt-3">
                <a href={feature.link}>
                  Discover More...
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

const grid = [
  {
    title: "E Commerce Development",
    description:
      "The Big Byte Innovations Pvt Ltd (BIPL) is a prominent ecommerce development company offering reliable services that shape your business ideas to excel potential of success",
    link:"/ecommerce-development",
  },
  {
    title: "SEO",
    description:
      "With proper SEO techniques, businesses can grow faster with an efficient website that could quench the thirst of users to get relevant information about the product and services provided.",
      link:"/seo",
  },
  {
    title: "Web Development",
    description:
      "Building an attractive website with all essential elements is not the only thing to be considered. Website security is key to preventing unauthorized access.",
      link:"/web-development",
  },
  {
    title: "Digital Marketing",
    description:
      "We specialize in the development of multifunctional, dynamic and robust business websites using the most advanced technologies.",
      link:"/digital-marketing",
  },
  {
    title: "Testing Services",
    description:
      "Help to Test Web Apps with Codeless automation testing tool.",
      link:"/testing",
  },
  {
    title: "Social Media Optimization",
    description:
      "BigByte has experts who have deep knowledge of how SMM works and how it can benefit your business.",
      link:"/social-media-optimization",
  },
  // {
  //   title: "Business Intelligence",
  //   description:
  //     "We empower businesses with data-driven insights through robust BI solutions. We help industries turn data into insights, enabling smarter decisions, improved efficiency, and strategic growth.",
  //     link:"/business-intelligence",
  // },
  // {
  //   title: "Financial Sector",
  //   description:
  //     "We empower financial institutions with data-driven insights to enhance risk management, optimize operations, and drive informed decisions.",
  //     link:"/financial-sector",
  // },
  // {
  //   title: "HealthCare Sector",
  //   description:
  //     "We deliver secure and user-friendly digital solutions to streamline healthcare operations, improve patient engagement, and enhance care delivery.  ",
  //     link:"/healthcare-sector",
  // },
];

export const Grid = ({ pattern, size }) => {
  const p = pattern ?? Array.from({ length: 5 }, () => [
    Math.floor(Math.random() * 4) + 7,
    Math.floor(Math.random() * 6) + 1,
  ]);

  return (
    <>
    <div className=" pointer-events-none absolute left-1/2 top-0 -ml-20  h-full w-full [mask-image:linear-gradient(white,transparent)]">
      
      <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-cyan-200/30 dark:from-white/30 dark:to-cyan-200/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full mix-blend-overlay fill-white/10 stroke-slate-700/10"
        />
      </div>
      
    </div>
    </>
  );
};

export function GridPattern({
  width,
  height,
  x,
  y,
  squares,
  ...props
}) {
  const patternId = useId();

  const uniqueSquares = Array.from(new Set(squares.map(([x, y]) => `${x}-${y}`)))
  .map(str => str.split('-').map(Number));


  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}>
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {uniqueSquares.map(([x, y]) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height} />
          ))}
        </svg>
      )}
    </svg>
  );
}