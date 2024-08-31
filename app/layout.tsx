import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CrispProvider } from '@/components/crisp-provider'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "أدوات الذكاء الأصطناعي",
  description: "Generat by AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
              <CrispProvider />

      <body className={inter.className}>{children}</body>

    </html>
  );
}
