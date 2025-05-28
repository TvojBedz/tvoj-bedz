"use client";

import { useSession, signOut } from "next-auth/react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogIn, LogOut } from "lucide-react";
import avatar from "@/public/avatar.png";
import { useState } from "react";
import { AuthDrawer } from "./AuthDrawer";

export default function UserPopover() {
    const { data: session, status } = useSession();
    const [openDrawer, setOpenDrawer] = useState(false);

    const user = session?.user;

    return (
        <>
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Avatar>
                            <AvatarImage
                                src={user?.image || avatar.src}
                                alt={user?.name || "Avatar"}
                            />
                            <AvatarFallback>
                                {user ? user.name?.charAt(0) : "U"}
                            </AvatarFallback>
                        </Avatar>
                    </Button>
                </PopoverTrigger>
                <PopoverContent>
                    {status === "authenticated" ? (
                        <div className="space-y-2">
                            <p className="font-semibold">{user?.name}</p>
                            <p className="text-sm text-muted-foreground">{user?.email}</p>
                            <Button
                                variant="outline"
                                className="w-full flex gap-2 items-center"
                                onClick={() => signOut()}
                            >
                                <LogOut className="w-4 h-4" /> Logout
                            </Button>
                        </div>
                    ) : (
                        <div className="space-y-2 text-center">
                            <p className="text-md">
                                Trenutno niste prijavljeni
                            </p>
                            <Button
                                variant="default"
                                className="w-full flex gap-2 items-center"
                                onClick={() => setOpenDrawer(true)}
                            >
                                <LogIn className="w-4 h-4" /> Prijavi se
                            </Button>
                        </div>
                    )}
                </PopoverContent>
            </Popover>
            <AuthDrawer open={openDrawer} onOpenChange={setOpenDrawer} />
        </>
    );
}
