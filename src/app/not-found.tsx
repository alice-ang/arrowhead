import { HeroBackground } from "@/components";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <HeroBackground src="https://cdn.sortiraparis.com/images/80/66131/1025202-helldivers-2-regles-implicites-et-comportement-pendant-les-parties-les-bonnes-pratiques.jpg">
      <div className="flex flex-col justify-center items-center h-full relative">
        <div className="space-y-8 flex flex-col items-center">
          <h4 className="text-2xl text-palette-yellow border border-palette-yellow px-6 py-2 w-fit">
            404: not found
          </h4>
          <h1 className="hero-title">Traitor detected</h1>
          <Link passHref href="/">
            <p className=" text-xl text-center hover:text-palette-yellow">
              Return to combat zone
            </p>
          </Link>
        </div>
      </div>
    </HeroBackground>
  );
}
