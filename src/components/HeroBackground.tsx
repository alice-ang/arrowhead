import React, { ReactNode } from "react";
import Image from "next/image";
import { Constraints } from "./Constraints";

export const HeroBackground = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen w-full relative">
      <Image
        src="https://www.arrowheadgamestudios.com/wp-content/uploads/2024/02/GEXjumlXUAAtrlM-1536x864.jpg"
        alt="hero"
        fill
        className="bg-cover object-cover bg-center opacity-25"
      />
      <Constraints>{children}</Constraints>
    </div>
  );
};
