import AOSProvider from "@/components/aos-provider";
import TailwindIndicator from "@/components/tailwind-indicator";
import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Rabire HAKIM",
  title: {
    default: "Rabire HAKIM - Développeur",
    template: "%s | Rabire HAKIM",
  },
  description:
    "Je suis Rabire. Quand on me demande de me présenter, je réponds souvent que si je ne suis pas à la salle de sport, je suis certainement en train de programmer.",
  keywords: [
    "web",
    "developer",
    "fullstack",
    "react",
    "nextjs",
    "typescript",
    "nodejs",
    "portfolio",
  ],
  authors: [{ name: "Rabire Hakim" }],
  creator: "Rabire Hakim",
  publisher: "Rabire Hakim",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    url: "/",
    title: "Rabire HAKIM",
    siteName: "Rabire HAKIM",
    description: "Web developer",
    images: [
      {
        url: "/images/rabire.webp",
        width: 1200,
        height: 630,
        alt: "Rabire HAKIM",
      },
    ],
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rabire HAKIM",
    description: "Web developer",
    images: ["/images/rabire.webp"],
    creator: "@rabire",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
    other: [{ rel: "mask-icon", url: "/icon0.svg" }],
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0b" },
  ],
  referrer: "strict-origin-when-cross-origin",
  appleWebApp: {
    capable: true,
    title: "Rabire HAKIM",
    statusBarStyle: "default",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    me: [process.env.NEXT_PUBLIC_ME_VERIFICATION ?? ""].filter(
      Boolean
    ) as string[],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" dir="ltr">
      <head>
        <meta name="apple-mobile-web-app-title" content="Rabire HAKIM" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Rabire Hakim",
              url: siteUrl,
              jobTitle: "Web Developer",
              description: "Web developer",
              image: new URL("/images/rabire.webp", siteUrl).toString(),
            }),
          }}
        />
      </head>

      <body className={`${outfit.variable} antialiased font-sans`}>
        {children}
        <TailwindIndicator />
        <AOSProvider />
      </body>
    </html>
  );
}
