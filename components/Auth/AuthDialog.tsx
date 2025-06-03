'use client'

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import useMediaQuery from "@/hooks/useMediaQuery"
import { LogIn } from "lucide-react"
import { AuthForm } from "./AuthForm"

export function AuthDialog() {
    const [open, setOpen] = React.useState(false)
    const isDesktop = useMediaQuery("(min-width: 768px)")

    const onOpenChange = (open: boolean) => {
        setOpen(open)
    }


    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={onOpenChange}>
                <DialogTrigger asChild>
                    <Button
                        variant="default"
                        className="w-full flex gap-2 items-center"
                    >
                        <LogIn className="w-4 h-4" /> Prijavi se
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>
                            Prijava
                        </DialogTitle>
                    </DialogHeader>
                    <AuthForm />
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Drawer open={open} onOpenChange={onOpenChange}>
            <DrawerTrigger asChild>
                <Button
                    variant="default"
                    className="w-full flex gap-2 items-center"
                >
                    <LogIn className="w-4 h-4" /> Prijavi se
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="text-left">
                    <DrawerTitle>
                        Prijava
                    </DrawerTitle>
                </DrawerHeader>
                <AuthForm />
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="outline">
                            Zatvori
                        </Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}
