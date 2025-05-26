"use client";

import { useCart } from "@/context/CartContext";
import { useCookies } from "next-client-cookies";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CheckoutPage() {
    const { cart, refreshCart } = useCart();
    const cookies = useCookies();
    const [submitted, setSubmitted] = useState(false);

    const total = cart.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        cookies.set("cart", JSON.stringify([]));
        refreshCart();
    };

    if (submitted) {
        return (
            <div className="max-w-xl mx-auto py-20">
                <Card className="shadow-lg animate-in fade-in zoom-in-95 duration-500">
                    <CardContent className="py-10 text-center space-y-4">
                        <h2 className="text-3xl font-bold text-green-600">✅ Uspešno poslato!</h2>
                        <p className="text-gray-600">
                            Uskoro ćemo te kontaktirati sa detaljima porudžbine.
                        </p>
                        <Button onClick={() => window.location.href = "/"}>Nazad na početnu</Button>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto py-12 px-4">
            <Card className="shadow-md">
                <CardContent className="p-6 space-y-8">
                    <h1 className="text-3xl font-bold text-center">Plaćanje</h1>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Podaci korisnika */}
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="name">Ime i prezime</Label>
                                <Input required id="name" placeholder="Jovana Petrović" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input required id="email" type="email" placeholder="jovana@email.com" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="address">Adresa za dostavu</Label>
                                <Input required id="address" placeholder="Ulica i broj, grad" />
                            </div>
                        </div>

                        <Separator />

                        {/* Prikaz porudžbine */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold">Tvoja porudžbina</h2>
                            <ul className="space-y-2 text-gray-700">
                                {cart.map((item) => (
                                    <li key={item.id} className="flex justify-between">
                                        <span>{item.name} × {item.quantity}</span>
                                        <span>{(parseFloat(item.price) * item.quantity).toFixed(2)} RSD</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex justify-between font-bold text-lg pt-4 border-t">
                                <span>Ukupno:</span>
                                <span className="text-orange-600">{total.toFixed(2)} RSD</span>
                            </div>
                        </div>

                        {/* Submit dugme */}
                        <Button type="submit" className="w-full py-3 text-lg">
                            Pošalji narudžbinu
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
