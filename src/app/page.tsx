import { MarvelInsiderShowcase } from "./components/MarvelInsiderShowcase";
import { HeroesShowcase } from "./components/HeroesShowcase";
import { EventsShowcase } from "./components/EventsShowcase";
import { SeriesShowcase } from "./components/SeriesShowcase";
import { ComicsShowcase } from "./components/ComicsShowcase";
import { CreatorsShowcase } from "./components/CreatorsShowcase";

export default function Home() {
  return (
    <main>
      <MarvelInsiderShowcase />
      <EventsShowcase />
      <HeroesShowcase />
      <SeriesShowcase />
      <ComicsShowcase />
      <CreatorsShowcase />
    </main>
  );
}
