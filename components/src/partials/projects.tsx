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
      <h3 className="pt-10 text-xl">Projects</h3>
      <div className="w-full py-10 md:w-7/12">
        <p>
          The exciting thing about the open source movement is the diversity of
          possible projects. From small, local projects to large, transnational
          projects, from simple database solutions to complex software projects.
          As long as the mindset is right, there is something for everyone –
          from analogue dinosaurs to average users to absolute experts.
        </p>
        <p>
          At opensource.construction, we host and support projects in different
          ways.
        </p>
        <p>
          Sandbox Projects are experimental projects that are not yet widely
          tested in production. Incubating Projects are already used
          successfully in production by a small number of users. Graduated
          Projects considered stable, widely adopted and production ready,
          attracting hundreds of users and contributors
        </p>
        <p>
          Click on the projects to get more details about the projects, the
          authors and their communication channels.
        </p>
        <Button
          href="https://www.opensource.construction/#"
          label="Want to submit a project yourself?"
          type="primary"
        />
        <Button
          href="https://wiki.osarch.org/index.php?title=AEC_Free_Software_directory"
          label="AEC Free Software directory"
          type="primary"
        />
      </div>
      <div className="py-10">
        {!parsedProjects.length
          ? "No published projects"
          : parsedProjects.map((e) => (
              <Card key={e.slug} title={e.title} slug={e.slug} type="project" />
            ))}
      </div>
    </div>
  );
}
