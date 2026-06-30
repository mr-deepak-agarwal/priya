import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Self-hosted, OFL-licensed fonts (see /fonts license files). Variable fonts,
// so a single file covers the full weight range — no external font requests
// at build or runtime.
const fraunces = localFont({
  src: [
    { path: "./fonts/Fraunces-Variable.ttf", style: "normal" },
    { path: "./fonts/Fraunces-Italic-Variable.ttf", style: "italic" },
  ],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = localFont({
  src: [
    { path: "./fonts/Inter-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Inter-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Inter-SemiBold.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Priya Agarwal | Online Ayurveda Consultations, Jaipur",
  description:
    "Book a personal video consultation with Dr. Priya Agarwal, BAMS — Ayurveda care for everyday wellness, Panchakarma detox, and women's health, available anywhere in India and abroad. In-clinic visits also available in Jaipur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-charcoal">
        {children}
      </body>
    </html>
  );
}
