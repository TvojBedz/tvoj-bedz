"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileNavigation from "./MobileNavigation";
import LinkText from "./LinkText";
import { NAV_ITEMS } from "@/constants/navItems";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function Header() {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const { count } = useCart();


    return (
        <header className={`w-full border-b bg-white shadow-sm sticky top-0 z-50 transition-all duration-300 ${!open ? 'backdrop-blur-md bg-white/70' : ''}`}>
            <div className="container mx-auto flex items-center justify-between p-4 px-6 md:px-20">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-black">
                    TvojBedž
                </Link>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center space-x-6 text-sm">
                    {NAV_ITEMS.map((item) => (
                        <LinkText
                            key={item.href}
                            href={item.href}
                            text={item.text}
                        />
                    ))}
                    <Button>
                        Dizajniraj svoj bedž
                    </Button>
                    <button
                        onClick={() => router.push("/cart")}
                        className="relative p-2"
                        aria-label="Korpa"
                    >
                        <ShoppingCart className="w-6 h-6 text-black cursor-pointer hover:text-orange-600 transition duration-200" />
                        {count > 0 && (
                            <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                                {count}
                            </span>
                        )}
                    </button>
                </nav>

                <div className="md:hidden flex items-center space-x-4">
                    <button
                        onClick={() => router.push("/cart")}
                        className="relative md:hidden text-gray-700"
                        aria-label="Korpa"
                    >
                        <ShoppingCart className="w-6 h-6 text-black cursor-pointer hover:text-orange-600 transition duration-200" />
                        {count > 0 && (
                            <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs font-bold  rounded-full w-4 h-4 flex items-center justify-center">
                                {count}
                            </span>
                        )}
                    </button>

                    <button onClick={() => setOpen(!open)} className="md:hidden text-gray-700">
                        {open ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            <MobileNavigation
                open={open}
                setOpen={setOpen}
            />

        </header >
    );
}
