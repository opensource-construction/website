import {
  loadPosts,
  loadProjects,
  loadTrainings,
} from "@opensource-construction/components/src/mdxParser/contentParser";
import { Page, getPosts } from "@opensource-construction/components";
import { notFound } from "next/navigation";

type PageType = "events" | "projects" | "trainings" | "faqs" | "page";

type SinglePageType = {
  pageType: PageType;
  slug: string;
};

export async function generateStaticParams() {
  let posts: SinglePageType[] = [];
  posts = [
    ...posts,
    ...loadProjects().map((p) => {
      return { slug: p.slug, pageType: "projects" as PageType };
    }),
    ...getPosts("events").map((p) => {
      return { slug: p.slug, pageType: "events" as PageType };
    }),
    ...loadTrainings().map((p) => {
      return { slug: p.slug, pageType: "trainings" as PageType };
    }),
    ...getPosts("page").map((p) => {
      return { slug: p.slug, pageType: "page" as PageType };
    }),
  ];
  return posts;
}

export default function SinglePage({ params }: { params: SinglePageType }) {
  let page = loadPosts(params.pageType).find(
    (page) => page.slug === params.slug,
  );

  if (!page || params.pageType === "faqs") {
    notFound();
  }

  return <Page page={page} />;
}
