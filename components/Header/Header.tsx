"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileNavigation from "./MobileNavigation";

export default function Header() {
    const [open, setOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string>("");

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["hero", "kako-funkcionise", "bedzevi", "kontakt"];
            const scrollPos = window.scrollY;

            for (const id of sections) {
                const el = document.getElementById(id);
                if (el) {
                    const offsetTop = el.offsetTop;
                    const offsetBottom = offsetTop + el.offsetHeight;

                    if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
                        setActiveSection(id);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinkClass = (id: string) =>
        `py-2 px-3 rounded transition-colors ${activeSection === id
            ? "text-blue-600 font-semibold"
            : "hover:bg-gray-100 text-gray-700"
        }`;

    return (
        <header className="w-full border-b bg-white shadow-sm sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between p-4 px-6 md:px-20">
                {/* Logo */}
                <Link href="/#hero" className="text-2xl font-bold text-black">
                    TvojBedž
                </Link>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center space-x-6 text-sm">
                    <Link href="/#kako-funkcionise" className={navLinkClass("kako-funkcionise")}>
                        Kako funkcioniše
                    </Link>
                    <Link href="/#bedzevi" className={navLinkClass("bedzevi")}>
                        Bedževi
                    </Link>
                    <Link href="/#kontakt" className={navLinkClass("kontakt")}>
                        Kontakt
                    </Link>
                    <Button>Prijavi se</Button>
                </nav>

                <button onClick={() => setOpen(!open)} className="md:hidden text-gray-700">
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <MobileNavigation
                open={open}
                setOpen={setOpen}
                navLinkClass={navLinkClass}
            />

        </header>
    );
}
