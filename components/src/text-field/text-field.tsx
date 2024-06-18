import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import * as slugify from "slugify";

import { TextInput } from "../text-input";

type TextFieldProps = ComponentProps<"input"> &
  VariantProps<typeof variants> & {
    label: string;
    placeholder?: string;
    details?: string;
    type?: "text" | "email";
    size?: "small" | "medium";
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

export const TextField = ({
  label,
  value,
  details,
  placeholder,
  variant = "default",
  type = "text",
  size = "small",
  required = false,
  disabled = false,
  ...props
}: TextFieldProps) => {
  return (
    <label className="mb-4 flex flex-col gap-1.5">
      <span className={variants({ variant })}>
        {label}
        {variant === "required" ? "*" : undefined}
      </span>

      <TextInput
        id={slugify.default(label)}
        name={slugify.default(label)}
        value={value}
        variant={variant}
        type={type}
        size={size}
        placeholder={placeholder ? placeholder : label}
        disabled={disabled}
        {...props}
      />
      {details && <span className="text-slate-500 text-xs">{details}</span>}
    </label>
  );
};
