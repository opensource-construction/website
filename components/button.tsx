import Link from "next/link";

export default function Button({
  href,
  label,
  type,
}: {
  href: string;
  label: string;
  type: "primary" | "secondary";
}) {
  return (
    <div className="mb-16">
      <Link
        href={href}
        className={`${type === "secondary" ? "bg-gray-100" : "bg-black text-white"} px-8 py-4`}
      >
        {label}
      </Link>
    </div>
  );
}
