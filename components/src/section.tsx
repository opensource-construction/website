import { PropsWithChildren } from "react";
import * as slugify from "slugify";

type SectionProps = {
  title?: string;
  color?: string;
  className?: string;
  fullWidth?: boolean;
};

export function Section(props: PropsWithChildren<SectionProps>) {
  return (
    <section
      id={props.title ? slugify.default(props.title).toLowerCase() : ""}
      className={`${props.color ? `bg-osc-${props.color}` : ""} ${props.fullWidth ? null : "px-4"}`}
    >
      <div>
        {props.title ? (
          <h3 className="py-6 text-xl font-bold">{props.title}</h3>
        ) : null}
        {props.children}
      </div>
    </section>
  );
}
