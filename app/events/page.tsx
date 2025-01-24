import { Button, EventsPartial, Section } from "@/components";
import { loadEvents } from "@/lib/mdxParser/mdxParser";

export default function Events({}: {}) {
  const events = loadEvents();

  return (
    <div className="mt-28 prose-h2:mt-0 md:mt-0 md:prose-h2:text-2xl md:prose-h3:text-xl">
      <Section>
        <h1 className="py-6 text-xl font-bold md:text-4xl">Events</h1>
        <p>
          Join us for various events focused on open source in the AECO
          industry. From community calls to workshops and conferences, we bring
          together practitioners and enthusiasts to share knowledge and drive
          innovation.
        </p>
        <div className="pt-4">
          <Button
            target="/#contact-us"
            label="Want to organize an event?"
            type="primary"
          />
        </div>
      </Section>

      <Section color="primary-500">
        <EventsPartial showPast={false} />
      </Section>
      <Section color="slate-300">
        <EventsPartial showPast={true} />
      </Section>
    </div>
  );
}
