import { getPosts } from "../utils";
import { Card } from "../card";
import { parseProjects } from "../projectUtils";

export interface ProjectMap {
  title: string;
  slug: string;
  highlighted: boolean;
  state: string;
}

export function ProjectsPartial() {
  let projects = getPosts("projects");
  const parsedProjects = parseProjects(projects);

  let highlightedProjects = parsedProjects.filter(
    (project) => project.highlighted,
  );

  return (
    <div>
      <div className="grid gap-12 py-10 md:mt-16 lg:grid-cols-2 lg:gap-32">
        {!highlightedProjects.length
          ? "No published projects"
          : highlightedProjects.map((e) => (
              <Card
                key={e.slug}
                title={e.title}
                subtitle={e.description}
                slug={e.slug}
                color="slate-300"
                type="project"
              />
            ))}
      </div>
    </div>
  );
}
