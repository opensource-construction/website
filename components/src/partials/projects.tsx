import { Card } from "../card";
import { Button } from "../button";
import { loadProjects } from "../mdxParser/contentParser";

function getRandomItems<T>(array: T[], numItems: number): T[] {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numItems);
}

export function ProjectsPartial() {
  let projects = loadProjects();

  const numberOfProjects = 3;

  let showFeatured = false;

  const filteredProjects = showFeatured
    ? projects.filter((project) => project.metadata.featured)
    : getRandomItems(projects, numberOfProjects);

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

        <div className={`bg-slate-300`}>
          <div className="flex h-full flex-col p-5">
            <h4 className="mb-2 mt-0 text-xl font-bold md:text-2xl">
              All Projects
            </h4>
            <div className="mt-auto">
              <Button
                type="primary"
                label="See all projects"
                target={"./projects"}
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
