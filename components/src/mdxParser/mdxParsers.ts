// contentParser.ts
import fs from "fs";
import path from "path";
import YAML from "yaml";
import {
  Content,
  Project,
  Training,
  contentDefaults,
  ContentType,
  Parser,
  Post,
} from "./mdxParserTypes";
import { validateMetadata } from "./mdxValidators";

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

export function loadContent<T extends Content>(
  dir: string,
  type: ContentType,
): T[] {
  const contentDir = path.join(process.cwd(), "content", dir);

  try {
    return fs
      .readdirSync(contentDir)
      .filter((file) => path.extname(file) === ".mdx" && !file.startsWith("_"))
      .map((file) => {
        const content = fs.readFileSync(path.join(contentDir, file), "utf-8");
        const slug = parseSlug(path.basename(file, ".mdx"));
        const parsed = parseFrontmatter(content);

        const defaultContent = contentDefaults[type] as T;

        return parsed
          ? validateMetadata<T>(
            parsed.data,
            slug,
            parsed.body,
            defaultContent,
            type,
          )
          : { ...defaultContent, slug };
      });
  } catch (error) {
    console.error(`Error loading ${type}:`, error);
    return [];
  }
}

export const loadProjects = () =>
  loadContent("projects", "project") as Project[];

export const loadTrainings = () =>
  loadContent("trainings", "training") as Training[];

export const loadPosts = (dir: string) => loadContent(dir, "post") as Post[];

export function getMDXFiles(dir: string): string[] {
  try {
    return fs
      .readdirSync(dir)
      .filter(
        (file) =>
          path.extname(file) === ".mdx" && !path.basename(file).startsWith("_"),
      );
  } catch (error) {
    console.error("Error reading directory:", error);
    return [];
  }
}

export function readFile<T>(
  filePath: string,
  validationFn: Parser<T>,
  options = { encoding: "utf-8" as const },
): T {
  try {
    const rawContent = fs.readFileSync(filePath, options);
    const slug = parseSlug(path.basename(filePath, path.extname(filePath)));
    const { metadata, content } = parseMdxFile(rawContent);
    return validationFn(content, slug, metadata);
  } catch (error) {
    console.error("Error reading file:", error);
    throw error;
  }
}

export function parseMdxFile(fileContent: string): {
  metadata: Record<string, unknown>;
  content: string;
} {
  try {
    const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
    const match = frontmatterRegex.exec(fileContent);

    if (!match) {
      throw new Error("No frontmatter found");
    }

    const frontMatterBlock = match[1];
    const content = fileContent.replace(frontmatterRegex, "").trim();
    const metadata = YAML.parse(frontMatterBlock);

    if (typeof metadata !== "object" || metadata === null) {
      throw new Error("Invalid frontmatter format");
    }

    return { metadata, content };
  } catch (error) {
    console.error("Error parsing MDX file:", error);
    return { metadata: {}, content: fileContent };
  }
}

export function getPosts(dir?: string): Post[] {
  const contentDir = path.join(process.cwd(), "content", dir || "");
  try {
    const files = getMDXFiles(contentDir);
    return files.map((file) =>
      readFile<Post>(
        path.join(contentDir, file),
        (content, slug, metadata) => ({
          metadata: metadata as Record<string, unknown>,
          slug,
          content,
        }),
      ),
    );
  } catch (error) {
    console.error("Error loading posts:", error);
    return [];
  }
}