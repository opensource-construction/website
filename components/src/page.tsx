import { CustomMDX } from "./mdx";
import { Button } from "./button";
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
        <Button
          target="/projects"
          label="Go back"
          type="secondary"
          icon="left"
        />
        <h1 className="mb-8 mt-12 text-2xl font-bold md:mt-16 md:text-3xl">
          {page.metadata.title}
        </h1>
        <article className="prose mb-16 prose-li:marker:text-primary-500 md:prose-h3:text-2xl">
          <CustomMDX source={page.content} />
        </article>
      </Section>
      {page.metadata.links ? (
        <Section color="primary-500">
          <h3 className="text-2xl font-bold">Links</h3>
          <div className="flex flex-col gap-2 py-4 md:flex-row">
            {page.metadata.links.map((l) => (
              <Button
                key={l.label}
                target={l.url}
                label={l.label}
                type="primary"
              />
            ))}{" "}
          </div>
        </Section>
      ) : null}
    </div>
  );
}
