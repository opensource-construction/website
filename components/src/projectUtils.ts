import projectMapJson from "../../content/project-map.json";

export interface ProjectMap {
  title: string;
  slug: string;
  highlighted: boolean;
  state: string;
}

export interface Project {
  title: string;
  slug: string;
  highlighted: boolean;
  state: string;
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