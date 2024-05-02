import { getPosts } from "../utils";

import Button from "../button";
import { Card } from "../card";

export function ProjectsPartial() {
  let projects = getPosts("projects");

  let parsedProjects = projects.map((e) => {
    let project = e.metadata.project;

    project.title = e.metadata.title;
    project.slug = e.slug;

    return project;
  });
  // .sort((a, b) => (a.start < b.start ? 1 : -1));

  return (
    <div>
      <div className="py-10">
        {!parsedProjects.length
          ? "No published projects"
          : parsedProjects.map((e) => (
              <Card
                key={e.slug}
                title={e.title}
                slug={e.slug}
                color="gray-500"
                type="project"
              />
            ))}
      </div>
    </div>
  );
}
