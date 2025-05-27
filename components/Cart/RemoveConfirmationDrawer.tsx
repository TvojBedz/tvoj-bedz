'use client';

import { Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

interface Props {
    open: boolean;
    onCancel: () => void;
    onConfirm: () => void;
}

export function RemoveConfirmationDrawer({ open, onCancel, onConfirm }: Props) {
    return (
        <Drawer open={open} onOpenChange={(isOpen) => !isOpen && onCancel()}>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Ukloniti iz korpe?</DrawerTitle>
                </DrawerHeader>
                <DrawerFooter className="flex justify-end gap-2 mb-6">
                    <Button variant="destructive" onClick={onConfirm}>
                        Ukloni
                    </Button>
                    <Button variant="outline" onClick={onCancel}>
                        Otkaži
                    </Button>

                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}
