import { Button, getPosts, Section } from "@/components";
import {
  Maturity,
  parseProjects,
  Project,
  validMaturities,
} from "@/components/src/projectUtils";

function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

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

  const sortedProjectsByMaturity = Object.entries(projectsByMaturity).sort(
    ([a], [b]) =>
      validMaturities.indexOf(a as Maturity) -
      validMaturities.indexOf(b as Maturity),
  );

  //Set the color of the section based on the maturity of the projects
  const maturityColors: Record<Maturity, string> = {
    sandbox: "",
    incubation: "slate-300",
    graduated: "primary-500",
  };

  const maturitySubtext: Record<Maturity, string> = {
    sandbox: "Experimental projects not yet widely tested in production",
    incubation:
      "Projects used successfully in production by a small number of users",
    graduated:
      "Projects considered stable, widely adopted and production ready, attracting hundreds of users and contributors",
  };

  //TODO: Improve the layout of this page especially regarding visual hierarchy
  //TODO: Either create a special card for projects in the project dir  or use a different layout

  return (
    <div className="mt-28 prose-h2:mt-0 md:mt-0 md:prose-h2:text-2xl md:prose-h3:text-xl">
      <Section>
        <h1 className="py-6 text-xl font-bold  md:text-4xl">Projects</h1>
        <p>
          The os.c marketplace is the place to publish open source projects with one
          idea in mind: To reduce the incredible duplication of efforts that
          really slows down innovation in the AECO industry. 
        </p>
        <p>
          The idea of this space is twofolded:
          <br />
          1. it&lsquo;s a collaborative repository to collect any code that is open and helpful to others in the AECO sector. 
          Projects range from small scripts, that you wish you would have at hand instead of building it yourself 
          to larger projects, that help you move faster. 
        </p>
        <p> 2. get to know the people behind the projects. Learn about their motivation to publish code open source and about the models they have 
          found to make the work on it sustainable. In addition to the publication on the website, we offer the possibility to set up a community call 
          that is recorded and also shared on the website.
          <br />
        </p>
        <p> Let&lsquo;s keep pushing the industry further. Step by step and never
          stopping.
        </p>

        <div className="pt-4">
          <Button
            target="/#contact-us"
            label="Want to submit a project yourself?"
            type="primary"
          />
        </div>
      </Section>

      {sortedProjectsByMaturity.map(([projectMaturity, projects]) => (
        <Section
          key={projectMaturity}
          color={maturityColors[projectMaturity as Maturity]}
        >
          <div className="mb-16">
            <h1 className="py-6 text-xl font-bold  md:text-3xl">
              {capitalizeFirstLetter(projectMaturity)}
            </h1>

            <p className="text-gray-500 text-sm">
              {maturitySubtext[projectMaturity as Maturity]}
            </p>

            <div className="grid gap-12 py-10 md:mt-16 lg:grid-cols-2 lg:gap-5">
              {projects.map(({ slug, title, description }, index) => (
                <div
                  className={`bg-${projectMaturity === "sandbox" ? "slate-300" : "white"}`}
                  key={index}
                >
                  <div className="p-5">
                    <h4 className="mb-2 mt-0 text-xl font-bold md:text-2xl">
                      {title}
                    </h4>
                    <div className="mb-12">{description}</div>

                    <Button
                      label="More about the project"
                      target={`/projects/${slug}`}
                      type="primary"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>
      ))}
    </div>
  );
}
