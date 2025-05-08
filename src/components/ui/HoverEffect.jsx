"use client";
import { cn } from "../../../utils/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <div className="text-center mt-16 px-4 sm:px-6 md:px-8">
        <h3 className="text-2xl sm:text-3xl font-semibold">TECHNOLOGY INDEX</h3>
        <h2 className="text-2xl sm:text-3xl md:text-4xl  text-blue-950 mt-4">
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
            key={item?.link}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-100 dark:bg-slate-500/[0.8] block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          </a>
        ))}
      </div>
    </>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-[#0a243a] border border-transparent dark:border-white/[0.5] group-hover:border-slate-100 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4
      className={cn(
        "text-zinc-100  text-xl sm:text-2xl tracking-wide mt-4 text-center font-base",
        className
      )}
    >
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <div
      className={cn(
        "mt-6 sm:mt-8 text-zinc-100 tracking-wide leading-relaxed  text-base relative z-20 text-center font-base",
        className
      )}
    >
      {children}
    </div>
  );
};
