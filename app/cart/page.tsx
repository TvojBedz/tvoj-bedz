"use client";

import { useCart } from "@/context/CartContext";
import { TooltipProvider } from "@/components/ui/tooltip";
import CartItem from "@/components/Cart/CartItem";
import Section from "@/components/Sections/Section";
import { Card, CardContent } from "@/components/ui/card";

export default function CartPage() {
    const { cart, loading } = useCart();


    const renderCartItems = () => {
        if (loading) {
            return <p className="text-gray-600 text-center">Učitavanje korpe...</p>;
        }

        if (cart.length === 0) {
            return <p className="text-gray-600 text-center">Korpa je prazna.</p>;
        }

        return (
            <Card className="shadow-md p-0">
                <CardContent className="flex flex-col gap-2 p-1 ">
                    {cart.map((product) => (
                        <CartItem key={product.id} product={product} />
                    ))}
                </CardContent>
            </Card>
        );
    };

    return (
        <TooltipProvider>
            <Section sectionId="cart" title="Tvoja korpa">
                {renderCartItems()}
            </Section>
        </TooltipProvider>
    );
}
