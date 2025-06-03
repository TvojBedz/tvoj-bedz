"use client";

import { useSession, signOut } from "next-auth/react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut } from "lucide-react";
import avatar from "@/public/avatar.png";
import { AuthDialog } from "./AuthDialog";

export default function UserPopover() {
    const { data: session, status } = useSession();

    const user = session?.user;

    return (
        <>
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Avatar>
                            <AvatarImage
                                src={user?.image as string}
                                alt={user?.name || "Avatar"}
                            />
                            <AvatarFallback>
                                {user ? user.name?.charAt(0) : avatar.src}
                            </AvatarFallback>
                        </Avatar>
                    </Button>
                </PopoverTrigger>
                <PopoverContent>
                    {status === "authenticated" ? (
                        <div>
                            <div className="flex flex-row items-center gap-2">
                                <Avatar>
                                    <AvatarImage
                                        src={user?.image as string}
                                        alt={user?.name || "Avatar"}
                                    />
                                    <AvatarFallback>
                                        {user ? user.name?.charAt(0) : avatar.src}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col">
                                    <p className="font-semibold">{user?.name}</p>
                                    <p className="text-sm text-muted-foreground">{user?.email}</p>
                                </div>
                            </div>
                            <Button
                                variant="destructive"
                                className="w-full flex gap-2 items-center mt-4"
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
                            <AuthDialog />
                        </div>
                    )}
                </PopoverContent>
            </Popover>
        </>
    );
}
