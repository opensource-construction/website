import Link from "next/link";
import React, { ReactElement } from "react";

export default function Button({
  href,
  label,
  type,
  icon = "right",
  children,
}: {
  href: string;
  label?: string;
  type: "primary" | "secondary";
  icon?: "left" | "right";
  children?: string;
}) {
  return (
    <div className="mt-8">
      <Link
        href={href}
        className={`${type === "secondary" ? "bg-osc-gray-500" : "bg-black pl-8 text-white hover:text-white"} py-3 pr-8 font-bold no-underline`}
        target={href.startsWith("http") ? "_blank" : "_self"}
        rel="noopener noreferrer"
      >
        <span>
          {icon === "left" ? (
            <span className="pl-8 font-icon before:relative before:top-0.5 before:inline-block before:rotate-180 before:leading-none before:content-['A'] after:pr-4"></span>
          ) : null}
          {children ? children : <span>{label}</span>}
          {icon === "right" ? (
            <span className="font-icon before:pr-4 after:relative after:top-0.5 after:inline-block after:leading-none after:content-['A']"></span>
          ) : null}
        </span>
      </Link>
    </div>
  );
}
