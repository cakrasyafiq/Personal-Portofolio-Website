import type { Metadata } from "next";
import localFont from "next/font/local";
import { Plus_Jakarta_Sans, Satisfy } from "next/font/google";
import "./globals.css";

const humane = localFont({
  src: [
    { path: "./fonts/Humane-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/Humane-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/Humane-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-humane",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const satisfy = Satisfy({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cakra Syafiq | AI, Software & Creative Media Portfolio",
  description:
    "Portfolio of Cakra Syafiq — Informatics Engineering student at Universitas Brawijaya specializing in Artificial Intelligence, Software Development, Product Management, and Creative Media.",
  openGraph: {
    title: "Cakra Syafiq | Portfolio",
    description:
      "Artificial Intelligence, Software Development & Creative Media Enthusiast.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${humane.variable} ${plusJakartaSans.variable} ${satisfy.variable}`}
    >
      <body className="min-h-screen bg-[#0B1014] text-[#FBF4DA] antialiased">
        {children}
      </body>
    </html>
  );
}
