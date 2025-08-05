import Link from "next/link";
import { Icon } from "@iconify/react";
import MobileMenu, { CTAButtons } from "../ui/header/MobileMenu";
import { DesktopMenu } from "../ui/header/DesktopMenu";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full flex justify-center h-auto items-center bg-background">
      <div className="container max-w-screen-xl w-full flex items-center justify-between px-4 py-4 relative">
        {/* Logo Left */}
        <div className="flex z-50 min-w-[250px]">
          <Link href="/">
            <Image
              src="/Snappin Logo.png"
              alt="Snappin Logo"
              width={100}
              height={100}
              className="w-[94px] h-[26px]"
            />
          </Link>
        </div>

        {/* Centered Nav - desktop only */}
        <div className=" hidden lg:flex">
          <DesktopMenu />
        </div>

        {/* CTA Buttons - right */}
        <div className="hidden lg:flex items-center gap-4">
          <CTAButtons />
        </div>

        {/* Mobile Menu - shown only on small screens */}
        <div className="lg:hidden flex items-center">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
