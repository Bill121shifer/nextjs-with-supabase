import { Suspense } from "react";
import {
  LandingActions,
  SignedOutActions,
} from "@/components/landing-actions";

// Desktop version of the Figma welcome screen ("iPhone 17 - 1" in Clubcom--):
// solid blue page, open space up top, and the two gray action blocks
// stacked near the bottom. On wide screens the blocks sit in a centered
// column instead of stretching edge to edge.
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-clubcom-blue text-black">
      {/* The Figma screen leaves this top area empty (logo/art to come),
          so it only holds the ClubCom name for now. */}
      <section className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-8 pt-16">
        <h1 className="text-6xl font-bold tracking-tight lg:text-7xl">
          ClubCom
        </h1>
      </section>

      <section className="mx-auto flex w-full max-w-[480px] flex-col gap-[74px] px-8 pb-16 pt-12">
        <Suspense fallback={<SignedOutActions />}>
          <LandingActions />
        </Suspense>
      </section>
    </main>
  );
}
