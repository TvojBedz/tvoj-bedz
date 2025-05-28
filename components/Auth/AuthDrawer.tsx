"use client";

import { useState } from "react";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { AuthForm } from "./AuthForm";

export function AuthDrawer({ open, onOpenChange }: { open: boolean; onOpenChange: (val: boolean) => void }) {
    const [mode, setMode] = useState<"login" | "register">("login");

    return (
        <Drawer open={open} onOpenChange={onOpenChange}>
            <DrawerContent className="max-h-[80vh] overflow-y-auto pb-10 px-4 sm:px-6 sm:pt-8 sm:pb-12 flex flex-col content-center justify-center max-w-md mx-auto">
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
