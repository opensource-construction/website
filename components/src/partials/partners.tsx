import { useMemo } from "react";
import partners from "@/content/partners.json";
import PartnerCard, { PartnerProps } from "../partnerCard";

export function PartnersPartial() {
  const partnersByType = useMemo(() => {
    return {
      community: partners.filter(
        (p): p is PartnerProps => p.type === "community",
      ),
      industry: partners.filter(
        (p): p is PartnerProps => p.type === "industry",
      ),
      academia: partners.filter(
        (p): p is PartnerProps => p.type === "academia",
      ),
    };
  }, []);

  return (
    <section className="mb-5">
      <p className="text-gray-600 mb-10 text-sm sm:text-base">
        Working together to advance open source construction
      </p>

      <div className=" space-y-16 sm:space-y-10">
        <h3 className="text-gray-700 mb-6 text-xl font-semibold sm:mb-10 sm:text-2xl">
          Industry Partners
        </h3>
        <div className="grid grid-cols-2 place-items-center gap-6 sm:grid-cols-2 md:grid-cols-4">
          {partnersByType.industry.map((partner) => (
            <PartnerCard
              key={partner.logo}
              {...partner}
              size="large"
              className="w-36 sm:w-full"
            />
          ))}
        </div>

        <hr className="border-solid  opacity-10" />

        <h3 className="text-gray-700 mb-6 text-xl font-semibold sm:mb-10 sm:text-2xl">
          Academic Partners
        </h3>
        <div className="grid grid-cols-2 place-items-center gap-6 sm:grid-cols-3 md:grid-cols-4">
          {partnersByType.academia.map((partner) => (
            <PartnerCard
              key={partner.logo}
              {...partner}
              size="medium"
              className="w-36 sm:w-full"
            />
          ))}
        </div>

        <hr className="border-solid  opacity-10" />

        <h3 className="text-gray-700 mb-6 text-xl font-semibold sm:mb-10 sm:text-2xl">
          Community Partners
        </h3>
        <div className="grid grid-cols-2 place-items-center gap-6 sm:grid-cols-3 sm:gap-8 lg:grid-cols-6">
          {partnersByType.community.map((partner) => (
            <PartnerCard
              key={partner.logo}
              {...partner}
              size="small"
              className="w-36 sm:w-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
