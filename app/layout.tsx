import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Analytics } from "@vercel/analytics/next";


export const metadata: Metadata = {
  title: "TvojBedž",
  description: "Dizajniraj svoj bedž po meri",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sr">
      <body suppressHydrationWarning={true}>
        <Header />
        <main className=" bg-gray-50 min-h-screen flex flex-col items-center">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
