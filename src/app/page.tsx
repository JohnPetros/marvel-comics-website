import { EventsShowcase } from "./components/EventsShowcase";
import { HeroesShowcase } from "./components/HeroesShowcase";
import { SeriesShowcase } from "./components/SeriesShowcase";
import { ComicsShowcase } from "./components/ComicsShowcase";

export default function Home() {
  return (
    <main className="">
      <HeroesShowcase />
      <EventsShowcase />
      <SeriesShowcase />
      <ComicsShowcase />
    </main>
  );
}
