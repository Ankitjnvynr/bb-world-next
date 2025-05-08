"use client";

import { cn } from "../../../utils/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

// Main HoverEffect Component
export const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <div className="text-center mt-16 px-4 sm:px-6 md:px-8">
        <h3 className="text-2xl sm:text-3xl font-semibold">TECHNOLOGY INDEX</h3>
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-blue-950 mt-4">
          Where Trust Meets <span className="text-[#ff9908]">Purpose</span>
        </h2>
      </div>

      <div
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-12 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32",
          className
        )}
      >
        {items.map((item, idx) => (
          <a
            href={item?.link}
            key={item?.link || idx}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative">
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-neutral-100/70 dark:bg-slate-500/60 rounded-3xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>

              <Card>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </Card>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

// Card Component
export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 bg-[#0a243a] transition-all duration-300 border border-transparent dark:border-white/[0.5] group-hover:border-slate-100 relative overflow-hidden",
        className
      )}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
};

// CardTitle Component
export const CardTitle = ({ className, children }) => {
  return (
    <h4
      className={cn(
        "text-white text-xl sm:text-2xl tracking-wide mt-4 text-center font-semibold",
        className
      )}
    >
      {children}
    </h4>
  );
};

// CardDescription Component
export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "mt-4 sm:mt-6 text-zinc-200 tracking-wide leading-relaxed text-base text-center font-light",
        className
      )}
    >
      {children}
    </p>
  );
};
