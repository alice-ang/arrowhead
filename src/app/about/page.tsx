import { Constraints, ParallaxScrollSection } from "@/components";
import { about, games } from "@/lib/mock";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Constraints>
        <div className="flex flex-col justify-center items-center h-full relative min-h-screen">
          <div className="relative ">
            <p className="overline-title text-center">Learn more</p>
            <h1 className="hero-title">About us</h1>
          </div>
          <p className=" text-center max-w-xl mx-auto">
            When we first started Arrowhead we had a strong vision of what kind
            of games, mentality and studio we wanted to create
          </p>
        </div>

        {about.map((item, index) => (
          <ParallaxScrollSection item={item} idx={index} />
        ))}
      </Constraints>
    </main>
  );
}
