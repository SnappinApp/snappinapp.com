import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const button = cva(
  "flex items-center font-dm-sans justify-center cursor-pointer font-semibold tracking-tight transition-all duration-200 rounded-full focus:outline-none gap-x-2 w-full",
  {
    variants: {
      intent: {
        primary: "bg-brand-accent text-brand-primary",
        secondary: "bg-white text-brand-primary border border-brand-primary",
        ghost: "bg-transparent text-brand-primary",
        outline: "bg-transparent text-brand-primary border border-brand-accent",
      },
      size: {
        sm: "text-sm h-auto py-3 px-6",
        md: "text-base h-auto px-10",
        lg: "text-lg h-auto px-8",
      },
      iconRight: {
        true: "justify-between pl-6 pr-5",
        false: "",
      },
      disabled: {
        true: "cursor-not-allowed opacity-50",
        false: "",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "md",
      iconRight: false,
      disabled: false,
    },
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button> & {
    label?: string;
    className?: string;
    isLoading?: boolean;
  };

export const DefaultButton: React.FC<ButtonProps> = ({
  intent = "primary",
  size = "md",
  label,
  disabled = false,
  className,
  iconRight = false,
  isLoading = false,
  ...rest
}) => {
  return (
    <button
      disabled={disabled || isLoading}
      className={twMerge(clsx(button({ intent, size, disabled, iconRight, className })))}
      {...rest}
    >
      {isLoading && <span className="animate-spin">⏳</span>}
      {label && <span className="truncate">{label}</span>}
    </button>
  );
};