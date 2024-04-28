import { Constraints } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Constraints>
        <h1 className="hero-title">
          <q>
            A game for everyone <br />
            is a game for no one
          </q>
        </h1>
      </Constraints>
    </main>
  );
}
