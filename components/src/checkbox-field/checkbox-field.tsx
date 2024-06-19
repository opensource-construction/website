import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import * as slugify from "slugify";

import { Checkbox } from "../checkbox/checkbox";

type CheckboxFieldProps = ComponentProps<"input"> &
  VariantProps<typeof variants> & {
    label: string;
  };

export const variants = cva(
  ["inline-flex items-center gap-1 text-sm font-medium"],
  {
    variants: {
      variant: {
        default: [],
        required: [],
        disabled: [],
      },
    },
  },
);

export const CheckboxField = ({
  label,
  placeholder,
  variant = "default",
  ...props
}: CheckboxFieldProps) => {
  return (
    <label className="mb-4 flex flex-row gap-1.5">
      <Checkbox
        id={slugify.default(label)}
        name={slugify.default(label)}
        variant={variant}
        {...props}
      />
      <span className={variants({ variant })}>
        {label}
        {variant === "required" ? "*" : undefined}
      </span>
    </label>
  );
};
