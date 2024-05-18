import { ReactNode } from "react";
import Button from "./button";

export function Card({
  title,
  slug,
  type = "event",
  color = "white",
  subtitle,
  children,
}: {
  title: string;
  slug?: string;
  type?: "event" | "project";
  color?: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <div className={`bg-osc-${color}`}>
      <div className="p-5">
        <h4 className="mb-2 mt-0 text-xl font-bold">{title}</h4>
        <div className="mb-12">{subtitle}</div>
        {slug ? (
          type === "event" ? (
            <Button
              label="More about the event"
              href={`/events/${slug}`}
              type="primary"
            />
          ) : (
            <Button
              label="More about the project"
              href={`/projects/${slug}`}
              type="secondary"
            />
          )
        ) : null}
        {children}
      </div>
    </div>
  );
}
