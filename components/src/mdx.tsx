import Link from "next/link";

import { MDXRemote } from "next-mdx-remote/rsc";
import { Button } from "./button";

import type { MDXRemoteProps } from "next-mdx-remote/rsc";

/**
 * Renders a custom link component.
 *
 * @param {React.ComponentProps<"a">} props - The props for the link component.
 * @returns {JSX.Element} The rendered link component.
 */
function CustomLink(props: React.ComponentProps<"a">): JSX.Element {
  const linkStyle = "font-bold text-slate-700 no-underline hover:text-black";

  if (props.href && props.href.startsWith("/")) {
    return (
      <Link href={props.href} className={linkStyle} {...props}>
        {props.children}
      </Link>
    );
  }

  if (props.href && props.href.startsWith("#")) {
    return <a className={linkStyle} {...props} />;
  }

  return (
    <a
      className={linkStyle}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  );
}

/**
 * Defines the components object that maps component names to their corresponding components.
 * @type {Object}
 */
let components: object = {
  a: CustomLink,
  Button,
};

/**
 * Renders the custom MDX component.
 *
 * @param props - The props for the MDX component.
 * @returns The rendered MDX component.
 */
export function CustomMDX(props: MDXRemoteProps) {
  return (
    <>
      <MDXRemote
        {...props}
        components={{ ...components, ...(props.components || {}) }}
      />
    </>
  );
}
