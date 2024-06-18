import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";

type TextInputProps = ComponentProps<"input"> &
  VariantProps<typeof variants> & {
    name: string;
    id?: string;
    size?: "small" | "medium";
  };

export const variants = cva(
  [
    "form-input transition-all duration-300 appearance-none rounded-md font-bold focus:bg-white focus:border-slate-500 p-5 placeholder:text-slate-400 focus:placeholder:text-slate-200",
  ],
  {
    variants: {
      variant: {
        default: [
          "border-slate-500 bg-slate-100 hover:bg-white hover:border-slate-700 text-black",
        ],
        disabled: ["border-slate-100 bg-slate-50"],
        required: [
          "border-slate-500 bg-slate-100 hover:bg-white hover:border-slate-700 text-black",
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
  size = "small",
  disabled = false,
  ...props
}: TextInputProps) => {
  return size && size !== "small" ? (
    <textarea
      name={name}
      id={id ? id : name}
      value={value}
      rows={10}
      className={variants({ variant })}
      placeholder={placeholder}
      required={variant === "required"}
      disabled={variant === "disabled"}
      {...props}
    ></textarea>
  ) : (
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
