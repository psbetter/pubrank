import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Banner from "@/components/Banner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pubrank",
  description: "Research information",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const tabs = [
    { id: "1", name: '会议', href: '/conference' },
    { id: "2", name: '期刊', href: '/journal' },
  ]
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full flex justify-center`}
      >
        <div className="w-4/5 min-h-screen flex flex-col gap-y-2 bg-white text-gray-900 py-1">
          <Banner />
          <Header tabs={tabs}/>
          <div className="grow w-full">
              {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
