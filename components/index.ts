import { Button } from "./src/button";
import Page from "./src/page";
import { Section } from "./src/section";
import { Footer } from "./src/footer";
import { CustomMDX } from "./src/mdx";
import { Navbar } from "./src/nav";
import { Form } from "./src/form";
import { getPosts, parseSlug, Post } from "./src/utils";

export type { Post };
export { CustomMDX, Button, Section, Page, Footer, Navbar, Form };
export { getPosts, parseSlug };

export { HeroPartial } from "./src/partials/hero";
export { EventsPartial } from "./src/partials/events";
export { ProjectsPartial } from "./src/partials/projects";
export { FAQPartial } from "./src/partials/faq";
