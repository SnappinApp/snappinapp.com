"use client";

import { useState } from "react";
import clsx from "clsx";
import { DefaultButton } from "../buttons/DefaultButton";
import { NavList } from "./NavList";
import ZigZag from "../../../assets/vectors/zigzag.svg";
import { IconButton } from "../buttons/IconButton";

// Circle background behind the menu (scales on toggle)
const ExpandingCircle = ({ isOpen }: { isOpen: boolean }) => (
  <div
    className={clsx(
      "absolute top-0 right-0 w-10 h-10 rounded-full -translate-y-12 translate-x-20 bg-white",
      "transition-all duration-300",
      isOpen ? "scale-[10] z-40" : "scale-0"
    )}
    style={{ transformOrigin: "top right" }}
  />
);

// The menu panel that appears over the screen
const MenuPanel = ({ isOpen }: { isOpen: boolean }) => (
  <div
    className={clsx(
      "absolute top-0 right-0 w-full bg-white text-black px-2 pt-18 pb-12",
      "flex flex-col items-center justify-center",
      "transition-opacity duration-200",
      isOpen ? "opacity-100 z-40" : "opacity-0 pointer-events-none"
    )}
  >
    <NavList />

    <CTAButtons />

    <ZigZag className="w-full rotate-180 absolute bottom-0 left-0 translate-y-2.5" />
  </div>
);

export const CTAButtons = () => {
  return (
    <div className="flex mt-8 lg:my-0">
      <DefaultButton
        label="Sign In"
        intent={'ghost'}
        size={"sm"}
        
      />
      <IconButton
        label="Join waitlist"
        size={"sm"}
        endIcon="lucide:arrow-right"
        circle
        iconSize="sm"
        iconBackground="button"
      />
    </div>
  );
};

// Main mobile menu component
export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center">
      <div className="relative z-50">
        <IconButton
          label=""
          intent={"ghost"}
          endIcon={isOpen ? "ion:close-outline" : "ion:reorder-two-outline"}
          iconSize="lg"
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </div>

      {/* Expanding animation circle */}
      <ExpandingCircle isOpen={isOpen} />

      {/* Mobile nav panel */}
      <MenuPanel isOpen={isOpen} />
    </nav>
  );
}
