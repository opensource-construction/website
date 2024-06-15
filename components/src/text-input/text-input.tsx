import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";

type TextInputProps = ComponentProps<"input"> &
  VariantProps<typeof variants> & {
    name: string;
    id?: string;
  };

export const variants = cva(
  [
    "form-input transition-all duration-300 appearance-none rounded-md font-bold focus:bg-white focus:border-gray-500 p-5 placeholder:text-gray-400 focus:placeholder:text-gray-200",
  ],
  {
    variants: {
      variant: {
        default: [
          "border-gray-300 bg-gray-100 hover:bg-white hover:border-gray-500 text-black",
        ],
        disabled: ["border-gray-100 bg-gray-50"],
        required: [
          "border-gray-300 bg-gray-100 hover:bg-white hover:border-gray-500 text-black",
        ],
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
