import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ui = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-ui",
});

const brand = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-brand",
});

export const metadata: Metadata = {
  title: "RokoRobotic - Signal-grade robots",
  description: "A generative robot collection forged from minimal industrial aesthetics, identity-driven trait logic, and audio-grade branding.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ui.variable} ${brand.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
