"use client";
import {
  MotionValue,
  useTransform,
  useScroll,
  motion,
  Variants,
} from "framer-motion";
import React, { useRef } from "react";
import { Constraints } from "./Constraints";
import { cn } from "@/lib/utils";
import { Button } from "./ui";
import Image from "next/image";
import { Game } from "@/lib/mock";
import Link from "next/link";

export const GameItem = ({ id, game }: { id: number; game: Game }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

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
    <motion.div
      className="py-24"
      // style={{
      //   scale: scaleProgress,
      //   opacity: opacityProgress,
      // }}
      initial="offscreen"
      whileInView="onscreen"
      variants={sectionVariants}
    >
      <Constraints>
        <div className="grid grid-cols-2 gap-8 lg:gap-[130px] " ref={ref}>
          <div
            className={cn(
              id % 2 ? "order-last" : "",
              "relative h-full w-full aspect-video col-span-2 md:col-span-1"
            )}
          >
            <Image
              src={game.image}
              fill
              alt="image"
              className={cn(
                id % 2 ? "rotate-2" : "-rotate-2",
                "aspect-video object-cover bg-center object-center shadow-lg hover:rotate-0 transition duration-300 ease-in-out"
              )}
            />
          </div>
          <div className="space-y-8 flex flex-col items-start justify-center  col-span-2 md:col-span-1">
            <div className="space-y-4">
              <h3>{game.title}</h3>
              <p>{game.body}</p>
            </div>
            <Button variant="outline">
              <Link href={"/games/1"}>View on steam</Link>
            </Button>
          </div>
        </div>
      </Constraints>
    </motion.div>
  );
};
