"use client";

import { NAV_ITEMS } from "@/constants/navItems";
import { openLink } from "@/utils/links";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full border-t bg-white text-gray-600 text-sm">
            <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                    <p className="text-base font-semibold text-gray-800">TvojBedž</p>
                    <p className="text-xs text-gray-500 mt-1">
                        © {new Date().getFullYear()} Sva prava zadržana.
                    </p>
                </div>

                <nav className="flex flex-col md:flex-row gap-3 md:gap-6 text-sm text-center md:text-left">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.href}
                            href={`/#${item.href}`}
                            scroll={false}
                            onClick={(e) => openLink(e, item.href)}
                            className="hover:text-black transition"
                        >
                            {item.text}
                        </Link>
                    ))}
                </nav>

                <div className="text-center md:text-right text-sm text-gray-500">
                    <p>Za pitanja: <a href="mailto:kontakt@tvojbedz.rs" className="underline hover:text-black">kontakt@tvojbedz.rs</a></p>
                </div>
            </div>
        </footer>
    );
}
