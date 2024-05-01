import React, { ReactNode } from "react";

export const Constraints = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-auto max-w-screen-xl h-full p-4  w-full">{children}</div>
  );
};
