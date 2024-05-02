import { PropsWithChildren } from "react";
import * as slugify from "slugify";

type SectionProps = {
  title?: string;
  color?: string;
  className?: string;
};

export function Section(props: PropsWithChildren<SectionProps>) {
  return (
    <section
      id={props.title ? slugify.default(props.title).toLowerCase() : ""}
      className={`${props.color ? `bg-osc-${props.color}` : ""} min-h-48 w-full py-12 ${props.className}`}
    >
      <div className="md:px-18 prose mx-auto max-w-screen-xl px-28">
        {props.title ? <h3 className="text-xl">{props.title}</h3> : null}
        {props.children}
      </div>
    </section>
  );
}
