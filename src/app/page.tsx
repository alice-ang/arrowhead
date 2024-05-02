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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroBackground src="https://www.arrowheadgamestudios.com/wp-content/uploads/2024/02/GEXjumlXUAAtrlM-1536x864.jpg">
        <div className="flex flex-col justify-center items-center h-full relative">
          <div>
            <h1 className="hero-title">
              <q>
                A game for everyone <br />
                is a game for no one
              </q>
            </h1>
          </div>
        </div>
      </HeroBackground>
      <h2 className="text-6xl pb-6">
        helldivers 2 is out <span className="text-palette-yellow">now</span>
      </h2>
      <VideoContainer />
      <section className="space-y-10 py-24">
        <div>
          <p className="overline-title">Take a look at</p>
          <h3>Our games</h3>
        </div>
        <div className="flex flex-row items-center space-x-14 ">
          {games.map((game, index) => (
            <div className="space-y-4">
              <h4 className="text-palette-yellow">{game.title}</h4>
              <Image
                src={game.image}
                width={690}
                height={360}
                alt="image"
                className={cn(
                  // index % 2 ? "hover:rotate-2" : "hover:-rotate-2",
                  "aspect-video object-cover bg-center object-center shadow-lg transition duration-300 ease-in-out"
                )}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="py-24">
        <Constraints>
          <div className="grid grid-cols-2 gap-8 lg:gap-[130px] ">
            <div className="space-y-8 flex flex-col items-start justify-center col-span-2 md:col-span-1">
              <div className="space-y-4">
                <h3>We're no ordinary game studio.</h3>
                <p>
                  We’re dedicated to creating intensely thrilling and hilarious
                  game experiences. Through games as a medium, we are on a
                  mission to cure loneliness and build bridges, one
                  friendly-fire co-op session at a time. We are a value driven
                  company that strives to become the best co-op studio in the
                  world.
                </p>
              </div>
              <Button>Learn more</Button>
            </div>
            <div
              className={cn(
                "relative h-full w-full aspect-video col-span-2 md:col-span-1"
              )}
            >
              <Image
                src="https://www.arrowheadgamestudios.com/wp-content/uploads/2024/03/arrowhead-office-05.jpg"
                fill
                alt="image"
                className={cn(
                  "aspect-video object-cover bg-center object-center shadow-lg "
                )}
              />
            </div>
          </div>
        </Constraints>
      </section>
      <JoinUs />
    </main>
  );
}
