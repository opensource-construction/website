import { Section } from "@/components";
import { ClusterCard } from "@/components/src/clusterCard";
import { loadClusters } from "@lib/mdxParser/mdxParsers";
import { ClustersPartial } from "@/components/src/partials/clusters";

export default function ClusterPage() {
  let clusters = loadClusters();
  return (
    <div className="mt-28 prose-h2:mt-0 md:mt-0 md:prose-h2:text-2xl md:prose-h3:text-xl">
      <Section>
        <ClustersPartial />
      </Section>
      <Section title="Clusters" className="mb-32">
        {clusters.map((c, index) => (
          <ClusterCard
            key={index}
            slug={c.slug}
            title={c.title}
            subtitle={c.description}
            image={c.metadata.image}
          />
        ))}
      </Section>
    </div>
  );
}
