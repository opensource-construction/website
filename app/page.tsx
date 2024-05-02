import {
  Section,
  Button,
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
      <Section color="primary">
        &nbsp;
        <Button href="https://discord.gg/jgph8WR6" type="primary">
          Talk to us on discord
        </Button>
      </Section>
    </div>
  );
}
