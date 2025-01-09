export type PartnerProps = {
  name: string;
  logo: string;
  url: string;
  type: "community" | "industry" | "academia";
  size?: "small" | "medium" | "large";
  className?: string;
};

const sizeClasses = {
  small: "h-10 sm:h-12",
  medium: "h-12 sm:h-16",
  large: "h-16 sm:h-20",
};

const PartnerCard = ({
  url,
  logo,
  name,
  size = "medium",
  className = "",
}: PartnerProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`block bg-white p-3 transition-all duration-200  sm:p-4 ${className}`}
    >
      <div className="flex h-full items-center justify-center">
        <img
          src={`images/partners/${logo}`}
          alt={name}
          className={`object-contain transition-opacity duration-200 group-hover:opacity-90 ${sizeClasses[size]}`}
        />
      </div>
    </a>
  );
};

export default PartnerCard;
