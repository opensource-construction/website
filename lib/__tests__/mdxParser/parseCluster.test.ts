import { mapContent } from "@/lib/mdxParser/mdxMappers";
import { contentDefaults, OscCluster } from "@/lib/mdxParser/mdxSchema";
import { describe, expect, it } from "vitest";

describe("validateEvent", () => {
  const validSlug = "test-event";
  const validContent = "# Test Content";
  const defaultContent = contentDefaults.cluster as OscCluster;

  it("should validate a correct event", () => {
    const rawData = {
      title: "Prefab Cluster",
      description:
        "A dynamic network of innovators, leaders, and pioneers revolutionizing the construction industry through prefabrication and off-site fabrication.",
      image: "/images/clusters/prefab_cluster.png",
      links: [{ url: "https://okobau.kongsgaard.eu/", label: "Website" }],
      tags: null,
    };

    const result = mapContent(
      "cluster",
      rawData,
      validSlug,
      validContent,
      defaultContent,
    );

    expect(result).toEqual({
      type: "cluster",
      title: "Prefab Cluster",
      slug: validSlug,
      content: validContent,
      description:
        "A dynamic network of innovators, leaders, and pioneers revolutionizing the construction industry through prefabrication and off-site fabrication.",

      metadata: {
        links: [{ url: "https://okobau.kongsgaard.eu/", label: "Website" }],
        image: "/images/clusters/prefab_cluster.png",
        partners: [],
        tags: [],
      },
    });
  });
});
