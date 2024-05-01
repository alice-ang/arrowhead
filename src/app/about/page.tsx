import {
  Button,
  Constraints,
  HeroBackground,
  JoinUs,
  VideoContainer,
} from "@/components";
import { cn } from "@/lib/utils";
import { games } from "@/lib/mock";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Constraints>
        <div className="flex flex-col justify-center items-center h-full relative min-h-screen">
          <div>
            <p className="overline-title text-center">Learn more</p>
            <h1 className="hero-title">About us</h1>
          </div>
          <p className=" text-center max-w-xl mx-auto">
            When we first started Arrowhead we had a strong vision of what kind
            of games, mentality and studio we wanted to create
          </p>
        </div>
      </Constraints>
    </main>
  );
}
