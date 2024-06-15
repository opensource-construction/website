import Link from "next/link";
import { MouseEventHandler } from "react";

export const Button = ({
  type,
  target,
  label,
  icon = "right",
  children,
}: {
  type: "primary" | "secondary" | "sidebar" | "submit";
  target?: string | Function;
  label?: string;
  icon?: "left" | "right";
  children?: string;
}) => {
  return (
    <div className="mt-4">
      <Link
        href={type !== "sidebar" && typeof target === "string" ? target : ""}
        scroll={type === "sidebar" ? false : true}
        onClick={
          type === "sidebar" && typeof target === "function"
            ? (target as MouseEventHandler)
            : undefined
        }
        className={`${["secondary", "sidebar"].includes(type) ? "bg-osc-gray-500" : "bg-black pl-3 text-white hover:text-white md:pl-8"} inline-block py-3 pr-3 text-sm font-bold no-underline md:pr-8 md:text-base`}
        target={
          target && typeof target === "string" && target.startsWith("http")
            ? "_blank"
            : "_self"
        }
        rel="noopener noreferrer"
      >
        {icon === "left" ? (
          <span className="pl-8 font-icon before:relative before:top-0.5 before:inline-block before:rotate-180 before:leading-none before:content-['A'] after:pr-4"></span>
        ) : null}
        {children ? children : <span>{label}</span>}
        {icon === "right" ? (
          <span className="font-icon before:pr-4 after:relative after:top-0.5 after:inline-block after:leading-none after:content-['A']"></span>
        ) : null}
      </Link>
    </div>
  );
};
