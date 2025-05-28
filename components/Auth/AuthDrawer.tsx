"use client";

import { useEffect, useRef, useState } from "react";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { AuthForm } from "./AuthForm";

export function AuthDrawer({ open, onOpenChange }: { open: boolean; onOpenChange: (val: boolean) => void }) {
    const [mode, setMode] = useState<"login" | "register">("login");
    const formContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleResize = () => {
            if (formContainerRef.current) {
                formContainerRef.current.style.setProperty('bottom', `env(safe-area-inset-bottom)`);
            }
        };

        if (window.visualViewport) {
            window.visualViewport.addEventListener("resize", handleResize);
            handleResize(); // Initial call in case the keyboard is already open
        }

        return () => {
            if (window.visualViewport) {
                window.visualViewport.removeEventListener("resize", handleResize);
            }
        };
    }, []);


    return (
        <Drawer open={open} onOpenChange={onOpenChange}>
            <DrawerContent ref={formContainerRef} className=" min-h-[70vh] pb-10 px-4 sm:px-6 sm:pt-8 sm:pb-12 flex flex-col content-center justify-center ">
                <DrawerHeader>
                    <DrawerTitle className="text-center text-2xl font-semibold">
                        {mode === "login" ? "Prijava" : "Registracija"}
                    </DrawerTitle>
                </DrawerHeader>
                <AuthForm mode={mode} setMode={setMode} onSuccess={() => onOpenChange(false)} />
            </DrawerContent>
        </Drawer>
    );
}
