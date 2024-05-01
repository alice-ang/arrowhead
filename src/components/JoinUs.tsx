import React from "react";
import { Constraints } from "./Constraints";
import { Button } from "./ui";
import Link from "next/link";

export const JoinUs = () => {
  return (
    <div className="w-full bg-palette-backgroundLight">
      <Constraints>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-7 bg-[url('/squad.png')] bg-center object-contain bg-contain bg-no-repeat opacity-75"></div>
          <div className="col-span-5 space-y-8 py-12">
            <div className="space-y-4">
              <h3>Want to join us?</h3>
              <p>
                Come and explore your future career options at Arrowhead. Read
                more about our culture and the way we work.
              </p>
            </div>
            <Button variant="outline">
              <Link href={"/about"}>Learn more</Link>
            </Button>
          </div>
        </div>
      </Constraints>
    </div>
  );
};
