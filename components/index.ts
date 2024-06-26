import Page from "./src/page";

import { Button } from "./src/button";
import { Section } from "./src/section";
import { Footer } from "./src/footer";
import { CustomMDX } from "./src/mdx";
import { Navbar } from "./src/nav";
import { Form } from "./src/form";
import { getPosts, parseSlug, Post } from "./src/utils";

/**
 * @module components
 * @description This module exports various components used in the website.
 */

/**
 * @typedef {import('./CustomMDX').CustomMDX} CustomMDX
 * @typedef {import('./Button').Button} Button
 * @typedef {import('./Section').Section} Section
 * @typedef {import('./Page').Page} Page
 * @typedef {import('./Footer').Footer} Footer
 * @typedef {import('./Navbar').Navbar} Navbar
 * @typedef {import('./Form').Form} Form
 */

export type { Post };

export { CustomMDX, Button, Section, Page, Footer, Navbar, Form };
export { getPosts, parseSlug };

export { HeroPartial } from "./src/partials/hero";
export { EventsPartial } from "./src/partials/events";
export { ProjectsPartial } from "./src/partials/projects";
export { FAQPartial } from "./src/partials/faq";
