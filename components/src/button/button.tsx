"use client";

import { cva, type VariantProps } from "class-variance-authority";

import Link from "next/link";
import { MouseEventHandler } from "react";
import { useFormStatus } from "react-dom";

const isValidUrl = (url: string): boolean => {
  if (!url) return false;
  // Allow relative paths
  if (url.startsWith("/")) return true;
  try {
    const parsed = new URL(url);
    return ["http:", "https:"].includes(parsed.protocol);
  } catch {
    return false;
  }
};

export const button = cva(
  ["inline-block pr-3 md:pr-8 text-sm font-bold no-underline md:text-base"],
  {
    variants: {
      type: {
        primary: ["bg-black text-white hover:text-white"],
        secondary: ["bg-slate-300"],
        card: ["bg-slate-300"],
        sidebar: ["bg-slate-300"],
        submit: [
          "disabled:bg-red-600 bg-black md:pr-8 text-white hover:text-white disabled:text-white aria-disabled:cursor-not-allowed aria-disabled:opacity-50",
        ],
      },
      size: {
        default: ["py-3"],
        small: ["py-2"],
      },
      icon: {
        left: [],
        right: [],
      },
    },
    compoundVariants: [
      {
        type: ["primary", "secondary", "submit"],
        icon: "right",
        className: ["pl-8"],
      },
    ],
  },
);

export const iconClasses = cva(["font-icon"], {
  variants: {
    icon: {
      left: [
        "pl-8 before:relative before:top-0.5 before:inline-block before:rotate-180 before:leading-none before:content-['A'] after:pr-4",
      ],
      right: [
        "before:pr-4 after:relative after:top-0.5 after:inline-block after:leading-none after:content-['A']",
      ],
    },
  },
});

export const Button = ({
  type = "secondary",
  size = "default",
  target,
  label,
  icon = "right",
  children,
}: {
  type: "primary" | "secondary" | "sidebar" | "card" | "submit";
  size?: "default" | "small";
  target?: string | Function;
  label?: string;
  icon?: "left" | "right";
  children?: string;
}) => {
  const { pending } = useFormStatus();

  const sanitizedHref =
    typeof target === "string" ? (isValidUrl(target) ? target : "/") : "";

  return (
    <div className="mt-4">
      {type === "submit" ? (
        <button
          type="submit"
          disabled={pending}
          aria-disabled={pending}
          className={button({ type, size, icon })}
        >
          {icon === "left" ? (
            <span className={iconClasses({ icon })}></span>
          ) : null}

          {children ? children : <span>{label}</span>}

          {icon === "right" ? (
            <span className={iconClasses({ icon })}></span>
          ) : null}
        </button>
      ) : (
        <Link
          href={
            type !== "sidebar" && typeof target === "string"
              ? sanitizedHref
              : ""
          }
          scroll={type === "sidebar" ? false : true}
          onClick={
            type === "sidebar" && typeof target === "function"
              ? (target as MouseEventHandler)
              : undefined
          }
          className={button({ type, size, icon })}
          target={
            target && typeof target === "string" && target.startsWith("http")
              ? "_blank"
              : "_self"
          }
          rel="noopener noreferrer"
        >
          {icon === "left" ? (
            <span className={iconClasses({ icon })}></span>
          ) : null}

          {children ? children : <span>{label}</span>}

          {icon === "right" ? (
            <span className={iconClasses({ icon })}></span>
          ) : null}
        </Link>
      )}
    </div>
  );
};
