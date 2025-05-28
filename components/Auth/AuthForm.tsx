"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner"
import { z } from "zod";
import { InputField, PasswordField } from "./InputField";
import { AuthToggle } from "./AuthToggle";

const loginSchema = z.object({
    email: z.string().email({ message: "Nevalidan email." }),
    password: z.string().min(6, { message: "Lozinka mora imati najmanje 6 karaktera." }),
});

const registerSchema = loginSchema.extend({
    name: z.string().min(1, { message: "Unesite ime." }),
});

interface AuthFormProps {
    mode: "login" | "register";
    setMode: (mode: "login" | "register") => void;
    onSuccess: () => void;
}

export function AuthForm({ mode, setMode, onSuccess }: AuthFormProps) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [loading, setLoading] = useState(false);

    const clearErrors = () => setErrors({});

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        clearErrors();

        const formData = { name, email, password };
        const result = mode === "login"
            ? loginSchema.safeParse(formData)
            : registerSchema.safeParse(formData);

        if (!result.success) {
            const fieldErrors = result.error.flatten().fieldErrors;
            const mappedErrors: Record<string, string> = {};
            Object.entries(fieldErrors).forEach(([field, msg]) => {
                if (msg?.length) mappedErrors[field] = msg[0];
            });
            setErrors(mappedErrors);
            return;
        }

        setLoading(true);

        try {
            if (mode === "login") {
                const res = await signIn("credentials", {
                    email,
                    password,
                    redirect: false,
                });

                if (!res?.ok) {
                    if (res?.error === "CredentialsSignin") {
                        setErrors({ email: "Neispravni podaci za prijavu." });
                    } else {
                        toast.error("Došlo je do greške prilikom prijave. Pokušajte ponovo kasnije.");
                    }
                    return;
                }

                toast("Uspešno ste se prijavili!", { description: "Dobrodošli nazad!" });
                onSuccess();
            } else {
                const res = await fetch("/api/register", {
                    method: "POST",
                    body: JSON.stringify({ name, email, password }),
                    headers: { "Content-Type": "application/json" },
                });

                const data = await res.json();
                if (!res.ok) {
                    if (data.error) {
                        setErrors({ email: data.error });
                    } else {
                        toast.error("Došlo je do greške prilikom registracije. Pokušajte ponovo kasnije.");
                    }
                    return;
                }

                setMode("login");
                setName("");
                setPassword("");
            }
        } catch {
            toast.error("Došlo je do greške prilikom obrade zahteva. Pokušajte ponovo kasnije.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {mode === "register" && (
                <InputField type="text" placeholder="Ime" value={name} onChange={(e) => setName(e.target.value)} error={errors.name} />
            )}
            <InputField type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} error={errors.email} />
            <PasswordField type="password" placeholder="Lozinka" value={password} onChange={(e) => setPassword(e.target.value)} error={errors.password} />

            <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Obrada..." : mode === "login" ? "Prijavi se" : "Registruj se"}
            </Button>

            <AuthToggle mode={mode} setMode={setMode} clearErrors={clearErrors} />
        </form>
    );
}
