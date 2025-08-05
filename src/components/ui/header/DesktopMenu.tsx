"use client";

import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";

import { MenuIetms, menuFooterLinks } from "snappin/lib/menu";
import { InteractiveIcon } from "../icon/Icon";
import ZigZag from "../../../assets/vectors/zigzag.svg";
import Line from "../../../assets/vectors/Line.svg";

// ========== Menu Item with SubLinks ==========
const ExpandableDesktopMenuItem = ({
  label,
  tag,
  subLinks,
  isOpen,
  onToggle,
  footerLinks,
}: {
  label: string;
  tag: string;
  subLinks: { label: string; href: string }[];
  isOpen: boolean;
  onToggle: () => void;
  footerLinks?: { label: string; href: string }[];
}) => (
  <div className="flex items-center text-sm xl:text-base cursor-pointer select-none" onClick={onToggle}>
    <span>{label}</span>
    <InteractiveIcon
      name="iconamoon:arrow-down-2-duotone"
      className={clsx("transition-transform duration-300 mt-0.5", isOpen && "rotate-180")}
      size="sm"
    />
    {isOpen && (
      <div className="absolute left-0 top-0 translate-y-12 shadow-lg -translate-x-1/8 mt-2 min-w-72 z-50">
        <div className="bg-white rounded-sm rounded-b-none transition-all duration-300 opacity-100 translate-y-0">
          <ul className="py-6 px-2">
            <p className="capitalize px-2 font-bold mb-5 leading-7">{tag}</p>
            <Line className="w-full px-2 mb-3" />
            {subLinks.map((sub, i) => (
              <li key={i} className="py-2 px-2 rounded-sm hover:bg-brand-accent">
                <Link href={sub.href}>
                  <span className="block text-gray-700 transition-colors">
                    {sub.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Links */}
        <ul className="px-4 pt-0 py-2 bg-white">
          <Line className="w-full" />
          <div className="flex py-4 space-x-4">
            {footerLinks?.map((footerLink, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <Link href={footerLink.href}>
                  <li className="text-sm text-gray-600 hover:text-blue-500">{footerLink.label}</li>
                </Link>
                {idx !== footerLinks.length - 1 && <p>•</p>}
              </div>
            ))}
          </div>
        </ul>

        {/* Zigzag SVG */}
        <ZigZag className="w-full rotate-180 absolute bottom-0 left-0 translate-y-2" />
      </div>
    )}
  </div>
);

// ========== Simple Menu Link ==========
const MenuItemLink = ({ label, href }: { label: string; href: string }) => (
  <Link href={href}>
    <span className="cursor-pointer">{label}</span>
  </Link>
);

// ========== Main Desktop Menu ==========
export const DesktopMenu = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative flex justify-center items-center">
      <ul className="flex items-center font-dm-sans text-base tracking-tight space-x-4 font-semibold text-link">
        {MenuIetms.map((item, idx) => (
          <li key={idx} className="relative h-full justify-center">
            {item.href ? (
              <MenuItemLink label={item.label} href={item.href} />
            ) : item.subLinks ? (
              <ExpandableDesktopMenuItem
                label={item.label}
                tag={item.tag}
                subLinks={item.subLinks}
                isOpen={openIndex === idx}
                onToggle={() => toggleDropdown(idx)}
                footerLinks={menuFooterLinks}
              />
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
};
