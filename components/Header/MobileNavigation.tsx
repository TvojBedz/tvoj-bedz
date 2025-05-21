import React from 'react';
import { Button } from '../ui/button';
import LinkText from './LinkText';

interface MobileNavigationProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    activeSection: string;
}

const MobileNavigation = ({ open, setOpen, activeSection }: MobileNavigationProps) => {
    if (!open) {
        return null;
    }

    return (
        <nav className="md:hidden absolute top-[64px] left-0 w-full bg-white shadow-md flex flex-col px-2 pb-4 pt-4 gap-2 z-40">
            <LinkText
                href="kako-funkcionise"
                text="Kako funkcioniše"
                isActive={activeSection === "kako-funkcionise"}
                setOpen={setOpen}
            />
            <LinkText
                href="bedzevi"
                text="Bedževi"
                isActive={activeSection === "bedzevi"}
                setOpen={setOpen}
            />
            <LinkText
                href="kontakt"
                text="Kontakt"
                isActive={activeSection === "kontakt"}
                setOpen={setOpen}
            />
            <Button className="w-full mt-2" onClick={() => setOpen(false)}>
                Prijavi se
            </Button>
        </nav>
    );
};

export default MobileNavigation;
