import { PropsWithChildren } from "react";

type SectionProps = {
  color?: string | null;
};

export function Section(props: PropsWithChildren<SectionProps>) {
  return (
    <section
      className={`${props.color ? `bg-osc-${props.color}` : ""} md:px-18 prose mx-auto min-h-48 max-w-screen-xl px-28`}
    >
      {props.children}
    </section>
  );
}
