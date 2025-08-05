import { Icon } from "@iconify/react/dist/iconify.js";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

const iconVariants = cva("inline-block font-semibold", {
  variants: {
    intent: {
      primary: "text-brand-primary",
      secondary: "text-indigo-600",
      success: "text-green-500",
      danger: "text-red-500",
      black: "text-blueGray-500",
    },
    animation: {
      none: "",
      spin: "animate-spin",
      bounce: "animate-bounce",
      wiggle: "animate-wiggle",
    },
    background: {
      button: "text-white bg-brand-primary",
      standalone: "text-brand-primary", // transparent background
    },
  },
  defaultVariants: {
    intent: "primary",
    animation: "none",
    background: "standalone",
  },
});

const iconSize = {
  sm: "w-6 h-6 p-0.5",
  md: "w-8 h-8",
  lg: "w-10 h-10",
  responsive: "w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8",
} as const;

interface InteractiveIconProps extends VariantProps<typeof iconVariants> {
  name: string;
  size?: keyof typeof iconSize;
  className?: string;
  circle?: boolean;
  background?: "button" | "standalone"; // NEW prop
}

export const InteractiveIcon: React.FC<InteractiveIconProps> = ({
  name,
  intent = "primary",
  size = "responsive",
  animation = "none",
  background = "standalone",
  className,
  circle = false,
}) => {
  return (
    <div
      className={twMerge(
        clsx(
          circle && "rounded-full", // 50% radius + some padding
          iconVariants({ intent, animation, background }),
          iconSize[size],
          className,
          background == "button" ? "translate-x-1.5" : ""
        )
      )}
    >
      <Icon icon={name} className={clsx("w-full h-full")} />
    </div>
  );
};
