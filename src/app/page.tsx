import { EventsShowcase } from "./components/EventsShowcase";
import { SeriesShowcase } from "./components/SeriesShowcase";
import { HeroesShowcase } from "./components/HeroesShowcase";

export default function Home() {
  return (
    <main className="h-full grid gap-32">
      <EventsShowcase />
      <SeriesShowcase />
      <HeroesShowcase />
    </main>
  );
}
