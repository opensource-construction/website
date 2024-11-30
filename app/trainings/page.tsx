import { getPosts, Section } from "@/components";
import { TrainingsPartial } from "@/components/src/partials/trainings";
import { TrainingCard } from "@/components/src/trainingCard";

export default function Trainings() {
  let trainings = getPosts("trainings");
  return (
    <div className="mt-28 prose-h2:mt-0 md:mt-0 md:prose-h2:text-2xl md:prose-h3:text-xl">
      <Section>
        <TrainingsPartial />
      </Section>
      <Section title="Trainings">
        {trainings.map(
          (
            { slug, metadata: { title, description, author, image } },
            index,
          ) => (
            <TrainingCard
              key={index}
              slug={slug}
              title={title}
              subtitle={description}
              author={author}
              image={image}
            />
          ),
        )}
      </Section>
      <Section>
        <div className="prose mx-auto mb-32 flex max-w-(--breakpoint-xl) flex-col items-end px-2 md:px-10 lg:flex-row lg:items-start">
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
