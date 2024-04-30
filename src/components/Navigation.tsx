import React from "react";
import Image from "next/image";
import { Constraints } from "./Constraints";
import Link from "next/link";
import { MdOutlineMenu } from "react-icons/md";
import { Button } from "./ui/Button";
import { navLinks } from "@/lib/mock";

export const Navigation = () => {
  return (
    <nav className=" top-0 fixed w-full  p-4 z-10 backdrop-blur-sm ">
      <Constraints>
        <div className="flex flex-row items-center justify-between ">
          <Link href={"/"} passHref>
            <Image src={"/logo.png"} alt="logo" width={66} height={48} />
          </Link>
          <MdOutlineMenu className="md:hidden" size={42} />
          <div className="space-x-8 hidden md:flex items-center ">
            {navLinks.map((link) => (
              <Link
                href={`/${link}`}
                passHref
                className="text-xl lowercase active:text-palette-yellow"
              >
                {link}
              </Link>
            ))}

            <Button className="rotate-6 hover:rotate-0 transition duration-300 ease-in-out">
              Join us
            </Button>
          </div>
        </div>
      </Constraints>
    </nav>
  );
};
