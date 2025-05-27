"use client";

import { useCart } from "@/context/CartContext";
import { TooltipProvider } from "@/components/ui/tooltip";
import CartItem from "@/components/Cart/CartItem";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function CartPage() {
    const { cart, loading, count } = useCart();
    const router = useRouter();


    const renderCartItems = () => {
        if (loading) {
            return (
                <div className="flex items-center justify-center h-64">
                    <p className="text-gray-600 text-center">Učitavanje korpe...</p>
                </div>
            );
        }

        if (cart.length === 0) {
            return (
                <div className="flex items-center justify-center h-64">
                    <p className="text-gray-600 text-center">Korpa je prazna</p>
                    <Button
                        className="mt-4"
                        onClick={() => router.push("/shop")}
                    >
                        Istraži proizvode
                    </Button>
                </div>
            );
        }

        return (
            <Card className="shadow-md p-0 w-full">
                <CardContent className="flex flex-col gap-2 px-1 w-full py-2">
                    {cart.map((product) => (
                        <CartItem key={product.id} product={product} />
                    ))}
                    <div className="flex px-2 justify-between items-center mt-4 border-t pt-4">
                        <span className="text-gray-600">
                            Ukupno:
                        </span>
                        <span className="text-lg font-semibold text-gray-800">
                            {cart.reduce((total, item) => total + item.price * item.quantity, 0)} RSD
                        </span>
                    </div>
                    <div className="mt-4">
                        <Button
                            className="w-full"
                            onClick={() => router.push("/checkout")}
                        >
                            Check out
                        </Button>
                    </div>
                </CardContent>
            </Card >
        );
    };

    return (
        <TooltipProvider>
            <div className="px-4 max-w-5xl py-4 flex flex-col  text-gray-900 gap-3 w-full">
                <h1 className="text-5xl font-bold text-left">
                    Korpa
                </h1>

                {!loading &&
                    <p className="text-gray-600  text-left text-sm">
                        {count} {count === 1 ? "proizvod" : "proizvoda"} u korpi
                    </p>
                }

                <Separator orientation="horizontal" />
                {renderCartItems()}
            </div>
        </TooltipProvider>
    );
}
