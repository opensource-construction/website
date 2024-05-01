import fs from "fs";
import path from "path";
import YAML from "yaml";

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);
  let frontMatterBlock = match![1];
  let content = fileContent.replace(frontmatterRegex, "").trim();
  let metadata = YAML.parse(frontMatterBlock);

  return { metadata, content };
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  let rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

export function parseSlug(fileBasename: string) {
  let prefix = fileBasename.indexOf("-");
  if (prefix && +fileBasename.slice(0, prefix)) {
    return fileBasename.slice(prefix + 1);
  }
  return fileBasename;
}

function getMDXData(dir: string) {
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
