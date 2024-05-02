import Button from "./button";

export function Card({
  title,
  slug,
  type = "event",
  subtitle,
}: {
  title: string;
  slug: string;
  type?: "event" | "project";
  subtitle?: string;
}) {
  return (
    <div className={type === "event" ? "bg-white" : "bg-osc-gray-500"}>
      <div className="mb-32 p-5">
        <h4 className="mb-2 mt-0 text-xl">{title}</h4>
        <div className="mb-12">{subtitle}</div>
        {type === "event" ? (
          <Button
            label="More about the event"
            href={`/events/${slug}`}
            type="primary"
          />
        ) : (
          <Button
            label="More about the project"
            href={`/projects/${slug}`}
            type="secondary"
          />
        )}
      </div>
    </div>
  );
}
