"use client";
import React, { ReactNode, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export const ScrollingText = ({
  invert = false,
  text,

  repeat = 1,
}: {
  invert?: boolean;
  text: string[];
  repeat?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const scaleSpring = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
  });

  const x = useTransform(
    scaleSpring,
    [0, 1],
    [invert ? "-10%" : "1%", invert ? "1%" : "-10%"]
  );

  return (
    <div ref={ref} className="flex flex-row justify-center">
      <motion.div style={{ x }} className="flex flex-row space-x-8">
        {Array.from({ length: repeat }).map(() => (
          <>
            {text.map((item, index) => (
              <h2
                className="text-stroke text-[96px] text-palette-background whitespace-nowrap	"
                key={index}
              >
                {item}
              </h2>
            ))}
          </>
        ))}
      </motion.div>
    </div>
  );
};
