import React from 'react';
import { Button } from '../ui/button';
import LinkText from './LinkText';
import { NAV_ITEMS } from '@/constants/navItems';
import { motion, AnimatePresence } from "framer-motion";

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
        <AnimatePresence>
            <motion.nav
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden absolute top-[64px] left-0 w-full bg-white shadow-md z-40 overflow-hidden flex flex-col px-2 pb-4 pt-4 gap-2"

            >
                {NAV_ITEMS.map((item) => (
                    <LinkText
                        key={item.href}
                        href={item.href}
                        text={item.text}
                        isActive={activeSection === item.href}
                        setOpen={setOpen}
                    />
                ))}

                <Button
                    className="text-base w-full mt-2 bg-orange-600 text-white hover:bg-orange-700 transition duration-200"
                    onClick={() => setOpen(false)}
                >
                    Dizajniraj svoj bedž
                </Button>
            </motion.nav>
        </AnimatePresence>
    );
};

export default MobileNavigation;
