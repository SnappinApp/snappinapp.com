import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";
import Line from "../../../assets/vectors/Line.svg";
import { MenuIetms } from "snappin/lib/menu";
import { InteractiveIcon } from "../icon/Icon";

// ========== Menu Item with SubMenu ==========
const ExpandableMenuItem = ({
  label,
  subLinks,
  isOpen,
  onToggle,
}: {
  label: string;
  subLinks: { label: string; href: string }[];
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <div>
    <div
      onClick={onToggle}
      className={clsx(
        "mt-2 px-2 py-3 rounded-sm font-semibold",
        "duration-200 hover:bg-brand-accent",
        "flex justify-between cursor-pointer items-center"
      )}
    >
      {label}
      <InteractiveIcon
        name={isOpen ? "ic:sharp-minus" : "ion:add-outline"}
        className="transition-transform duration-300"
        size="sm"
      />
    </div>

    <div
      className={clsx(
        "overflow-hidden transition-all duration-300 ease-in-out",
        isOpen ? "max-h-96 opacity-100" : "max-h-0"
      )}
    >
      <ul>
        {subLinks.map((child, i) => (
          <SubMenuLink key={i} label={child.label} href={child.href} />
        ))}
      </ul>
    </div>
  </div>
);

// ========== Direct Link Item ==========
const MenuItemLink = ({ label, href }: { label: string; href: string }) => (
  <Link
    href={href}
    className={clsx(
      "w-full my-2 px-2 py-2 font-semibold rounded-sm hover:bg-brand-accent",
      "flex justify-between cursor-pointer duration-200 items-center"
    )}
  >
    {label}
  </Link>
);

// ========== Submenu Link ==========
export const SubMenuLink = ({ label, href }: { label: string; href: string }) => (
  <li className="py-2 px-2 last:mb-2 first:mt-0 duration-200 text-gray-700 hover:bg-brand-accent rounded-sm">
    <Link href={href}>{label}</Link>
  </li>
);

// ========== Final NavList ==========
export const NavList = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSubMenu = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <ul className="place-items-start font-medium text-base font-dm-sans">
      {MenuIetms.map((item, idx) => (
        <li key={idx}>
          <Line className={clsx("w-full", item.subLinks && "mt-2")} />

          {item.href ? (
            <MenuItemLink label={item.label} href={item.href} />
          ) : item.subLinks ? (
            <ExpandableMenuItem
              label={item.label}
              subLinks={item.subLinks}
              isOpen={openIndex === idx}
              onToggle={() => toggleSubMenu(idx)}
            />
          ) : null}
        </li>
      ))}
      <Line className="w-full mt-2" />
    </ul>
  );
};
