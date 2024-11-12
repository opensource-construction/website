import { getPosts, Section } from "@/components";
import { parseProjects, Project } from "@/components/src/projectUtils";
import { Card } from "@/components/src/card";

export default function Projects() {
  let projects = getPosts("projects");
  let parsedProjects = parseProjects(projects);

  const projectsByMaturity = parsedProjects.reduce<Record<string, Project[]>>(
    (acc, project) => {
      if (!acc[project.maturity]) {
        acc[project.maturity] = [];
      }
      acc[project.maturity].push(project);
      return acc;
    },
    {},
  );

  return (
    <div className="mt-28 prose-h2:mt-0 md:mt-0 md:prose-h2:text-2xl md:prose-h3:text-xl">
      <Section>
        {Object.entries(projectsByMaturity).map(
          ([projectMaturity, projects]) => (
            <div key={projectMaturity} className="mb-16">
              <h2 className="py-6 text-xl font-bold md:text-3xl">
                {projectMaturity}
              </h2>
              <div className="grid gap-12 py-10 md:mt-16 lg:grid-cols-2 lg:gap-32">
                {projects.map(({ slug, title, description }, index) => (
                  <Card
                    key={index}
                    slug={slug}
                    title={title}
                    subtitle={description}
                    color="slate-300"
                    type="project"
                  />
                ))}
              </div>
            </div>
          ),
        )}
      </Section>
    </div>
  );
}
