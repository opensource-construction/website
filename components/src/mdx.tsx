import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
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

export async function CustomMDX(props: MDXRemoteProps) {
  const MDXComponent = MDXRemote as any;

  return (
    <>
      <MDXComponent
        {...props}
        components={{ ...components, ...(props.components || {}) }}
      />
    </>
  );
}
