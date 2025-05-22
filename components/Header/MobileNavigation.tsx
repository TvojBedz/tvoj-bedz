import React from 'react';
import { Button } from '../ui/button';
import LinkText from './LinkText';
import { NAV_ITEMS } from '@/constants/navItems';

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
            {NAV_ITEMS.map((item) => (
                <LinkText
                    key={item.href}
                    href={item.href}
                    text={item.text}
                    isActive={activeSection === item.href}
                    setOpen={setOpen}
                />
            ))}
            <Button className="w-full mt-2" onClick={() => setOpen(false)}>
                Dizajniraj svoj bedž
            </Button>
        </nav>
    );
};

export default MobileNavigation;
