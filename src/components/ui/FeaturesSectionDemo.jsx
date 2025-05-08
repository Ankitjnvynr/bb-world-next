import React, { useId } from "react";

export function FeaturesSectionDemo() {
  return (
    <div className="bg-white py-14 px-4">
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
              <a href={feature.link}>Discover More...</a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const grid = [
  {
    title: "E Commerce Development",
    description:
      "Reliable ecommerce development services to shape your business ideas.",
    link: "/ecommerce-development",
  },
  {
    title: "SEO",
    description:
      "Effective SEO techniques to help your website grow and attract users.",
    link: "/seo",
  },
  {
    title: "Web Development",
    description:
      "Secure, responsive, and dynamic website development solutions.",
    link: "/web-development",
  },
  {
    title: "Digital Marketing",
    description:
      "Comprehensive digital marketing services for business growth.",
    link: "/digital-marketing",
  },
  {
    title: "Testing Services",
    description: "Automated testing solutions for efficient web app testing.",
    link: "/testing",
  },
  {
    title: "Social Media Optimization",
    description:
      "Expert social media strategies to enhance your brand's presence.",
    link: "/social-media-optimization",
  },
];

export const Grid = ({ pattern, size }) => {
  const p = pattern ?? Array.from({ length: 5 }, () => [
    Math.floor(Math.random() * 4) + 7,
    Math.floor(Math.random() * 6) + 1,
  ]);

  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-cyan-200/30 opacity-100">
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
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y], index) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}-${index}`} // Ensures unique key
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
