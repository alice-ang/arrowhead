"use client";
import { MotionValue, useTransform, useScroll } from "framer-motion";
import React, { useRef } from "react";
import { Constraints } from "./Constraints";
import { cn } from "@/lib/utils";
import { Button } from "./ui";
import Image from "next/image";
import { Game } from "@/lib/mock";
import Link from "next/link";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export const GameItem = ({ id, game }: { id: number; game: Game }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className="py-24">
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
                "aspect-video object-cover bg-center object-center shadow-lg "
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
    </section>
  );
};
