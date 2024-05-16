import {
  Button,
  Constraints,
  HeroBackground,
  VideoContainer,
} from "@/components";
import { gameMeta, images } from "@/lib/mock";
import Image from "next/image";

export default function Game() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroBackground src="https://www.arrowheadgamestudios.com/wp-content/uploads/2024/02/GEXjumlXUAAtrlM-1536x864.jpg">
        <div className="flex flex-col justify-center items-center h-full relative">
          <div>
            <h1 className="hero-title text-center">Helldivers 2</h1>
            <p className=" text-center max-w-xl mx-auto">
              The Galaxy’s Last Line of Offence. Enlist in the Helldivers and
              join the fight for freedom across a hostile galaxy in a fast,
              frantic, and ferocious third-person shooter.
            </p>
          </div>
        </div>
      </HeroBackground>

      <VideoContainer />

      <Constraints>
        <div className="grid grid-cols-12 py-16 ">
          {gameMeta.map((meta) => (
            <div className="col-span-3">
              <p className="overline-title">{meta.title}</p>
              {meta.content.map((item) => (
                <p className="text-white">{item}</p>
              ))}
            </div>
          ))}
          <div className="col-span-3">
            <Button size="full">View on Steam</Button>
          </div>
        </div>
      </Constraints>
      <section className="py-16">
        <Constraints>
          <div className="grid grid-cols-8 gap-8 lg:gap-[130px] ">
            <div className="relative aspect-[9/16] col-span-8 md:col-span-3">
              <Image
                src="https://image.api.playstation.com/vulcan/ap/rnd/202309/0718/60ebb0f1f65149baa3c3ea07b08f8595c17e7759fea79e1c.jpg"
                fill
                alt="image"
                className={
                  "aspect-[9/16] bg-contain bg-center object-center object-contain"
                }
              />
            </div>
            <div className="space-y-8 flex flex-col items-start justify-center  col-span-8 md:col-span-5">
              <div className="space-y-4">
                <h3>Spread managed democracy</h3>
                <p>
                  The Galaxy’s Last Line of Offence. Enlist in the Helldivers
                  and join the fight for freedom across a hostile galaxy in a
                  fast, frantic, and ferocious third-person shooter. Join forces
                  with up to three friends and wreak havoc on an alien scourge
                  threatening the safety of your home planet, Super Earth, in
                  this multiplayer co-op shooter for PS5 and PC. <br />
                  Step into the boots of the Helldivers, an elite class of
                  soldiers whose mission is to spread peace, liberty and Managed
                  Democracy using the biggest, baddest and most explosive tools
                  in the galaxy. <br />
                  Helldivers don’t go planet side without proper backup, but
                  it’s up to you to decide how and when to call it in. Not only
                  do you have a host of superpowered primary weapons and
                  customizable loadouts, you also have the ability to call on
                  stratagems during play.
                </p>
              </div>
            </div>
          </div>
        </Constraints>
      </section>
    </main>
  );
}
