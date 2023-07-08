import { EventsShowcase } from "./components/EventsShowcase";
import { HeroesShowcase } from "./components/HeroesShowcase";
import { SeriesShowcase } from "./components/SeriesShowcase";
import { ComicsShowcase } from "./components/ComicsShowcase";
import { CreatorsShowcase } from "./components/CreatorsShowcase";

export default function Home() {
  return (
    <main className="">
      <HeroesShowcase />
      <EventsShowcase />
      <SeriesShowcase />
      <ComicsShowcase />
      <CreatorsShowcase />
    </main>
  );
}
