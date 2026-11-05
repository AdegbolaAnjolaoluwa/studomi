import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const bricolage = localFont({
  src: "./fonts/BricolageGrotesque-Variable.woff2",
  variable: "--font-bricolage",
  weight: "400 800",
  display: "swap",
});

const manrope = localFont({
  src: "./fonts/Manrope-Variable.woff2",
  variable: "--font-manrope",
  weight: "200 800",
  display: "swap",
});

const siteUrl = "https://studomi.vercel.app";
const title = "Studomi — Find your place. Know what to expect.";
const description =
  "Studomi helps university students find off-campus hostels near their school, compare real distances and prices, and read structured reviews from residents who actually lived there.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Studomi",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Studomi — Find your place. Know what to expect.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolage.variable} ${manrope.variable} font-body antialiased bg-bg text-ink`}
      >
        {children}
      </body>
    </html>
  );
}
