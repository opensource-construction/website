import { CustomMDX } from "./mdx";
import Button from "./button";
import { Section } from "./section";
import React from "react";

export default function Page({
  page,
}: {
  page: {
    metadata: {
      title: string;
      event?: object;
      project?: object;
      links?: {
        url: string;
        label: string;
      }[];
    };
    slug: string;
    content: string;
  };
}) {
  return (
    <div>
      <Section>
        <Button href="/" label="Go back" type="secondary" icon="left" />
        <h1 className="mb-8 mt-24 text-2xl">{page.metadata.title}</h1>
        <article className="prose prose-li:marker:text-osc-primary">
          <CustomMDX source={page.content} />
        </article>
      </Section>
      {page.metadata.links ? (
        <Section color="primary">
          {" "}
          {page.metadata.links.map((l) => (
            <Button key={l.label} href={l.url} label={l.label} type="primary" />
          ))}{" "}
        </Section>
      ) : null}
    </div>
  );
}
