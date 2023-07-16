import { Event } from "./Event";
import { Pillar } from "./Pillar";
import { Heading } from "../Heading";
import { Paragraph } from "../Paragraph";
import { api } from "@/services/api";
import { Link } from "../Link";

export async function EventsShowcase() {
  const [response1, response2] = await Promise.all([
    api.getComics({
      category: "events",
      search: "age of ultron",
      limit: 1,
    }),
    api.getComics({
      category: "events",
      search: "civil war",
      limit: 1,
    }),
  ]);

  const event1 = response1.data.results[0];
  const event2 = response2.data.results[0];

  return (
    <section
      id="events"
      aria-label="Events"
      className="w-[1200px] max-w-full mx-auto flex flex-col items-center gap-24 lg:gap-0 lg:justify-between lg:flex-row"
    >
      <div className="flex gap-2">
        <Event data={event1} />
        <Event data={event2} isYellow={true} />
      </div>

      <div className="flex justify-center flex-col items-center gap-5">
        <Heading title={"New on Marvel unlimited"} subtitle={"Events"} />
        <Paragraph>
          Read these plus 29,000+ digital comics for $9.99 a month!
        </Paragraph>
        <Link path="/comics?category=events">
          See all comic events
        </Link>
      </div>

      <div className="mt-auto flex gap-2 w-32 self-end items-end lg:self-auto">
        <Pillar color="yellow-500" />
        <Pillar color="yellow-500" isSmall={true} />
      </div>
    </section>
  );
}
