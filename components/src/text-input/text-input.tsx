import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";

type TextInputProps = ComponentProps<"input"> &
  VariantProps<typeof variants> & {
    id: string;
    name: string;
    type?: string;
  };

export const variants = cva(
  [
    "rounded-md border-gray-300 bg-gray-100 p-5 placeholder:text-gray-400 focus:placeholder:text-gray-200",
  ],
  {
    variants: {},
  },
);

export const TextInput = ({
  id,
  name,
  value,
  placeholder,
  type = "text",
  disabled = false,
  ...props
}: TextInputProps) => {
  return (
    <input
      name={name}
      id={id}
      value={value}
      type={type}
      className={variants()}
      placeholder={placeholder}
      disabled={disabled}
      {...props}
    />
  );
};
