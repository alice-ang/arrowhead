import React, { ReactNode } from "react";
import Image from "next/image";
import { Constraints } from "./Constraints";

export const HeroBackground = ({
  children,
  src,
}: {
  children: ReactNode;
  src: string;
}) => {
  return (
    <div className="h-screen w-full relative">
      <Image
        src={src}
        alt="hero"
        fill
        className="bg-cover object-cover bg-center opacity-25"
      />
      <Constraints>{children}</Constraints>
    </div>
  );
};
