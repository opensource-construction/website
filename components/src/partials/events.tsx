import { getPosts } from "../utils";
import { Card } from "../card";

export function EventsPartial({ showPast = false }: { showPast?: boolean }) {
  let events = getPosts("events");

  let parsedEvents = events
    .map((e) => {
      let event = e.metadata.event;
      let eventStart = new Date(event.start);

      event.title = e.metadata.title;
      event.slug = e.slug;

      event.start = Intl.DateTimeFormat("en-UK", {
        dateStyle: "short",
        timeZone: "Europe/Zurich",
      }).format(new Date(eventStart));
      event.isPast = eventStart.getTime() < Date.now();

      return event;
    })
    .sort((a, b) => (a.start < b.start ? 1 : -1))
    .filter((e) => showPast && e.isPast);

  return (
    <div className="py-10">
      {!parsedEvents.length
        ? "No pending events"
        : parsedEvents.map((e) => (
            <Card
              key={e.start}
              title={e.title}
              color={"white"}
              subtitle={e.start}
              slug={e.slug}
            />
          ))}
    </div>
  );
}
