export type PartnerProps = {
  name: string;
  logo: string;
  url: string;
  tier: "bronze" | "silver" | "gold" | "network_partner" | "community_partner";
  type: "community" | "industry" | "academia";
  size?: "small" | "medium" | "large";
  className?: string;
};

const sizeClasses = {
  small: "h-12 sm:h-14",
  medium: "h-16 sm:h-20",
  large: "h-24 sm:h-32",
} as const;

const tierClasses = {
  gold: "border-2 bg-white sm:hover:shadow-xl border-[hsl(50,80%,60%)] sm:hover:border-[hsl(50,80%,50%)]",
  silver:
    "border-2 bg-white sm:hover:shadow-lg border-[hsl(0,0%,75%)] sm:hover:border-[hsl(0,0%,65%)]",
  bronze:
    "border-2 bg-white shadow-sm sm:hover:shadow-md border-[hsl(30,60%,60%)] sm:hover:border-[hsl(30,60%,50%)]",
  network_partner:
    "border bg-white sm:hover:shadow-sm border-gray-200 sm:hover:border-primary-500",
  community_partner:
    "border bg-white sm:hover:shadow-sm border-gray-200 sm:hover:border-primary-500",
};

const PartnerCard = ({
  url,
  logo,
  name,
  size = "medium",
  className = "",
  tier,
}: PartnerProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`block  transition-all duration-300 ease-in-out ${tierClasses[tier]} ${className}`}
    >
      <div className="flex  flex-col items-center justify-center gap-2 p-4 sm:p-6">
        <img
          src={`/images/partners/${logo}`}
          alt={name}
          className={`object-contain transition-all duration-300 ${sizeClasses[size]}`}
        />
        {/* <span className="text-gray-600 text-center text-xs opacity-0 transition-opacity duration-300 hover:opacity-100 sm:text-sm">
          {name}
        </span> */}
      </div>
    </a>
  );
};

export default PartnerCard;
