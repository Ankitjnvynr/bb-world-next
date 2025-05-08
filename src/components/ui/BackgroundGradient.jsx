'use client';

import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../../utils/cn";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0% 50%",
    },
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    },
  };

  const sharedMotionProps = animate
    ? {
        variants,
        initial: "initial",
        animate: "animate",
        transition: {
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        },
        style: {
          backgroundSize: "400% 400%",
        },
      }
    : {};

  const gradientBg =
    "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),\
radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),\
radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),\
radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]";

  return (
    <div className={cn("relative p-[4px] group overflow-hidden", containerClassName)}>
      <GradientLayer {...sharedMotionProps} gradientBg={gradientBg} />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};

// Reusable Gradient Layer Component
const GradientLayer = ({ gradientBg, ...motionProps }) => (
  <motion.div
    {...motionProps}
    className={cn(
      "absolute inset-0 rounded-3xl will-change-transform transition-opacity duration-500",
      gradientBg
    )}
  />
);

export default BackgroundGradient;
