import fs from "fs";
import path from "path";
import YAML from "yaml";

//Generic utility function to parse frontmatter from a file

export type Post = {
  metadata: any;
  slug: string;
  content: string;
};

export function parseSlug(filename: string): string {
  return filename
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}


function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);
  let frontMatterBlock = match![1];
  let content = fileContent.replace(frontmatterRegex, "").trim();
  let metadata = YAML.parse(frontMatterBlock);

  return { metadata, content };
}

function getMDXFiles(dir: string) {
  return fs
    .readdirSync(dir)
    .filter(
      (file) =>
        path.extname(file) === ".mdx" && !path.basename(file).startsWith("_"),
    );
}

function readMDXFile(filePath: string) {
  let rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

function getMDXData(dir: string): Post[] {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file));
    let slug = parseSlug(path.basename(file, path.extname(file)));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getPosts(dir?: string) {
  return getMDXData(path.join(process.cwd(), "content", dir || ""));
}
