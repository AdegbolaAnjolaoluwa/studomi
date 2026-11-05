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

export const metadata: Metadata = {
  title: "Studomi — Find your place. Know what to expect.",
  description:
    "Studomi helps university students find off-campus hostels near their school, compare real distances and prices, and read structured reviews from residents who actually lived there.",
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
