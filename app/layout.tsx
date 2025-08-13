import TailwindIndicator from "@/components/tailwind-indicator";
import type { Metadata } from "next";
import { Modak, Outfit } from "next/font/google";
import "./globals.css";

const modak = Modak({
  variable: "--font-modak",
  subsets: ["latin"],
  weight: ["400"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

// TODO: SEO en beton
export const metadata: Metadata = {
  title: "Rabire HAKIM",
  description: "Web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Rabire HAKIM" />
      </head>

      <body
        className={`${modak.variable} ${outfit.variable} antialiased font-sans`}
      >
        {children}
        <TailwindIndicator />
      </body>
    </html>
  );
}
