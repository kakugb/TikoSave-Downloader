import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from './components/header';
import Footer from './components/footer';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TikoSave Downloader",
  description: "Tiktok Video Downloader",
  icons: {
    icon: "/tikologo.jpg", // or "/favicon.png" or ".svg"
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
          <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
