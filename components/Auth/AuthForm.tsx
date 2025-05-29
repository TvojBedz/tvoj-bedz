"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import { AuthValues, loginSchema, registerSchema } from "@/utils/schemas/authSchema";
import { AuthToggle } from "./AuthToggle";

export function AuthForm() {
    const [mode, setMode] = useState<"login" | "register">("login");

    const form = useForm<AuthValues>({
        resolver: zodResolver(mode === "login" ? loginSchema : registerSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    const clearErrors = () => form.clearErrors();

    const onSubmit = async (values: { email: string; password: string; name?: string }) => {
        if (mode === "login") {
            const res = await signIn("credentials", {
                redirect: false,
                email: values.email,
                password: values.password,
            });

            if (res?.error) {
                toast.error("Neuspešna prijava: " + res.error);
            } else {
                toast.success("Uspešno ste prijavljeni!");
            }
        } else {
            try {
                const res = await fetch("/api/register", {
                    method: "POST",
                    body: JSON.stringify(values),
                    headers: { "Content-Type": "application/json" },
                });

                if (!res.ok) throw new Error("Greška pri registraciji");

                toast.success("Uspešna registracija!");
                setMode("login");
                form.reset();
            } catch {
                toast.error("Registracija nije uspela.");
            }
        }
    };

    return (
        <div className="max-w-sm mx-auto space-y-4">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    {mode === "register" && (
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Ime</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    )}
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input type="email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Lozinka</FormLabel>
                                <FormControl>
                                    <Input type="password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full">
                        {mode === "login" ? "Prijavi se" : "Registruj se"}
                    </Button>
                </form>
            </Form>

            <AuthToggle mode={mode} setMode={setMode} clearErrors={clearErrors} />
        </div>
    );
}
