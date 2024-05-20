import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todoly",
  description:
    "Effortlessly manage tasks, set priorities, and stay organized with intuitive features designed to boost your efficiency. Try Todoly now",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Providers>
        <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  );
}
