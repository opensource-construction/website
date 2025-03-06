import { CustomMDX } from "./mdx";
import { Button } from "./button";
import { Section } from "./section";
import React from "react";

import {
  Content,
  OscCluster,
  OscEvent,
  OscPage,
  OscProject,
  OscTraining,
} from "@/lib/mdxParser/mdxSchema";

export default function DynamicPage({ page }: { page: Content }) {
  const renderMetadata = () => {
    switch (page.type) {
      case "project":
        const project = page as OscProject;
        return null;
      case "training":
        const training = page as OscTraining;
        return null;
      case "event":
        const event = page as OscEvent;
        return null;
      case "cluster":
        const cluster = page as OscCluster;
        return null;
      case "page":
      default:
        const pageContent = page as OscPage;
        return null;
    }
  };

  return (
    <div>
      <Section>
        <Button
          target={page.type ? "/projects" : "/clusters"}
          label="Go back"
          type="secondary"
          icon="left"
        />
        <h1 className="mb-8 mt-12 text-2xl font-bold md:mt-16 md:text-3xl">
          {page.title}
        </h1>
        <article className="prose mb-16 prose-li:marker:text-primary-500 md:prose-h3:text-2xl">
          <CustomMDX source={page.content} />
        </article>
        {renderMetadata()}
      </Section>
      {Array.isArray(page.metadata.links) && page.metadata.links.length > 0 && (
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
            ))}
          </div>
        </Section>
      )}
    </div>
  );
}
