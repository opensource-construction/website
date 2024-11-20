import projectMapJson from "../../content/project-map.json";

const defaultMaturity: Maturity = "sandbox";

//TODO: Put this file in the correct location
//TODO: Improve import path for projectMapJson

export interface ProjectMap {
  title: string;
  slug: string;
  featured: boolean;
  maturity: Maturity;
}

//TODO: Maybe rename this to something else than Project
export interface Project {
  title: string;
  slug: string;
  featured: boolean;
  maturity: Maturity;
  description: string;
}

export const validMaturities = ["sandbox", "incubation", "graduated"] as const;
export type Maturity = typeof validMaturities[number];


const projectMapBySlug = new Map(
  projectMapJson.map((project) => [project.slug, project])
);

function parseMaturity(maturity: string): Maturity {
  const cleanedMaturity = maturity.trim().toLowerCase();
  return validMaturities.includes(cleanedMaturity as Maturity)
    ? (cleanedMaturity as Maturity)
    : defaultMaturity;
}

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
      maturity: e.maturity as Maturity,
    };

    // Merge extra data from projectMapBySlug
    const extraData = projectMapBySlug.get(slug);
    if (extraData) {
      return {
        ...baseProject,
        ...extraData,
        maturity: parseMaturity(extraData.maturity),
      };
    }
    return baseProject;
  });
}