
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Analytics } from '@vercel/analytics/next';
const geist = Geist({
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: 'Bilacore Petroleum',
  description: 'bilacore petroleum pty ltd, providing quality petroleum products and services',
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased`}>
        <Navbar />
        <div>{children}</div>
         <Analytics />
      </body>
    </html>
  );
}
