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
      <Section title="Trainings" className="mb-32">
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
    </div>
  );
}
