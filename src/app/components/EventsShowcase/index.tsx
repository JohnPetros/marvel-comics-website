import { Event } from "./Event";
import { Pillar } from "./Pillar";
import { Heading } from "../Heading";
import { Paragraph } from "../Paragraph";

async function getEvents() {
  const response = await fetch(
    `${process.env.BASE_URL}/events?orderBy=-modified&limit=2&ts=${process.env.TIMESTAMP}&apikey=${process.env.PUBLIC_KEY}&hash=${process.env.HASH}`
  );

  const events = response.json();
  return events;
}

export async function EventsShowcase() {
  const events = await getEvents();

  return (
    <section
      id="events"
      aria-label="Events"
      className="w-[1200px] max-w-full mx-auto flex flex-col items-center gap-24 lg:gap-0 lg:justify-between lg:flex-row"
    >
      <div className="flex gap-2">
        <Event data={events.data.results[1]} />
        <Event data={events.data.results[0]} isYellow={true} />
      </div>

      <div className="flex justify-center flex-col items-center gap-5">
        <Heading title={"New on Marvel unlimited"} subtitle={"Events"} />
        <Paragraph>
          Read these plus 29,000+ digital comics for $9.99 a month!
        </Paragraph>
      </div>

      <div className="mt-auto flex gap-2 w-32 self-end items-end lg:self-auto">
        <Pillar color="yellow-500" />
        <Pillar color="yellow-500" isSmall={true} />
      </div>
    </section>
  );
}
