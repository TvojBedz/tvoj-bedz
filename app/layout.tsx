import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Analytics } from "@vercel/analytics/next";
import { CookiesProvider } from 'next-client-cookies/server';
import { CartProvider } from "@/context/CartContext";
import { SessionProvider } from "@/context/SessionProvider";
import { Toaster } from "@/components/ui/sonner";


export const metadata: Metadata = {
  title: "TvojBedž",
  description: "Dizajniraj svoj bedž po meri",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <SessionProvider>
      <CookiesProvider>
        <CartProvider>
          <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
          <html lang="sr">
            <body suppressHydrationWarning={true} className="min-h-screen">
              <Header />
              <main className="flex flex-col items-center">
                {children}
              </main>
              <Footer />
              <Toaster richColors position="top-center" />
              <Analytics />
            </body>
          </html>
        </CartProvider>
      </CookiesProvider>
    </SessionProvider>
  );
}
