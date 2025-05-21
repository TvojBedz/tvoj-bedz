import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';

interface MobileNavigationProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    navLinkClass: (id: string) => string;
}

const MobileNavigation = ({ open, setOpen, navLinkClass }: MobileNavigationProps) => {
    if (!open) {
        return null;
    }

    return (
        <nav className="md:hidden absolute top-[64px] left-0 w-full bg-white shadow-md flex flex-col px-2 pb-4 pt-4 gap-2 z-40">
            <Link
                href="/#kako-funkcionise"
                className={navLinkClass("kako-funkcionise")}
                onClick={() => setOpen(false)}
            >
                Kako funkcioniše
            </Link>
            <Link
                href="/#bedzevi"
                className={navLinkClass("bedzevi")}
                onClick={() => setOpen(false)}
            >
                Bedževi
            </Link>
            <Link
                href="/#kontakt"
                className={navLinkClass("kontakt")}
                onClick={() => setOpen(false)}
            >
                Kontakt
            </Link>
            <Button className="w-full mt-2" onClick={() => setOpen(false)}>
                Prijavi se
            </Button>
        </nav>
    );
};

export default MobileNavigation;
