import { cva, type VariantProps } from "class-variance-authority";

type TextInputProps = VariantProps<typeof variants> & {
  name: string;
  checked?: boolean;
  id?: string;
};

export const variants = cva(["rounded-xs p-2 form-checkbox"], {
  variants: {
    variant: {
      default: ["border-gray-300 bg-gray-100 text-black"],
      required: ["border-gray-300 bg-gray-100 text-black"],
      disabled: ["border-gray-100 bg-gray-50"],
    },
  },
});

export const Checkbox = ({
  name,
  checked = false,
  id,
  variant = "default",
  ...props
}: TextInputProps) => {
  return (
    <input
      name={name}
      id={id ? id : name}
      type="checkbox"
      className={variants({ variant })}
      required={variant === "required"}
      disabled={variant === "disabled"}
      defaultChecked={checked}
      {...props}
    />
  );
};
