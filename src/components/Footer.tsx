import React from "react";
import { Constraints } from "./Constraints";
import Image from "next/image";

export const Footer = () => {
  return (
    <>
      <div className=" w-full bg-[url('/footer.png')] h-16 -top-0  bg-no-repeat object-cover bg-center bg-cover z-10" />

      <footer className="relative">
        <div className="bg-palette-backgroundDark p-4">
          <Constraints>
            <div className="space-y-8">
              <Image
                src={"/logo-full.png"}
                alt="logo-full"
                width={290}
                height={60}
              />

              <div className="space-x-16 flex flex-row items-start">
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
                    <div className="">
                      <div className="w-full relative flex flex-nowrap ">
                        <input
                          className="bg-neutral-200 py-3 px-6 w-full"
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
                    {[0, 1, 2, 3, 4].map(() => (
                      <p className="underline">Support</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Constraints>
        </div>
      </footer>
    </>
  );
};
