import { getPosts } from "../mdxParser/mdxParsers";
import { Card } from "../card";

export function EventsPartial({ showPast = false }: { showPast?: boolean }) {
  let events = getPosts("events");

  let parsedEvents = events
    .map((e) => {
      let event = e.metadata.event;
      let eventStart = new Date(event.start);

      event.title = e.metadata.title;
      event.slug = e.slug;

      event.startDate = eventStart;
      event.start = Intl.DateTimeFormat("en-UK", {
        dateStyle: "short",
        timeZone: "Europe/Zurich",
      }).format(new Date(eventStart));
      event.isPast = eventStart.getTime() < Date.now();

      return event;
    })
    .sort((a, b) => (a.startDate < b.startDate ? 1 : -1))
    .filter((e) => (e.isPast && showPast) || (!e.isPast && !showPast));

  return (
    <div className="grid gap-12 py-10 md:mt-16 lg:grid-cols-2 lg:gap-32">
      {!parsedEvents.length
        ? "No pending events"
        : parsedEvents.map((e) => (
            <Card
              key={e.start}
              title={e.title}
              type="event"
              color={"white"}
              subtitle={e.start}
              slug={e.slug}
            />
          ))}
    </div>
  );
}
