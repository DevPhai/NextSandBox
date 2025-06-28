import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ResponsiveAppBar from "./components/layout/appbar";
import { Container } from "@mui/material";
import { Padding } from "@mui/icons-material";

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
        <ResponsiveAppBar />
        <Container maxWidth="xl" sx={{ padding: "1.75rem" }}>
          {children}
        </Container>
      </body>
    </html>
  );
}
