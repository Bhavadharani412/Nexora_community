import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexora",
  description:
    "A cinematic community platform built for the next generation of creators, builders, and visionaries.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}