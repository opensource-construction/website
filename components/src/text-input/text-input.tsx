import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";

type TextInputProps = ComponentProps<"input"> &
  VariantProps<typeof variants> & {
    name: string;
    id?: string;
  };

export const variants = cva(
  [
    "form-input rounded-md font-bold focus:border-gray-500 p-5 placeholder:text-gray-400 focus:placeholder:text-gray-200",
  ],
  {
    variants: {
      variant: {
        default: ["border-gray-300 bg-gray-100 text-black"],
        disabled: ["border-gray-100 bg-gray-50"],
        required: ["border-gray-300 bg-gray-100 text-black"],
      },
    },
  },
);

export const TextInput = ({
  name,
  value,
  placeholder,
  id,
  variant = "default",
  disabled = false,
  ...props
}: TextInputProps) => {
  console.log(variant);
  return (
    <input
      name={name}
      id={id ? id : name}
      value={value}
      className={variants({ variant })}
      placeholder={placeholder}
      required={variant === "required"}
      disabled={variant === "disabled"}
      {...props}
    />
  );
};
