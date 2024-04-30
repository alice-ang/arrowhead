"use client";
import React, { ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

export const ScrollingText = ({ children }: { children: ReactNode }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  return (
    <motion.h2 className="text-stroke text-[96px] text-palette-background w-screen">
      {children}
    </motion.h2>
  );
};
