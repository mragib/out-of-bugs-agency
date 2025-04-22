import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://outofbugs.com"), // change this to your domain
  title: {
    default: "Out of Bugs - Squashing Bugs Before They Hatch",
    template: "%s | Out of Bugs",
  },
  description:
    "Out of Bugs is a high-performance web development agency delivering bug-free, scalable, and future-ready digital solutions for businesses and startups.",
  keywords: [
    "web development",
    "web agency",
    "bug-free code",
    "Out of Bugs",
    "Next.js agency",
    "frontend development",
    "backend development",
    "custom web solutions",
    "software development company",
  ],
  authors: [{ name: "Out of Bugs", url: "https://outofbugs.com" }],
  creator: "Out of Bugs",
  publisher: "Out of Bugs",

  openGraph: {
    title: "Out of Bugs - Squashing Bugs Before They Hatch",
    description:
      "Out of Bugs is your partner for clean, scalable, and bug-free web development. From frontend to backend, we build digital experiences that work flawlessly.",
    url: "https://outofbugs.com",
    siteName: "Out of Bugs",
    images: [
      {
        url: "https://outofbugs.com/og-image.jpg", // swap with your OG image
        width: 1200,
        height: 630,
        alt: "Out of Bugs - Bug-Free Web Development Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Out of Bugs - Squashing Bugs Before They Hatch",
    description:
      "We deliver flawless web experiences with clean, scalable, and bug-free code. Partner with Out of Bugs to future-proof your digital presence.",
    site: "@outofbugs", // update if you have one
    creator: "@outofbugs",
    images: ["https://outofbugs.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://outofbugs.com",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="relative flex flex-col min-h-screen w-full">
          <Header />
          <main className="flex-1 flex flex-col items-center justify-center w-full text-center px-4 ">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
