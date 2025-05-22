import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "TvojBedž",
  description: "Dizajniraj svoj bedž po meri",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sr">
      <body suppressHydrationWarning={true}>
        <Header />
        <main className=" min-h-screen flex flex-col items-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
