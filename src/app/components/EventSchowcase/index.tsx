import { Event } from "./Event";
import { Pillar } from "./Pillar";
import { Heading } from "../Heading";
import { Paragraph } from "../Paragraph";

export function EventsSchowcase() {
  return (
    <section
      id="events"
      className="w-[1200px] max-w-full mx-auto flex justify-between"
    >
      <div className="flex gap-2">
        <Event />
        <Event isYellow />
      </div>

      <div className="flex justify-center items-center gap-6">
        <Heading title={"New on Marvel unlimited"} subtitle={"Available now"} />
        <Paragraph>
          Read these plus 29,000+ digital comics for $9.99 a month!
        </Paragraph>
      </div>

      <div className="mt-auto flex gap-2 w-32 items-end">
        <Pillar color="yellow-500" />
        <Pillar color="yellow-500" isSmall />
      </div>
    </section>
  );
}
