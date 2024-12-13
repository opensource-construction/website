import {
  loadEvents,
  loadFaqs,
  loadPages,
  loadPosts,
  loadProjects,
  loadTrainings,
} from "@/components/src/mdxParser/mdxParsers";
import { Page } from "@opensource-construction/components";
import { notFound } from "next/navigation";

type PageType = "projects" | "events" | "trainings" | "page" | "post" | "faqs";

type SinglePageType = {
  pageType: PageType;
  slug: string;
};

export async function generateStaticParams() {
  let posts: SinglePageType[] = [];

  // Ensure all loader functions are called synchronously
  const projects = loadProjects();
  const events = loadEvents();
  const trainings = loadTrainings();
  const pages = loadPages();
  const faqs = loadFaqs();

  posts = [
    ...posts,
    ...projects.map((p) => ({
      slug: p.slug,
      pageType: "projects" as PageType,
    })),
    ...events.map((e) => ({ slug: e.slug, pageType: "events" as PageType })),
    ...trainings.map((t) => ({
      slug: t.slug,
      pageType: "trainings" as PageType,
    })),
    ...pages.map((p) => ({ slug: p.slug, pageType: "page" as PageType })),
    ...faqs.map((f) => ({ slug: f.slug, pageType: "faqs" as PageType })),
  ];

  return posts;
}

export default async function SinglePage({
  params,
}: {
  params: SinglePageType;
}) {
  const { pageType, slug } = params;

  //TODO:FIX ANY
  let page: any;

  switch (pageType) {
    case "projects":
      page = loadProjects().find((p) => p.slug === slug);
      break;
    case "trainings":
      page = loadTrainings().find((t) => t.slug === slug);
      break;
    case "events":
      page = loadEvents().find((e) => e.slug === slug);
      break;
    case "faqs":
      page = loadFaqs().find((f) => f.slug === slug);
      break;
    default:
      page = loadPosts(pageType).find((p) => p.slug === slug);
  }

  if (!page) {
    notFound();
  } else if (pageType === "faqs") {
    notFound();
  }

  return <Page page={page} />;
}
