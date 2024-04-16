import { getPosts } from "@/components/utils";
import { notFound } from "next/navigation";
import Button from "@/components/button";
import Page from "@/components/page";

export async function generateStaticParams() {
  let posts = getPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function SinglePage({ params }: { params: { slug: string } }) {
  let page = getPosts().find((page) => page.slug === params.slug);

  if (!page) {
    notFound();
  }

  return (
    <div className="m-auto max-w-screen-lg px-4 py-12">
      <Button href="/" label="Go back" type="secondary" icon="left" />
      <Page page={page} />
    </div>
  );
}
