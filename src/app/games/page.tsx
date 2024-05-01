import { Button, Constraints, ScrollingText } from "@/components";
import { cn } from "@/lib/utils";
import { games } from "@/lib/mock";
import Image from "next/image";
import Link from "next/link";

export default function Games() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 lg:p-24">
      <Constraints>
        <p className="overline-title text-center">Take a look at</p>
        <h1 className="hero-title">our games</h1>
      </Constraints>
      {games.map((game, index) => (
        <section className="py-24">
          <Constraints>
            <div className="grid grid-cols-2 gap-8 lg:gap-[130px] ">
              <div
                className={cn(
                  index % 2 ? "order-last" : "",
                  "relative h-full w-full aspect-video col-span-2 md:col-span-1"
                )}
              >
                <Image
                  src={game.image}
                  fill
                  alt="image"
                  className={cn(
                    index % 2 ? "rotate-2" : "-rotate-2",
                    "aspect-video object-cover bg-center object-center shadow-lg "
                  )}
                />
              </div>
              <div className="space-y-8 flex flex-col items-start justify-center  col-span-2 md:col-span-1">
                <div className="space-y-4">
                  <h3>{game.title}</h3>
                  <p>{game.body}</p>
                </div>
                <Button variant="outline">
                  <Link href={"/games/1"}>View on steam</Link>
                </Button>
              </div>
            </div>
          </Constraints>
        </section>
      ))}
      <ScrollingText>A game for everyone is a game for no one</ScrollingText>
    </main>
  );
}
