import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navigation } from "@/components";
import { staatliches, poppins } from "./fonts";

export const metadata: Metadata = {
  title: "Arrowhead Game Studios",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${staatliches.variable} relative`}>
        <Navigation />
        {children}

        <Footer />
        <button className="hidden md:block text-2xl text-palette-yellow border border-palette-yellow px-6 py-2 fixed -left-14 bottom-20 -rotate-90">
          Contact us
        </button>
      </body>
    </html>
  );
}
