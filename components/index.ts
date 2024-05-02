import Button from "./src/button";
import Page from "./src/page";
import { Footer } from "./src/footer";
import { CustomMDX } from "./src/mdx";
import { Navbar } from "./src/nav";
import { getPosts, parseSlug, Post } from "./src/utils";

export type { Post };
export { CustomMDX, Button, Page, Footer, Navbar };
export { getPosts, parseSlug };

export { EventsPartial } from "./src/partials/events";
export { ProjectsPartial } from "./src/partials/projects";
