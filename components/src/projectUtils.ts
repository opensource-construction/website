import projectMapJson from "../../content/project-map.json";

//TODO: Put this file in the correct location
//TODO: Improve import path for projectMapJson

export interface ProjectMap {
  title: string;
  slug: string;
  highlighted: boolean;
  maturity: string;
}

//TODO: Maybe rename this to something else than Project
export interface Project {
  title: string;
  slug: string;
  highlighted: boolean;
  maturity: string;
  description: string;
}

const projectMapBySlug = new Map(
  projectMapJson.map((project) => [project.slug, project])
);

/**
 * Function to parse and merge project data with additional metadata from the json file
 * @param projects - Array of raw project data from getPosts function
 * @returns Array of parsed and merged project data
 * 
 * Usage example:
 * 
 * ```typescript
 * import { getPosts } from "../utils/projectUtils";
 * import { parseProjects } from "./projectUtils";
 * 
 * const rawProjects = getPosts("projects");
 * const parsedProjects = parseProjects(rawProjects);
 * ```
 */
export function parseProjects(projects: any[]): Project[] {
  return projects.map((e) => {
    const { title, description, project: projectMetadata } = e.metadata;
    const { slug } = e;

    // Base project object from metadata
    const baseProject: Project = {
      ...projectMetadata,
      title,
      description,
      slug,
    };

    // Merge extra data from projectMapBySlug
    const extraData = projectMapBySlug.get(slug);
    return extraData ? { ...baseProject, ...extraData } : baseProject;
  });
}