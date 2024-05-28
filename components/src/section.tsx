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
      className={`${props.color ? `bg-osc-${props.color}` : ""} ${props.fullWidth ? "lg:px-10" : "px-4 md:px-12 lg:px-28"} md:py-6`}
    >
      <div className="xl:m-auto xl:max-w-6xl">
        {props.title ? (
          <h3 className="md:text-3xl py-6 text-xl font-bold">{props.title}</h3>
        ) : null}
        {props.children}
      </div>
    </section>
  );
}
