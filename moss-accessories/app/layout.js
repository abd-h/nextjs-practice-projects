import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/navbar-system/header";
import { MobileMenueProvider } from "@/moss-context/navbar-context";
import PopupOffer from "@/components/modal/popup_offer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Moss",
  description: "The mens wear accessories specialist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MobileMenueProvider>
          <PopupOffer />
          <MainHeader />
        </MobileMenueProvider>

        {children}
      </body>
    </html>
  );
}
