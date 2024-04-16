import { getPosts } from "@/components/utils";
import { notFound } from "next/navigation";
import Page from "@/components/page";

const namespace = "events";

export async function generateStaticParams() {
  let posts = getPosts(namespace);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function SinglePage({ params }: { params: { slug: string } }) {
  let page = getPosts(namespace).find((page) => page.slug === params.slug);

  if (!page) {
    notFound();
  }

  return <Page page={page} />;
}
