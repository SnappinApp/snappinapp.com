export interface MenuItem {
    label: string;
    href?: string;
    tag: string | '';
    subLinks?: {
        label: string;
        href: string;
    }[];
}

export interface MenuFooterLink {
    label: string,
    href: string,
    tag?: string,
}

export const MenuIetms: MenuItem[] = [
    {
        label: "Features",
        tag: "features",
        subLinks: [
            { label: "Inbox Scannnig", href: "#" },
            { label: "Whatsapp Upload", href: "#" },
            { label: "Bank statements conciliations", href: "#" },
            { label: "Integration", href: "#" },
        ],
    },
    {
        label: "Accountants & Bookkeepers",
        tag: "For Accountants & Bookkeepers",
        subLinks: [
            { label: "Invoice Capture", href: "#" },
            { label: "Customers Portal", href: "#" },
        ]
    },
    {
        label: "Use Cases",
        tag: "Snappin's Use cases",
        subLinks: [
            { label: "Freelancers & Service Providers", href: "#" },
            { label: "Accountants & Bookkeepers", href: "#" },
            { label: "Event Managers", href: "#" },
            { label: "E-commerce Sellers", href: "#" },
            { label: "Content Creators & Influencers", href: "#" },
        ]
    },
    {
        label: "Pricing",
        href: "/pricing",
        tag: 'Pricing'
    },
]

export const menuFooterLinks: MenuFooterLink[] = [
    {
        label: 'Blog',
        href: '#'
    },
    {
        label: 'Help center',
        href: '#'
    }
]