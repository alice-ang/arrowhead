"use client";
import React, { useRef } from "react";
import { Constraints } from "./Constraints";
import Image from "next/image";
import { Socials } from "./Socials";
import { Button } from "./ui";
import { footerLinks } from "@/lib/mock";
import { motion, useScroll, useTransform } from "framer-motion";

export const Footer = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const saluteY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div className="relative ">
      <Constraints>
        <div
          className="grid grid-cols-12 items-center relative py-56"
          ref={ref}
        >
          <div className="col-span-12 md:col-span-6 ">
            <button className="text-2xl text-palette-yellow border border-palette-yellow px-6 py-2 -rotate-12 mb-4">
              Community
            </button>
            <h1 className="title">
              Join <br />
              the <br />
              fight
            </h1>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="space-y-8 items-start justify-start flex flex-col ">
              <div className="space-y-4">
                <h4>Official forums</h4>
                <p>
                  Want to explore more HELLDIVERS 2? Looking to forge
                  friendships? Want your voice to be heard? <br />
                  Join our server for all the latest news, info & updates about
                  the studio and our game. Don’t hesitate, enlist today!
                </p>
              </div>
              <Button>Go to discord</Button>

              <Socials />
            </div>
          </div>
          <motion.img
            style={{
              y: saluteY,
              backgroundPosition: "bottom",
              backgroundSize: "cover",
              scale: 1.3,
            }}
            src={"/salute.png"}
            width={340}
            height={390}
            alt="Salute helldiver"
            className="object-contain bg-center object-center -bottom-16 absolute -left-32 rotate-6 hidden md:block"
          />
        </div>
      </Constraints>

      <footer className="relative">
        <div className=" w-full bg-[url('/footer.png')] h-16 -top-16  bg-no-repeat object-cover bg-center bg-cover absolute z-100" />

        <div className="bg-palette-backgroundDark p-4 ">
          <Constraints>
            <div className="space-y-16">
              <Image
                src={"/logo-full.png"}
                alt="logo-full"
                width={290}
                height={60}
              />

              <div className="space-x-16 flex flex-row items-start flex-wrap">
                <div className="flex-1 space-x-16 flex flex-row ">
                  <div className="space-y-4 ">
                    <h6 className="overline-title">Follow us</h6>
                    <div>
                      {[0, 1, 2].map(() => (
                        <p>Twitter</p>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4 ">
                    <h6 className="overline-title"> Office location</h6>
                    <p>
                      Hammarby Kaj 10d,
                      <br />
                      Stockholm 120 32, Sweden
                    </p>
                  </div>
                </div>
                <div className="space-y-4 ">
                  <h6 className="overline-title"> Newsletter</h6>
                  <form>
                    <div className="flex-1">
                      <div className="w-full relative flex flex-nowrap ">
                        <input
                          className="bg-neutral-200 py-3 px-6 flex-1"
                          placeholder="eg. yourname@example.com"
                        />
                        <div className="absolute  right-0 ">
                          <button
                            type="submit"
                            className="bg-neutral-300 py-3 px-6 "
                          >
                            Sign up
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="flex space-x-8 items-center">
                    {footerLinks.map((link) => (
                      <p className="underline">{link}</p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center">
                <p className="text-palette-darkGrey text-sm">
                  © 2024 Arrowhead Game Studios | All Rights Reserved.
                </p>
                <p className="text-palette-darkGrey text-sm">
                  Site developed by Alice A
                </p>
              </div>
            </div>
          </Constraints>
        </div>
      </footer>
      {/* <Image
        src={"/scout.png"}
        width={940}
        height={940}
        alt="Scout strider"
        className="object-contain bg-center object-center bottom-24 absolute right-24 opacity-10"
      /> */}
    </div>
  );
};
