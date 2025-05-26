"use client";

import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { TooltipProvider } from "@/components/ui/tooltip";
import Link from "next/link";
import ProductQuantity from "@/components/Cart/ProductQuantity";

export default function CartPage() {
    const { cart, loading } = useCart();

    const total = cart.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0);

    if (loading) {
        return null
    }

    return (
        <TooltipProvider>
            <div className="max-w-6xl mx-auto py-10 px-4">
                <h1 className="text-4xl font-bold mb-10 text-center">🛒 Tvoja korpa</h1>

                {cart.length === 0 ? (
                    <p className="text-gray-600 text-center">Korpa je prazna.</p>
                ) : (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {cart.map((product) =>
                                <ProductQuantity
                                    key={product.id}
                                    product={product}
                                />
                            )}
                        </div>

                        <Separator className="my-10" />

                        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                            <p className="text-xl font-semibold">
                                Ukupno: <span className="text-orange-600">{total.toFixed(2)} RSD</span>
                            </p>
                            <div className="flex gap-4">
                                <Link href="/checkout">
                                    <Button>Idi na plaćanje</Button>
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </TooltipProvider>
    );
}
