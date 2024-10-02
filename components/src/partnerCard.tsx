import React from "react";

export type PartnerProps = {
  name: string;
  logo: string;
  url: string;
  type: string; //"community" | "industry" | "academia"
};
const PartnerCard = (partnerProps: PartnerProps) => {
  return (
    <a href={partnerProps.url} target="_blank">
      <div>
        <img
          src={`images/partners/${partnerProps.logo}`}
          alt={partnerProps.name}
          className="m-6 h-16 min-w-16 max-w-32 object-contain"
        />
      </div>
    </a>
  );
};

export default PartnerCard;
