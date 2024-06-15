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
  };

export const variants = cva(
  ["inline-flex items-center gap-1 text-sm font-medium"],
  {
    variants: {
      required: {
        true: [
          "after:bg-accent-500 after:h-1.5 after:w-1.5 after:rounded-full",
        ],
      },
    },
  },
);

export const TextField = ({
  label,
  value,
  details,
  placeholder,
  type = "text",
  required = false,
  disabled = false,
  ...props
}: TextFieldProps) => {
  return (
    <label className="mb-4 flex flex-col gap-1.5">
      <span className={variants({ required })}>{label}</span>

      <TextInput
        id={slugify.default(label)}
        name={slugify.default(label)}
        value={value}
        type={type}
        placeholder={placeholder ? placeholder : label}
        disabled={disabled}
        {...props}
      />
      {details && <span className="text-xs text-slate-500">{details}</span>}
    </label>
  );
};
