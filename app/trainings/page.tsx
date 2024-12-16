import { Section } from "@/components";
import { TrainingsPartial } from "@/components/src/partials/trainings";
import { TrainingCard } from "@/components/src/trainingCard";
import { loadTrainings } from "@/lib/mdxParser/mdxParser";
import { OscTraining } from "@/lib/mdxParser/mdxSchema";

export default function Trainings() {
  let trainings = loadTrainings();
  return (
    <div className="mt-28 prose-h2:mt-0 md:mt-0 md:prose-h2:text-2xl md:prose-h3:text-xl">
      <Section>
        <TrainingsPartial />
      </Section>
      <Section title="Trainings">
        {trainings.map((training: OscTraining, index) => (
          <TrainingCard
            key={index}
            slug={training.slug}
            title={training.title}
            subtitle={training.description}
            author={training.metadata.author}
            image={training.metadata.image}
          />
        ))}
      </Section>
      <Section>
        <div className="prose mx-auto mb-32 flex max-w-screen-xl flex-col items-end px-2 md:px-10 lg:flex-row lg:items-start">
          <div>
            <div>
              Do you have a training that you want featured on this here?
            </div>
            <div>
              Contact us{" "}
              <a href="mailto:christian@opensource.construction">here</a>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
