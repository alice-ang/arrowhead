"use client";

import { cn } from "@/lib/utils";
import { Variants, motion, useScroll, useTransform } from "framer-motion";
import container from "postcss/lib/container";
import React from "react";
import { useRef } from "react";

export const ParallaxScrollSection = ({
  idx = 0,
  item,
}: {
  idx?: number;
  item: { image: string; title: string; body: string };
}) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const sectionVariants: Variants = {
    offscreen: {
      opacity: 0,
      y: 100,
    },
    onscreen: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,

        delay: 0.1 * index,
      },
    }),
  };

  return (
    <motion.section
      className="py-24 "
      // initial="offscreen"
      // whileInView="onscreen"
      // variants={sectionVariants}
      // custom={idx}
      // viewport={{ once: true }}
    >
      <motion.div className="grid grid-cols-2 ap-8 lg:gap-[130px]">
        <motion.div
          className={cn(
            idx % 2 ? "order-last" : "",
            "col-span-2 md:col-span-1"
          )}
          ref={container}
        >
          <div className="aspect-video object-cover bg-center object-center shadow-lg">
            <img src={item.image} alt={item.title} className="aspect-video " />
          </div>
        </motion.div>
        <div className="space-y-8 flex flex-col items-start justify-center col-span-2 md:col-span-1">
          <motion.div
            className={cn(idx % 2 ? "text-right" : "", "space-y-4")}
            style={{ y: y }}
          >
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};
