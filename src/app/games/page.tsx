import { Constraints } from "@/components";
import { cn } from "@/lib/utils";
import { games } from "@/utils/mock";
import Image from "next/image";

export default function Games() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Constraints>
        <p className="overline-title text-center">Take a look at</p>
        <h1 className="hero-title">our games</h1>
      </Constraints>
      {games.map((game, index) => (
        <section className="py-24">
          <Constraints>
            <div className="grid grid-cols-2 gap-[130px] ">
              <div
                className={cn(
                  index % 2 ? "order-last" : "",
                  "relative h-full w-full aspect-video"
                )}
              >
                <Image
                  src={game.image}
                  fill
                  alt="image"
                  className={cn(
                    index % 2 ? "rotate-2" : "-rotate-2",
                    "aspect-video object-cover bg-center object-center shadow-lg"
                  )}
                />
              </div>
              <div className="space-y-6 flex flex-col items-start justify-center">
                <div className="space-y-4">
                  <h3>{game.title}</h3>
                  <p>{game.body}</p>
                </div>

                <button className="text-2xl text-palette-yellow border border-palette-yellow px-6 py-2">
                  View on steam
                </button>
              </div>
            </div>
          </Constraints>
        </section>
      ))}
    </main>
  );
}
