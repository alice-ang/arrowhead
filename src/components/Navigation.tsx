import React from "react";
import Image from "next/image";
import { Constraints } from "./Constraints";
import Link from "next/link";

export const Navigation = () => {
  return (
    <nav className=" top-0 sticky py-6 px-4 z-10 backdrop-blur-sm ">
      <Constraints>
        <div className="flex flex-row items-center justify-between ">
          <Image src={"/logo.png"} alt="logo" width={66} height={48} />
          <div className="space-x-8 flex items-center">
            {[0, 1, 2].map(() => (
              <Link href={"/games"} passHref className="text-xl lowercase">
                games
              </Link>
            ))}

            <button className="text-2xl bg-palette-yellow px-6 py-2 text-palette-background rotate-6 hover:rotate-0 transition duration-300 ease-in-out">
              Join us
            </button>
          </div>
        </div>
      </Constraints>
    </nav>
  );
};
