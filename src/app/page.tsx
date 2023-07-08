import { EventsShowcase } from "./components/EventsShowcase";
import { HeroesShowcase } from "./components/HeroesShowcase";
import { SeriesShowcase } from "./components/SeriesShowcase";
import { ComicsShowcase } from "./components/ComicsShowcase";

export default function Home() {
  return (
    <main className="h-full grid gap-32">
      <EventsShowcase />
      <SeriesShowcase />
      <ComicsShowcase />
      <HeroesShowcase />
    </main>
  );
}
