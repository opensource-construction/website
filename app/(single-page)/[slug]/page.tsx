import { getPosts } from "@/components/utils";
import { CustomMDX } from "@/components/mdx";
import { notFound } from "next/navigation";
import Button from "@/components/button";

export async function generateStaticParams() {
  let posts = getPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function SinglePage({ params }: { params: { slug: string } }) {
  let post = getPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="m-auto max-w-screen-lg px-4 py-12">
      <Button href="/" label="Go back" type="secondary" />
      <h1 className="mb-8 text-2xl">{post.metadata.title}</h1>
      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
    </div>
  );
}
