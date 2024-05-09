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

  const rotateMotion = {
    rest: {
      rotate: 0,
      y: -50,
      x: 100,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
      },
    },
    hover: {
      y: -50,
      x: -10,
      opacity: 1,
      rotate: -20,
      transition: {
        type: "spring",
        bounce: 0.2,
      },
    },
  };

  const textMotion = {
    rest: {
      color: "grey",
      y: 120,
      transition: {
        type: "spring",
        bounce: 0.2,
      },
    },
    hover: {
      color: "blue",
      y: 20,
      transition: {
        type: "spring",
        bounce: 0.2,
      },
    },
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
      custom={id}
      viewport={{ once: true }}
    >
      <Constraints>
        <div className="grid grid-cols-2 gap-8 lg:gap-[130px] ">
          <div
            className={cn(
              id % 2 ? "order-last" : "",
              "relative h-full w-full aspect-video col-span-2 md:col-span-1"
            )}
          >
            <motion.div
              className="aspect-video relative "
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <Image
                src={game.image}
                fill
                alt="image"
                className={cn(
                  id % 2 ? "rotate-2" : "-rotate-2",
                  "aspect-video object-cover bg-center object-center shadow-lg relative z-10 hover:rotate-0 transition duration-300 ease-in-out"
                )}
              />
              <motion.img
                src={"/salute.png"}
                alt="logo"
                width={170}
                height={70}
                className="right-0 -top-32 absolute z-0 hidden lg:block"
                variants={textMotion}
              />

              <motion.img
                src={"/robot.png"}
                alt="logo"
                width={170}
                height={70}
                className="-left-24 -bottom-10 absolute z-0 hidden lg:block"
                variants={rotateMotion}
              />
            </motion.div>
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
