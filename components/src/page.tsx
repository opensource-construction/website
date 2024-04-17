import type { Metadata } from "./utils";
import { CustomMDX } from "./mdx";
import React from "react";

export default function Page({
  page,
}: {
  page: { metadata: Metadata; slug: string; content: string };
}) {
  return (
    <div>
      <h1 className="mb-8 text-2xl">{page.metadata.title}</h1>
      <article className="prose  prose-li:marker:text-osc-primary">
        <CustomMDX source={page.content} />
      </article>
    </div>
  );
}
