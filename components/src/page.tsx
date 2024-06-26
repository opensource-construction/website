import React from "react";

import { CustomMDX } from "./mdx";
import { Button } from "./button";
import { Section } from "./section";

/**
 * Renders a page component.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.page - The page data.
 * @param {Object} props.page.metadata - The metadata of the page.
 * @param {string} props.page.metadata.title - The title of the page.
 * @param {Object} [props.page.metadata.event] - The event associated with the page.
 * @param {Object} [props.page.metadata.project] - The project associated with the page.
 * @param {Object[]} [props.page.metadata.links] - The links associated with the page.
 * @param {string} props.page.metadata.links.url - The URL of the link.
 * @param {string} props.page.metadata.links.label - The label of the link.
 * @param {string} props.page.slug - The slug of the page.
 * @param {string} props.page.content - The content of the page.
 * @returns {JSX.Element} The rendered page component.
 */
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
}): JSX.Element {
  return (
    <div>
      <Section>
        <Button target="/" label="Go back" type="secondary" icon="left" />
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
