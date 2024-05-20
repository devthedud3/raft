import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "./ui/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raft",
  description: "Find Remote Engineers World-Wide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="flex justify-center">
      <body className={`${inter.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
