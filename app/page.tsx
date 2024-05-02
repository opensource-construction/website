import {
  Section,
  EventsPartial,
  HeroPartial,
  ProjectsPartial,
} from "@opensource-construction/components";

export default function Home() {
  return (
    <div className="prose-h2:mt-0 md:prose-h2:text-2xl md:prose-h3:text-xl">
      <Section>
        <HeroPartial />
      </Section>
      <Section>
        <ProjectsPartial />
      </Section>
      <EventsPartial />
      <section className="bg-osc-primary"></section>
    </div>
  );
}
