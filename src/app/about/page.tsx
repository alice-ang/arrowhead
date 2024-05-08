"use client";
import { Constraints } from "@/components";
import { cn } from "@/lib/utils";
import { images } from "@/lib/mock";

import { Variants, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });
  const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const md = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

  const transform = [0, sm, md, lg];

  const sectionVariants: Variants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: (index: number) => ({
      left: index % 2 ? (index + 1) * 80 : "",

      // top: 180 + 100 * index,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 2,
        delay: 0.1 * index,
      },
    }),
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Constraints>
        <div
          className="flex flex-col justify-center items-center h-full relative min-h-screen"
          ref={container}
        >
          {[images[0], images[0], images[1], images[1]].map((image, index) => {
            return (
              <motion.div ref={ref} key={`l_${index}`}>
                <motion.img
                  src={image}
                  width={340}
                  height={390}
                  alt="image"
                  style={{ y: transform[index] }}
                  className={cn(
                    index % 2 ? "left-0" : "right-0",
                    index == 1 ? "z-10" : "",

                    "aspect-square object-cover bg-center object-center shadow-lg absolute "
                  )}
                  variants={sectionVariants}
                  whileInView="onscreen"
                  initial="offscreen"
                  viewport={{ once: true, amount: 0.8 }}
                  custom={index}
                />
              </motion.div>
            );
          })}
          <div className="relative ">
            <p className="overline-title text-center">Learn more</p>
            <h1 className="hero-title">About us</h1>
          </div>
          <p className=" text-center max-w-xl mx-auto">
            When we first started Arrowhead we had a strong vision of what kind
            of games, mentality and studio we wanted to create
          </p>
        </div>
      </Constraints>
    </main>
  );
}
