"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileNavigation from "./MobileNavigation";
import { openLink } from "@/utils/links";
import LinkText from "./LinkText";

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


    return (
        <header className="w-full border-b bg-white shadow-sm sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between p-4 px-6 md:px-20">
                {/* Logo */}
                <Link href="/#hero" className="text-2xl font-bold text-black">
                    TvojBedž
                </Link>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center space-x-6 text-sm">
                    <LinkText
                        isActive={activeSection === "kako-funkcionise"}
                        href="/#kako-funkcionise"
                        text="Kako funkcioniše"
                    />

                    <LinkText
                        isActive={activeSection === "bedzevi"}
                        href="/#bedzevi"
                        text="Bedževi"
                    />
                    <LinkText
                        isActive={activeSection === "kontakt"}
                        href="/#kontakt"
                        text="Kontakt"
                    />
                    <Button>Prijavi se</Button>
                </nav>

                <button onClick={() => setOpen(!open)} className="md:hidden text-gray-700">
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <MobileNavigation
                open={open}
                setOpen={setOpen}
                activeSection={activeSection}
            />

        </header>
    );
}
