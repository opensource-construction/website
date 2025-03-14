// contentParser.ts
import fs from "fs";
import path from "path";
import YAML from "yaml";
import { ContentValidator } from "./mdxSchema";
import { contentDefaults } from "./mdxSchema";
import { ContentTypeMap, contentValidators } from "./mdxMappers";
import { ContentType, OscPost } from "./mdxSchema";

export function parseSlug(fileBasename: string) {
  let prefix = fileBasename.indexOf("-");
  if (prefix && +fileBasename.slice(0, prefix)) {
    return fileBasename.slice(prefix + 1);
  }
  return fileBasename;
}

function parseFrontmatter(content: string) {
  const match = /---\s*([\s\S]*?)\s*---/.exec(content);
  if (!match) return null;

  const yaml = match[1];
  const body = content.replace(match[0], "").trim();

  try {
    const data = YAML.parse(yaml);
    return { data, body };
  } catch (e) {
    return null;
  }
}

export function loadContent<T extends ContentType>(
  dir: string,
  type: T,
): ContentTypeMap[T][] {
  const contentDir = path.join(process.cwd(), "content", dir);

  try {
    return fs
      .readdirSync(contentDir)
      .filter((file) => path.extname(file) === ".mdx" && !file.startsWith("_"))
      .map((file) => {
        const content = fs.readFileSync(path.join(contentDir, file), "utf-8");
        const slug = parseSlug(path.basename(file, ".mdx"));
        const parsed = parseFrontmatter(content);
        const validator = contentValidators[type] as ContentValidator<
          ContentTypeMap[T]
        >;
        const defaultContent = contentDefaults[type] as ContentTypeMap[T];

        const parsedContent = parsed
          ? validator(parsed.data, slug, parsed.body, defaultContent)
          : { ...defaultContent, slug };
        return parsedContent;
      });
  } catch (error) {
    console.error(
      `Error loading ${type} with the title ${dir}:`,
      JSON.stringify(error, null, 2),
    );
    return [];
  }
}

export const loadProjects = () => loadContent("projects", "project");

export const loadTrainings = () => loadContent("trainings", "training");

export const loadEvents = () => loadContent("events", "event");

export const loadPages = () => loadContent("page", "page");

export const loadClusters = () => loadContent("clusters", "cluster");

export const loadFaqs = () => loadContent("faqs", "faqs");

export const loadPosts = (dir: string) => loadContent(dir, "post") as OscPost[];
