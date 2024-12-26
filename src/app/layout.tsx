import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col justify-between p-6 bg-white text-gray-900">
          <header className="flex justify-center">
            <PageHeader/>
          </header>
          <main className="grow w-4/5 mx-auto space-y-6">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
