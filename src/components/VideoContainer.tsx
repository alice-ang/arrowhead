"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export const VideoContainer = () => {
  return (
    <div className="bg-palette-backgroundLight w-full aspect-video h-full max-w-screen-2xl relative -traslate-y-24">
      <Image
        src={"/diver.png"}
        alt="logo"
        width={220}
        height={360}
        className="-left-32 -bottom-10 absolute"
      />
      <Image
        src={"/bug.png"}
        alt="logo"
        width={270}
        height={170}
        className="-right-32 -bottom-10 absolute"
      />
    </div>
  );
};
