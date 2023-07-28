import TokensProvider from "@/context/TokensProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joyn Rubik Playground",
  description: "Generated by joyn web team",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TokensProvider>{children}</TokensProvider>
      </body>
    </html>
  );
}