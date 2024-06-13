import { getPosts } from "../utils";

import { Card } from "../card";

export function ProjectsPartial() {
  let projects = getPosts("projects");

  let parsedProjects = projects.map((e) => {
    let project = { ...e.metadata.project };
    console.log(project);

    project.title = e.metadata.title;
    project.description = e.metadata.description;
    project.slug = e.slug;

    return project;
  });
  // .sort((a, b) => (a.start < b.start ? 1 : -1));

  return (
    <div>
      <div className="grid gap-12 py-10 md:mt-16 lg:grid-cols-2 lg:gap-32">
        {!parsedProjects.length
          ? "No published projects"
          : parsedProjects.map((e) => (
              <Card
                key={e.slug}
                title={e.title}
                subtitle={e.description}
                slug={e.slug}
                color="gray-500"
                type="project"
              />
            ))}
      </div>
    </div>
  );
}
