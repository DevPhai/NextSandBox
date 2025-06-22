import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SidebarMenu from "./components/layout/sildebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextSannBox",
  description: "My Sand box css web UI",
  icons: {
    icon: "./favicon.ico",
    apple: "./apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarMenu />
        <div
          className="grid grid-rows-[20px_1fr_20px] items-start justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
          style={{ marginLeft: "80px" }}
        >
          <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
