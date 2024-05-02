import { Button, Constraints, GameItem, ScrollingText } from "@/components";

import { games } from "@/lib/mock";

export default function Games() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 ">
      <Constraints>
        <p className="overline-title text-center">Take a look at</p>
        <h1 className="hero-title">our games</h1>
      </Constraints>
      {games.map((game, index) => (
        <GameItem game={game} id={index} />
      ))}
      <ScrollingText invert>
        · Playfullness · Believability · Sociality
      </ScrollingText>
    </main>
  );
}
