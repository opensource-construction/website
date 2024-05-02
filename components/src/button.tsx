import Link from "next/link";
import React from "react";

export default function Button({
  href,
  label,
  type,
  icon = "right",
}: {
  href: string;
  label: string;
  type: "primary" | "secondary";
  icon?: "left" | "right";
}) {
  return (
    <div className="mb-4">
      <Link
        href={href}
        className={`${type === "secondary" ? "bg-osc-gray-500" : "bg-black font-bold text-white no-underline hover:text-white"} px-8 py-3`}
        target={type === "primary" ? "_blank" : "_self"}
        rel="noopener noreferrer"
      >
        <span>
          {icon === "left" ? (
            <span className="font-icon before:relative before:top-0.5 before:inline-block before:rotate-180 before:leading-none before:content-['A'] after:pr-4"></span>
          ) : null}
          <span>{label}</span>
          {icon === "right" ? (
            <span className="font-icon before:pr-4 after:relative after:top-0.5 after:inline-block after:leading-none after:content-['A']"></span>
          ) : null}
        </span>
      </Link>
    </div>
  );
}
