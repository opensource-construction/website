import fs from "fs";
import path from "path";
import YAML from "yaml";
import { parseSlug } from "./utils";

// Types & Interfaces
export type Maturity = typeof validMaturities[number];

export interface MdxProject {
  title: string;
  slug: string;
  description: string;
  metadata: {
    featured: boolean;
    maturity: Maturity;
  };
  links: {
    url: string;
    label: string;
  }[];
  content?: string;
}

// Constants
export const validMaturities = ["sandbox", "incubation", "graduated"] as const;
const defaultMaturity: Maturity = "sandbox";

// File System Utils
function getMDXFiles(dir: string): string[] {
  return fs
    .readdirSync(dir)
    .filter(file =>
      path.extname(file) === ".mdx" && !path.basename(file).startsWith("_")
    );
}

function readMDXFile(filePath: string): MdxProject {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  const slug = parseSlug(path.basename(filePath, path.extname(filePath)));
  return parseFrontmatter(rawContent, slug);
}

// Parsing Utils
function parseMaturity(maturity: string): Maturity {
  const cleanedMaturity = maturity?.trim()?.toLowerCase();
  return validMaturities.includes(cleanedMaturity as Maturity)
    ? (cleanedMaturity as Maturity)
    : defaultMaturity;
}

function parseFrontmatter(fileContent: string, slug: string): MdxProject {
  try {
    const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
    const match = frontmatterRegex.exec(fileContent);

    if (!match) {
      throw new Error('No frontmatter found');
    }

    const frontMatterBlock = match[1];
    const content = fileContent.replace(frontmatterRegex, "").trim();
    const parsedMetadata = YAML.parse(frontMatterBlock);

    return validateMetadata({ ...parsedMetadata, content }, slug);
  } catch (error) {
    console.error('Error parsing frontmatter:', error);
    return validateMetadata({ content: fileContent }, slug);
  }
}

// Validation Utils
function validateMetadata(input: any, slug: string = ""): MdxProject {
  const defaultProject: MdxProject = {
    title: "",
    description: "",
    slug,
    metadata: {
      featured: false,
      maturity: defaultMaturity
    },
    links: []
  };

  return {
    ...defaultProject,
    title: input?.title || defaultProject.title,
    description: input?.description || defaultProject.description,
    slug: input?.slug || slug || defaultProject.slug,
    metadata: {
      featured: input?.metadata?.featured ?? defaultProject.metadata.featured,
      maturity: parseMaturity(input?.metadata?.maturity)
    },
    links: Array.isArray(input?.links) ? input.links : defaultProject.links,
    content: input?.content
  };
}

// Public API
export function getProjects(dir?: string): MdxProject[] {
  const contentDir = path.join(process.cwd(), "content", dir || "");
  try {
    const files = getMDXFiles(contentDir);
    return files.map(file => readMDXFile(path.join(contentDir, file)));
  } catch (error) {
    console.error('Error reading projects:', error);
    return [];
  }
}

export function parseProjects(projects: MdxProject[]): MdxProject[] {
  return projects.map((project) => {
    if (!project) {
      console.warn('Invalid project data:', project);
      return validateMetadata({});
    }

    return validateMetadata(project);
  });
}