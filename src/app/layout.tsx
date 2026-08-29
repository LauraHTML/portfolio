import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import Header from '../components/Header';
import { Footer } from '../components/Footer';
import { Toaster } from '../components/ui/sonner'

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Portfólio",
    template: "%s | Portfólio"
  },
  description: "Esse site é um portfólio de desenvolvimento",
  openGraph: {
    title: "Conheça o Projeto Bará",
    description: "O design trabalhando o antirracismo nas escolas através de oficinas criativas.",
    url: "https://projetobara.vercel.app",
    siteName: "Portfólio de desenvolvimento",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/logotipo-bara.png",
        width: 1200,
        height: 630,
        alt: "Preview do Projeto Bará",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-br"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col">
        <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <main className="flex-grow">
          {children}
          {/* <Outlet /> */}
        </main>
        <Footer />
      </div>
      <Toaster />
      </body>
    </html>
  );
}
