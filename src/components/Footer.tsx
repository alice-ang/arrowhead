import React from "react";
import { Constraints } from "./Constraints";
import Image from "next/image";

export const Footer = () => {
  return (
    <div>
      <Constraints>
        <div className="grid grid-cols-12 items-center py-24">
          <div className="col-span-6 relative">
            <button className="text-2xl text-palette-yellow border border-palette-yellow px-6 py-2 -rotate-12 mb-4">
              Community
            </button>
            <h1 className="title">
              Join <br />
              the <br />
              fight
            </h1>
          </div>
          <div className=" col-span-12 md:col-span-6">
            <div className="col-span-12 md:space-y-8">
              <div className="space-y-4">
                <h3>Official forums</h3>
                <p>
                  Want to explore more HELLDIVERS 2? Looking to forge
                  friendships? Want your voice to be heard? <br />
                  Join our server for all the latest news, info & updates about
                  the studio and our game. Don’t hesitate, enlist today!
                </p>
              </div>
              <button className="text-2xl bg-palette-yellow px-6 py-2 text-palette-background ">
                Go to Discord
              </button>
            </div>
          </div>
        </div>
      </Constraints>

      {/* <Image
        src={"/salute.png"}
        width={390}
        height={440}
        alt="Salute helldiver"
        className={"object-cover bg-center object-center shadow-lg  bottom-0 "}
      /> */}
      <div className=" w-full bg-[url('/footer.png')] h-16 -top-0  bg-no-repeat object-cover bg-center bg-cover " />

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
    </div>
  );
};
