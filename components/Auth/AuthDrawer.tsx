"use client";

import { useState } from "react";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { AuthForm } from "./AuthForm";

export function AuthDrawer({ open, onOpenChange }: { open: boolean; onOpenChange: (val: boolean) => void }) {
    const [mode, setMode] = useState<"login" | "register">("login");

    return (
        <Drawer open={open} onOpenChange={onOpenChange}>
            <DrawerContent className="pb-10 px-4 pt-6">
                <DrawerHeader>
                    <DrawerTitle>{mode === "login" ? "Prijava" : "Registracija"}</DrawerTitle>
                </DrawerHeader>
                <AuthForm mode={mode} setMode={setMode} onSuccess={() => onOpenChange(false)} />
            </DrawerContent>
        </Drawer>
    );
}
