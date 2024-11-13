import { getPosts, Section } from "@/components";
import {
  Maturity,
  parseProjects,
  Project,
} from "@/components/src/projectUtils";
import { Card } from "@/components/src/card";

export default function Projects() {
  let projects = getPosts("projects");
  let parsedProjects = parseProjects(projects);

  const projectsByMaturity = parsedProjects.reduce<Record<Maturity, Project[]>>(
    (acc, project) => {
      if (!acc[project.maturity]) {
        acc[project.maturity] = [];
      }
      acc[project.maturity].push(project);
      return acc;
    },
    {} as Record<Maturity, Project[]>,
  );

  const maturitySubtext: Record<Maturity, string> = {
    Sandbox: "Experimental projects not yet widely tested in production",
    Incubation:
      "Projects used successfully in production by a small number of users",
    Graduated:
      "Projects considered stable, widely adopted and production ready, attracting hundreds of users and contributors",
  };

  const maturityColors: Record<Maturity, string> = {
    Sandbox: "",
    Incubation: "slate-300",
    Graduated: "primary-500",
  };

  //TODO: Improve the layout of this page especially regarding visual hierarchy

  return (
    <div className="mt-28 prose-h2:mt-0 md:mt-0 md:prose-h2:text-2xl md:prose-h3:text-xl">
      {Object.entries(projectsByMaturity).map(([projectMaturity, projects]) => (
        <Section
          key={projectMaturity}
          color={maturityColors[projectMaturity as Maturity]}
        >
          <div className="mb-16">
            <h2 className="py-6 text-xl font-bold md:text-3xl">
              {projectMaturity}
            </h2>

            <p className="text-gray-500 text-sm">
              {maturitySubtext[projectMaturity as Maturity]}
            </p>

            <div className="grid gap-12 py-10 md:mt-16 lg:grid-cols-2 lg:gap-32">
              {projects.map(({ slug, title, description }, index) => (
                <Card
                  key={index}
                  slug={slug}
                  title={title}
                  subtitle={description}
                  color={projectMaturity === "Sandbox" ? "slate-300" : "white"}
                  type="project"
                />
              ))}
            </div>
          </div>
        </Section>
      ))}
    </div>
  );
}
