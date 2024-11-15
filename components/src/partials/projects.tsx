import { getPosts } from "../utils";
import { Card } from "../card";
import { parseProjects } from "../projectUtils";

function getRandomItems<T>(array: T[], numItems: number): T[] {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numItems);
}

export function ProjectsPartial() {
  let projects = getPosts("projects");
  const parsedProjects = parseProjects(projects);

  const numberOfProjects = 3;

  let showHighlighted = false;

  const filteredProjects = showHighlighted
    ? parsedProjects.filter((project) => project.highlighted)
    : getRandomItems(parsedProjects, numberOfProjects);

  return (
    <div>
      <div className="grid gap-12 py-10 md:mt-16 lg:grid-cols-2 lg:gap-32">
        {!filteredProjects.length
          ? "No published projects"
          : filteredProjects.map((e) => (
              <Card
                key={e.slug}
                title={e.title}
                subtitle={e.description}
                slug={e.slug}
                color="slate-300"
                type="project"
              />
            ))}

        <Card
          title="All Projects"
          subtitle="View all projects"
          slug={"/projects"}
          type="link"
          color="primary-500"
        />
      </div>
    </div>
  );
}
