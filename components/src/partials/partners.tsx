import { useMemo } from "react";
import PartnerCard, { PartnerProps } from "../partnerCard";

import goldPartners from "@/content/partners/gold-partners.json";
import silverPartners from "@/content/partners/silver-partners.json";
import bronzePartners from "@/content/partners/bronze-partners.json";
import networkPartners from "@/content/partners/network-partners.json";

const tierConfig = {
  gold: {
    title: "Gold Partners",
    size: "large" as const,
    gridCols: "grid-cols-1 sm:grid-cols-2",
    cardWidth: "w-48",
  },
  silver: {
    title: "Silver Partners",
    size: "medium" as const,
    gridCols: "grid-cols-2 sm:grid-cols-3 md:grid-cols-4",
    cardWidth: "w-36",
  },
  bronze: {
    title: "Bronze Partners",
    size: "small" as const,
    gridCols: "grid-cols-2 sm:grid-cols-3 md:grid-cols-5",
    cardWidth: "w-36",
  },
  network: {
    title: "Network Partners",
    size: "small" as const,
    gridCols: "grid-cols-2 sm:grid-cols-3 md:grid-cols-6",
    cardWidth: "w-36",
  },
};

const PartnerSection = ({
  partners,
  tier,
  isLast,
}: {
  partners: PartnerProps[];
  tier: keyof typeof tierConfig;
  isLast: boolean;
}) => {
  if (partners.length === 0) return null;

  const config = tierConfig[tier];

  return (
    <div>
      <h3 className="text-gray-700 mb-6 text-center text-xl font-semibold sm:mb-10 sm:text-left sm:text-2xl">
        {config.title}
      </h3>
      <div className={`grid place-items-center gap-6 ${config.gridCols}`}>
        {partners.map((partner) => (
          <PartnerCard
            key={partner.name}
            {...partner}
            size={config.size}
            className={`${config.cardWidth} sm:w-full`}
          />
        ))}
      </div>
      {!isLast && <hr className="my-5 border-solid opacity-10" />}
    </div>
  );
};

export function PartnersPartial() {
  const partnersByTier = useMemo(
    () => ({
      gold: goldPartners as PartnerProps[],
      silver: silverPartners as PartnerProps[],
      bronze: bronzePartners as PartnerProps[],
      network: networkPartners as PartnerProps[],
    }),
    [],
  );

  const tiers = Object.keys(partnersByTier) as Array<
    keyof typeof partnersByTier
  >;

  return (
    <section className="mb-5">
      <p className="text-gray-600 mb-10 text-sm sm:text-base">
        Working together to advance open source construction
      </p>
      <div className="space-y-16 sm:space-y-10">
        {tiers.map((tier, index) => (
          <PartnerSection
            key={tier}
            partners={partnersByTier[tier]}
            tier={tier}
            isLast={index === tiers.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
