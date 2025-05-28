"use client";

import { useState } from "react";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { AuthForm } from "./AuthForm";
import { ScrollArea } from "../ui/scroll-area";

export function AuthDrawer({ open, onOpenChange }: { open: boolean; onOpenChange: (val: boolean) => void }) {
    const [mode, setMode] = useState<"login" | "register">("login");

    return (
        <Drawer open={open} onOpenChange={onOpenChange} direction="bottom">
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle className="text-center text-2xl font-semibold">
                        {mode === "login" ? "Prijava" : "Registracija"}
                    </DrawerTitle>
                </DrawerHeader>
                <ScrollArea className="overflow-y-auto">
                    <AuthForm mode={mode} setMode={setMode} onSuccess={() => onOpenChange(false)} />
                </ScrollArea>
            </DrawerContent>
        </Drawer>
    );
}
