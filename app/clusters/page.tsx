import { getPosts, Section } from "@/components";
import { ClusterCard } from "@/components/src/clusterCard";
import { ClustersPartial } from "@/components/src/partials/clusters";

export default function ClusterPage() {
  let clusters = getPosts("clusters");
  return (
    <div className="mt-28 prose-h2:mt-0 md:mt-0 md:prose-h2:text-2xl md:prose-h3:text-xl">
      <Section>
        <ClustersPartial />
      </Section>
      <Section title="Clusters" className="mb-32">
        {clusters.map(
          ({ slug, metadata: { title, description, image } }, index) => (
            <ClusterCard
              key={index}
              slug={slug}
              title={title}
              subtitle={description}
              image={image}
            />
          ),
        )}
      </Section>
    </div>
  );
}
