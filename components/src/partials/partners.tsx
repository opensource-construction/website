import { useMemo } from "react";
import PartnerCard, { PartnerProps } from "../partnerCard";

import goldPartners from "@/content/partners/gold-partners.json";
import silverPartners from "@/content/partners/silver-partners.json";
import bronzePartners from "@/content/partners/bronze-partners.json";
import networkPartners from "@/content/partners/network-partners.json";

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

  return (
    <section className="mb-5">
      <p className="text-gray-600 mb-10 text-sm sm:text-base">
        Working together to advance open source construction
      </p>

      <div className="space-y-16 sm:space-y-10">
        {/* Gold Partners */}
        {partnersByTier.gold.length > 0 && (
          <>
            <h3 className="text-gray-700 mb-6 text-xl font-semibold sm:mb-10 sm:text-2xl">
              Gold Partners
            </h3>
            <div className="grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2">
              {partnersByTier.gold.map((partner) => (
                <PartnerCard
                  key={partner.name}
                  {...partner}
                  size="large"
                  className="w-48 sm:w-full"
                />
              ))}
            </div>
            <hr className="border-solid opacity-10" />
          </>
        )}

        {/* Silver Partners */}
        {partnersByTier.silver.length > 0 && (
          <>
            <h3 className="text-gray-700 mb-6 text-xl font-semibold sm:mb-10 sm:text-2xl">
              Silver Partners
            </h3>
            <div className="grid grid-cols-2 place-items-center gap-6 sm:grid-cols-3 md:grid-cols-4">
              {partnersByTier.silver.map((partner) => (
                <PartnerCard
                  key={partner.name}
                  {...partner}
                  size="medium"
                  className="w-36 sm:w-full"
                />
              ))}
            </div>
            <hr className="border-solid opacity-10" />
          </>
        )}

        {/* Bronze Partners */}
        {partnersByTier.bronze.length > 0 && (
          <>
            <h3 className="text-gray-700 mb-6 text-xl font-semibold sm:mb-10 sm:text-2xl">
              Bronze Partners
            </h3>
            <div className="grid grid-cols-2 place-items-center gap-6 sm:grid-cols-3 md:grid-cols-5">
              {partnersByTier.bronze.map((partner) => (
                <PartnerCard
                  key={partner.name}
                  {...partner}
                  size="small"
                  className="w-36 sm:w-full"
                />
              ))}
            </div>
            <hr className="border-solid opacity-10" />
          </>
        )}

        {/* Network Partners */}
        {partnersByTier.network.length > 0 && (
          <>
            <h3 className="text-gray-700 mb-6 text-xl font-semibold sm:mb-10 sm:text-2xl">
              Network Partners
            </h3>
            <div className="grid grid-cols-2 place-items-center gap-6 sm:grid-cols-3 md:grid-cols-6">
              {partnersByTier.network.map((partner) => (
                <PartnerCard
                  key={partner.name}
                  {...partner}
                  size="small"
                  className="w-36 sm:w-full"
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
