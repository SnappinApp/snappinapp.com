import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
import localFont from "next/font/local"
import "../styles/globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  weight: ['300', '400', '500'],
  subsets: ['latin']
});

const gilroy = localFont({
  src: [
    {
      path: "../styles/fonts/Gilroy-Regular.ttf",
      weight: "400",
      style: "normal"
    },
    {
      path: "../styles/fonts/Gilroy-Medium.ttf",
      weight: "500",
      style: "normal"
    },
    {
      path: "../styles/fonts/Gilroy-SemiBold.ttf",
      weight: "600",
      style: "normal"
    },
    {
      path: "../styles/fonts/Gilroy-Bold.ttf",
      weight: "700",
      style: "normal"
    },
    {
      path: "../styles/fonts/Gilroy-ExtraBold.ttf",
      weight: "800",
      style: "normal"
    },
    {
      path: "../styles/fonts/Gilroy-Heavy.ttf",
      weight: "900",
      style: "normal"
    },
  ],
  variable: "--font-gilroy",
  display: "swap"
})

export const metadata: Metadata = {
  title: "Snappin – Organize Receipts, Bills & Invoices Automatically from Email",
  description: "Snappin auto-fetches receipts and invoices from email, extracts key data, and syncs with your accounting tools — no manual work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Basic favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
      </head>
      <body
        className={`${dmSans.variable} ${dmMono.variable} ${gilroy.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
