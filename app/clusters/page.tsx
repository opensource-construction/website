import { Section } from "@/components";
import { ClusterCard } from "@/components/src/clusterCard";
import { ClustersPartial } from "@/components/src/partials/clusters";
import { loadClusters } from "@/lib/mdxParser/mdxParser";

export default function ClusterPage() {
  let clusters = loadClusters();
  return (
    <div className="mt-28 prose-h2:mt-0 md:mt-0 md:prose-h2:text-2xl md:prose-h3:text-xl">
      <Section>
        <ClustersPartial />
      </Section>
      <Section title="Clusters" className="mb-32">
        {clusters.map((cluster, index) => (
          <ClusterCard
            key={index}
            slug={cluster.slug}
            title={cluster.title}
            subtitle={cluster.description}
            image={cluster.metadata.image}
          />
        ))}
      </Section>
    </div>
  );
}
