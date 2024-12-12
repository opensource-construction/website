// import path from "path";
// import YAML from "yaml";
// import { getMDXFiles, Post, readFile } from "./utils";
// import { loadContent } from "./contentParser";
// import { Project } from "./types/parserTypes";

// export type Maturity = typeof validMaturities[number];

// export interface MdxProject extends Post {
//   title: string;
//   description: string;
//   metadata: {
//     featured: boolean;
//     maturity: Maturity;
//   };
//   links: {
//     url: string;
//     label: string;
//   }[];
// }

// export const validMaturities = ["sandbox", "incubation", "graduated"] as const;
// const defaultMaturity: Maturity = "sandbox";

// function parseMaturity(maturity: string): Maturity {
//   const cleanedMaturity = maturity?.trim()?.toLowerCase();
//   return validMaturities.includes(cleanedMaturity as Maturity)
//     ? (cleanedMaturity as Maturity)
//     : defaultMaturity;
// }

// function projectParser(fileContent: string, slug: string, rawMetadata: any): MdxProject {
//   try {
//     console.log('Raw metadata before validation:', rawMetadata);
//     return validateProject(fileContent, slug, rawMetadata);
//   } catch (error) {
//     console.error('Error parsing project:', error);
//     return validateProject(fileContent, slug, {});
//   }
// }

// function validateProject(content: string, slug: string, metadata: any): MdxProject {
//   const defaultProject: MdxProject = {
//     title: "",
//     description: "",
//     slug,
//     metadata: {
//       featured: false,
//       maturity: defaultMaturity
//     },
//     links: [],
//     content: ""
//   };

//   // Handle both nested and flat metadata structures
//   const metadataFields = metadata.metadata || metadata;
//   const featured = metadataFields.featured ?? metadata.featured ?? defaultProject.metadata.featured;
//   const maturity = parseMaturity(metadataFields.maturity ?? metadata.maturity);

//   return {
//     title: metadata.title || defaultProject.title,
//     description: metadata.description || defaultProject.description,
//     slug: slug || defaultProject.slug,
//     metadata: {
//       featured,
//       maturity
//     },
//     links: Array.isArray(metadata.links) ? metadata.links : defaultProject.links,
//     content: content || defaultProject.content
//   };
// }

// // export function loadProjects(dir?: string): MdxProject[] {
// //   const contentDir = path.join(process.cwd(), "content", dir || "");
// //   try {
// //     const files = getMDXFiles(contentDir);
// //     return files.map(file => readFile<MdxProject>(path.join(contentDir, file), projectParser));
// //   } catch (error) {
// //     console.error('Error reading projects:', error);
// //     return [];
// //   }
// // }

// // export const loadProjects = () => loadContent('projects', 'project') as Project[];