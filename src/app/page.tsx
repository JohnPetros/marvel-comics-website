import { MarvelInserShowcase } from "./components/MarvelInserShowcase";
import { HeroesShowcase } from "./components/HeroesShowcase";
import { EventsShowcase } from "./components/EventsShowcase";
import { SeriesShowcase } from "./components/SeriesShowcase";
import { ComicsShowcase } from "./components/ComicsShowcase";
import { CreatorsShowcase } from "./components/CreatorsShowcase";

export default function Home() {
  return (
    <main className="">
      <MarvelInserShowcase />
      <EventsShowcase />
      <HeroesShowcase />
      <SeriesShowcase />
      <ComicsShowcase />
      <CreatorsShowcase />
    </main>
  );
}
