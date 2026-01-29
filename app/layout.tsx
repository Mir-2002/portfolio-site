import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/page";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ahmer Macasindel",
  description: "The Portfolio of Ahmer Macasindel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} antialiased`}>
        <div className="min-h-screen mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl bg-white/80">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
