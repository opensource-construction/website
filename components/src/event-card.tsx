import Button from "./button";

export function EventCard({
  title,
  date,
  slug,
}: {
  title: string;
  date: Date;
  slug: string;
}) {
  return (
    <div className="bg-white p-4">
      <h4 className="mb-2 text-xl">{title}</h4>
      <div className="mb-12">
        {Intl.DateTimeFormat("en-UK", {
          dateStyle: "short",
          timeZone: "Europe/Zurich",
        }).format(date)}
      </div>
      <Button
        label="More about the event"
        href={`/events/${slug}`}
        type="primary"
      />
    </div>
  );
}
