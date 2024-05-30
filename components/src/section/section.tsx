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
      className={`${props.color ? `bg-${props.color}` : ""} ${props.fullWidth ? "lg:px-10" : "px-4 md:px-12 lg:px-28"} md:py-6`}
    >
      <div className="xl:m-auto xl:max-w-6xl">
        {props.title ? (
          <h3 className="py-6 text-xl font-bold md:text-3xl">{props.title}</h3>
        ) : null}
        {props.children}
      </div>
    </section>
  );
}
