import { Poppins, Staatliches } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "400", "600"],
  variable: "--font-poppins",
});

export const staatliches = Staatliches({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-staatliches",
});
