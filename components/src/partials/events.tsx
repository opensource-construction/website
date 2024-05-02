import { getPosts } from "../utils";
import { Card } from "../card";
import { Section } from "../section";

export function EventsPartial() {
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
    .sort((a, b) => (a.start < b.start ? 1 : -1));

  let futureEvents = parsedEvents.filter((e) => !e.isPast);
  let pastEvents = parsedEvents.filter((e) => e.isPast);

  return (
    <div>
      <Section color="primary">
        <h3 className="pt-10">Events</h3>
        <div className="w-full md:w-7/12">
          <p className="py-10">
            Talk. Share. Do.
            <br />
            Knowing what works and exchanging ideas with others is often the
            starting point for exciting projects. Therefore,
            opensource.construction organises its own events to facilitate this
            exchange – find them here + further events that we attend as well.
          </p>
        </div>
        <div className="py-10">
          {!futureEvents.length
            ? "No pending events"
            : futureEvents.map((e) => (
                <Card
                  key={e.start}
                  title={e.title}
                  subtitle={e.start}
                  slug={e.slug}
                />
              ))}
        </div>
      </Section>
      <Section color="gray-500">
        <h3 className="pt-12">Past Events</h3>
        <div className="py-12">
          {!pastEvents.length
            ? "No past events"
            : pastEvents.map((e) => (
                <Card
                  key={e.start}
                  title={e.title}
                  subtitle={e.start}
                  slug={e.slug}
                />
              ))}
        </div>
      </Section>
    </div>
  );
}
