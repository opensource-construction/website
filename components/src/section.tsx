import { PropsWithChildren } from "react";

type SectionProps = {
  title?: string;
  color?: string;
  className?: string;
};

export function Section(props: PropsWithChildren<SectionProps>) {
  return (
    <section
      className={`${props.color ? `bg-osc-${props.color}` : ""} md:px-18 prose mx-auto min-h-48 max-w-screen-xl px-28 py-12 ${props.className}`}
    >
      {props.title ? <h3 className="text-xl">{props.title}</h3> : null}
      {props.children}
    </section>
  );
}
