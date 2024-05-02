"use client";
import React, { ReactNode, useRef } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

export const ScrollingText = ({
  children,
  invert = false,
}: {
  children: ReactNode;
  invert?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
  });

  const x = useTransform(
    scaleX,
    [0, 1],
    [invert ? "-10%" : "1%", invert ? "1%" : "-10%"]
  );

  return (
    <div className="" ref={ref}>
      <motion.div className="no-wrap flex relative" style={{ x }}>
        <h2 className="text-stroke text-[96px] text-palette-background leading-[90%] right-[100%] absolute w-full ">
          {children}
        </h2>
        <h2 className="text-stroke text-[96px] text-palette-background w-full leading-[90%]">
          {children}
        </h2>
        <h2 className="text-stroke text-[96px] text-palette-background leading-[90%] left-[100%] absolute w-full">
          {children}
        </h2>
        <h2 className="text-stroke text-[96px] text-palette-background leading-[90%] left-[100%] absolute w-full">
          {children}
        </h2>
        <h2 className="text-stroke text-[96px] text-palette-background leading-[90%] left-[200%] absolute w-full">
          {children}
        </h2>
        <h2 className="text-stroke text-[96px] text-palette-background leading-[90%] left-[300%] absolute w-full">
          {children}
        </h2>
      </motion.div>
    </div>
  );
};
