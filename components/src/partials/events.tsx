import { Button } from "../button";
import { Card } from "../card";
import { loadEvents } from "@/lib/mdxParser/mdxParser";

const isPastEvent = (date: Date) => {
  return date.getTime() < Date.now();
};

export function EventsPartial({ showPast = false }: { showPast?: boolean }) {
  let eventsParsed = loadEvents();

  let es = eventsParsed
    .sort((a, b) => (a.metadata.start < b.metadata.start ? 1 : -1))
    .filter(
      (e) =>
        (e.metadata.isPast && showPast) || (!e.metadata.isPast && !showPast),
    );

  return (
    <div className="grid gap-12 py-10 md:mt-16 lg:grid-cols-2 lg:gap-32">
      {!es.length
        ? "No pending events"
        : es.map((e) => (
            <Card
              key={e.metadata.start.toLocaleDateString("en-GB")}
              title={e.title || ""}
              type="event"
              color={"white"}
              subtitle={e.metadata.start.toLocaleDateString("en-GB")}
              slug={e.slug}
            />
          ))}
    </div>
  );
}

export function EventsIndexPartial() {
  let eventsParsed = loadEvents();

  const pastEvents = eventsParsed
    .filter((e) => isPastEvent(e.metadata.start))
    .sort((a, b) => (a.metadata.start < b.metadata.start ? 1 : -1))
    .slice(0, 3);

  const futureEvents = eventsParsed
    .filter((e) => !isPastEvent(e.metadata.start))
    .sort((a, b) => (a.metadata.start < b.metadata.start ? 1 : -1));

  return (
    <div className="flex flex-col gap-24">
      {/* Upcoming Events Section */}
      <section className="mt-10">
        <h2 className="text-gray-600 mb-12 text-2xl font-semibold">
          Upcoming Events
        </h2>
        <div className="grid gap-12  lg:grid-cols-2 lg:gap-32">
          {futureEvents.length === 0 ? (
            <p className="text-gray-600 text-lg">No upcoming events</p>
          ) : (
            futureEvents.map((e) => (
              <Card
                key={e.metadata.start.toLocaleDateString("en-GB")}
                title={e.title || ""}
                type="event"
                color="white"
                subtitle={e.metadata.start.toLocaleDateString("en-GB")}
                slug={e.slug}
              />
            ))
          )}
        </div>
      </section>

      {/* Past Events Section */}
      {pastEvents.length > 0 && (
        <section className="border-gray-100 border-t border-opacity-60 pt-8">
          <h2 className="text-gray-600 mb-12 text-2xl font-semibold">
            Past Events
          </h2>
          <div className="grid gap-12  lg:grid-cols-2 lg:gap-32">
            {pastEvents.map((e) => (
              <div className="opacity-80 hover:opacity-100">
                <Card
                  key={e.metadata.start.toLocaleDateString("en-GB")}
                  title={e.title || ""}
                  type="event"
                  color="slate-300"
                  subtitle={e.metadata.start.toLocaleDateString("en-GB")}
                  slug={e.slug}
                />
              </div>
            ))}
            <div className="flex h-full flex-col  bg-white p-4 shadow-sm">
              <h4 className="mb-2 mt-0 text-xl font-bold md:text-2xl">
                Discover More
              </h4>
              <p className="text-gray-600 mb-8">
                View our complete archive of past and upcoming events
              </p>
              <div className="mt-auto">
                <Button
                  type="primary"
                  label="See all events"
                  target="./events"
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
