import { getPosts, HeroPartial, Section } from "@/components";
import { TrainingsPartial } from "@/components/src/partials/trainings";
import { TrainingCard } from "@/components/src/trainingCard";

// export async function generateStaticParams() {
//   let posts: SinglePageType[] = [];
//   posts = [
//     ...posts,
//     ...getPosts("projects").map((p) => {
//       return { slug: p.slug, pageType: "projects" as PageType };
//     }),
//     ...getPosts("events").map((p) => {
//       return { slug: p.slug, pageType: "events" as PageType };
//     }),
//     ...getPosts("trainings").map((p) => {
//       return { slug: p.slug, pageType: "trainings" as PageType };
//     })
//   ];
//   return posts;
// }

export default function Trainings() {
  let trainings = getPosts("trainings");
  return (
    <div className="prose-h2:mt-0 md:prose-h2:text-2xl md:prose-h3:text-xl">
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
    </div>
  );
}
