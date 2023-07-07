import { EventsSchowcase } from "./components/EventSchowcase";
import { HeroesShowcase } from "./components/HeroesShowcase";

export default function Home() {
  return (
    <main className="h-full">
      <EventsSchowcase />
      <HeroesShowcase />
    </main>
  );
}
