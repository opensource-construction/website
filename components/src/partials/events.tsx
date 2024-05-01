import { getPosts } from "../utils";
import { EventCard } from "../event-card";
import { Section } from "../section";

export function EventsPartial() {
  let events = getPosts("events");

  let parsedEvents = events.map((e) => {
    let event = e.metadata.event;

    event.title = e.metadata.title;
    event.slug = e.slug;
    event.start = new Date(event.start);
    event.isPast = event.start < Date.now();

    return event;
  });

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
                <EventCard
                  key={e.start}
                  title={e.title}
                  slug={e.slug}
                  date={new Date(e.start)}
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
                <EventCard
                  key={e.start}
                  title={e.title}
                  slug={e.slug}
                  date={new Date(e.start)}
                />
              ))}
        </div>
      </Section>
    </div>
  );
}
