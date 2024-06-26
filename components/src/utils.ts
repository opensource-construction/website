import fs from "fs";
import path from "path";
import YAML from "yaml";

/**
 * Represents a post object.
 */
export type Post = {
  /**
   * The metadata of the post.
   */
  metadata: any;
  /**
   * The slug of the post.
   */
  slug: string;
  /**
   * The content of the post.
   */
  content: string;
};

/**
 * Parses the frontmatter from a file content string.
 *
 * @param fileContent - The content of the file.
 * @returns An object containing the parsed frontmatter metadata and the content without the frontmatter.
 */
function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);
  let frontMatterBlock = match![1];
  let content = fileContent.replace(frontmatterRegex, "").trim();
  let metadata = YAML.parse(frontMatterBlock);

  return { metadata, content };
}

/**
 * Retrieves an array of MDX files from the specified directory.
 *
 * @param dir - The directory path to search for MDX files.
 * @returns An array of MDX file names.
 */
function getMDXFiles(dir: string) {
  return fs
    .readdirSync(dir)
    .filter(
      (file) =>
        path.extname(file) === ".mdx" &&
        !path.basename(file).includes("_template")
    );
}

/**
 * Reads an MDX file and returns the parsed frontmatter.
 * @param filePath - The path to the MDX file.
 * @returns The parsed frontmatter of the MDX file.
 */
function readMDXFile(filePath: string) {
  let rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

/**
 * Parses the slug from a file basename.
 *
 * @param fileBasename - The basename of the file.
 * @returns The parsed slug.
 */
export function parseSlug(fileBasename: string) {
  let prefix = fileBasename.indexOf("-");
  if (prefix && +fileBasename.slice(0, prefix)) {
    return fileBasename.slice(prefix + 1);
  }
  return fileBasename;
}

/**
 * Retrieves an array of Post objects from MDX files in the specified directory.
 * @param dir - The directory path where the MDX files are located.
 * @returns An array of Post objects containing metadata, slug, and content.
 */
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

/**
 * Retrieves the posts data from the specified directory.
 * If no directory is provided, it retrieves the posts data from the default directory.
 * @param dir - The directory path to retrieve the posts data from (optional).
 * @returns The posts data.
 */
export function getPosts(dir?: string) {
  return getMDXData(path.join(process.cwd(), "content", dir || ""));
}
/**
 * Retrieves a specific post by slug from the specified directory.
 * If no directory is provided, it retrieves the post from the default directory.
 * @param slug - The slug of the post.
 * @param dir - The directory path to retrieve the post from (optional).
 * @returns The post object.
 */
export function getPostBySlug(slug: string, dir?: string) {
  const posts = getPosts(dir);
  return posts.find((post) => post.slug === slug);
}

/**
 * Retrieves the latest posts from the specified directory.
 * If no directory is provided, it retrieves the latest posts from the default directory.
 * @param limit - The maximum number of posts to retrieve (optional).
 * @param dir - The directory path to retrieve the posts from (optional).
 * @returns An array of latest posts.
 */
export function getLatestPosts(limit?: number, dir?: string) {
  const posts = getPosts(dir);
  const sortedPosts = posts.sort((a, b) => {
    const dateA = new Date(a.metadata.date);
    const dateB = new Date(b.metadata.date);
    return dateB.getTime() - dateA.getTime();
  });
  return limit ? sortedPosts.slice(0, limit) : sortedPosts;
}

/**
 * Retrieves the posts by a specific category from the specified directory.
 * If no directory is provided, it retrieves the posts from the default directory.
 * @param category - The category of the posts.
 * @param dir - The directory path to retrieve the posts from (optional).
 * @returns An array of posts in the specified category.
 */
export function getPostsByCategory(category: string, dir?: string) {
  const posts = getPosts(dir);
  return posts.filter((post) => post.metadata.category === category);
}

/**
 * Retrieves the total number of posts in the specified directory.
 * If no directory is provided, it retrieves the total number of posts from the default directory.
 * @param dir - The directory path to retrieve the posts from (optional).
 * @returns The total number of posts.
 */
export function getTotalPosts(dir?: string) {
  const posts = getPosts(dir);
  return posts.length;
}

/**
 * Retrieves the posts by a specific tag from the specified directory.
 * If no directory is provided, it retrieves the posts from the default directory.
 * @param tag - The tag of the posts.
 * @param dir - The directory path to retrieve the posts from (optional).
 * @returns An array of posts with the specified tag.
 */
export function getPostsByTag(tag: string, dir?: string) {
  const posts = getPosts(dir);
  return posts.filter((post) => post.metadata.tags.includes(tag));
}

/**
 * Retrieves the posts by a specific author from the specified directory.
 * If no directory is provided, it retrieves the posts from the default directory.
 * @param author - The author of the posts.
 * @param dir - The directory path to retrieve the posts from (optional).
 * @returns An array of posts by the specified author.
 */
export function getPostsByAuthor(author: string, dir?: string) {
  const posts = getPosts(dir);
  return posts.filter((post) => post.metadata.author === author);
}

/**
 * Retrieves the posts published within a specific date range from the specified directory.
 * If no directory is provided, it retrieves the posts from the default directory.
 * @param startDate - The start date of the range.
 * @param endDate - The end date of the range.
 * @param dir - The directory path to retrieve the posts from (optional).
 * @returns An array of posts published within the specified date range.
 */
export function getPostsByDateRange(
  startDate: Date,
  endDate: Date,
  dir?: string
) {
  const posts = getPosts(dir);
  return posts.filter((post) => {
    const postDate = new Date(post.metadata.date);
    return postDate >= startDate && postDate <= endDate;
  });
}
