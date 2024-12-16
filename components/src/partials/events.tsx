import { Card } from "../card";
import { loadEvents } from "@/lib/mdxParser/mdxParser";

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
