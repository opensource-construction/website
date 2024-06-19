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
    ...getPosts("projects").map((p) => {
      return { slug: p.slug, pageType: "projects" as PageType };
    }),
    ...getPosts("events").map((p) => {
      return { slug: p.slug, pageType: "events" as PageType };
    }),
    ...getPosts("trainings").map((p) => {
      return { slug: p.slug, pageType: "trainings" as PageType };
    }),
    ...getPosts("page").map((p) => {
      return { slug: p.slug, pageType: "page" as PageType };
    }),
  ];
  return posts;
}

export default function SinglePage({ params }: { params: SinglePageType }) {
  let page = getPosts(params.pageType).find(
    (page) => page.slug === params.slug,
  );

  if (!page || params.pageType === "faqs") {
    notFound();
  }

  return <Page page={page} />;
}
