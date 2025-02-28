import { MDXRemote } from "next-mdx-remote/rsc";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import { Button } from "./button";
import Link from "next/link";

function CustomLink(props: React.ComponentProps<"a">) {
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

let components = {
  a: CustomLink,
  Button,
};

export function CustomMDX(props: MDXRemoteProps) {
  return (
    <>
      {/* @ts-expect-error - MDXRemote is a valid RSC component even though TypeScript doesn't recognize it */}
      <MDXRemote
        {...props}
        components={{ ...components, ...(props.components || {}) }}
      />
    </>
  );
}
