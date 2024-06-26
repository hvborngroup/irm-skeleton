import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BaseMegaMenu from "@/components/baseMegaMenu"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ECom new",
  description: "Generated by FED",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BaseMegaMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
