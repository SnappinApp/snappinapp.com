import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { InteractiveIcon } from "../icon/Icon";

const button = cva(
  "inline-flex font-dm-sans items-center cursor-pointer justify-center rounded-md font-medium transition-colors focus:outline-none rounded-full disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      intent: {
        primary: "bg-brand-accent text-brand-primary",
        secondary: "bg-white text-brand-primary border border-brand-primary",
        ghost: "bg-transparent text-brand-primary",
        outline: "bg-transparent text-brand-primary border border-brand-accent",
      },
      size: {
        sm: "h-auto px-5 pl-8 py-3 font-semibold tracking-tight text-sm",
        md: "h-auto px-4 text-base",
        lg: "h-auto px-6 text-lg",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed",
        false: "",
      },
      iconRight: {
        true: "flex-row-reverse gap-2",
        false: "gap-2",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "md",
      disabled: false,
      iconRight: false,
    },
  }
);

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button> & {
    label?: string;
    startIcon?: string;
    endIcon?: string;
    isLoading?: boolean;
    className?: string;
    circle?: boolean;
    iconBackground?: "button" | "standalone";
    iconSize?: "sm" | "md" | "lg" | "responsive";
  };

export const IconButton: React.FC<IconButtonProps> = ({
  intent = "primary",
  size = "md",
  label,
  disabled = false,
  startIcon,
  className,
  endIcon,
  circle,
  iconBackground,
  iconSize = "md",
  iconRight = false,
  isLoading = false,
  ...rest
}) => {
  return (
    <button
      disabled={disabled || isLoading}
      className={twMerge(
        clsx(button({ intent, size, disabled, iconRight, className }))
      )}
      {...rest}
    >
      {startIcon && !isLoading && (
        <InteractiveIcon
          name={startIcon}
          intent={intent === "secondary" ? "secondary" : "primary"}
          size={iconSize}
        />
      )}

      {isLoading && (
        <InteractiveIcon
          name="gg:spinner"
          intent={intent === "secondary" ? "secondary" : "primary"}
          size={iconSize}
          animation="spin"
          className="truncate"
        />
      )}

      {label && <span className="truncate">{label}</span>}

      {endIcon && !isLoading && (
        <InteractiveIcon
          name={endIcon}
          intent={intent === "secondary" ? "secondary" : "primary"}
          size={iconSize}
          circle={circle}
          background={iconBackground}
        />
      )}
    </button>
  );
};
