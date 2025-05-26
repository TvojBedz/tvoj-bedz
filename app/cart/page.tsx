"use client";

import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { TooltipProvider } from "@/components/ui/tooltip";
import Link from "next/link";
import CartItem from "@/components/Cart/CartItem";
import Section from "@/components/Sections/Section";

export default function CartPage() {
    const { cart, loading } = useCart();

    const total = cart.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0);


    const renderCartItems = () => {
        if (loading) {
            return <p className="text-gray-600 text-center">Učitavanje korpe...</p>;
        }

        if (cart.length === 0) {
            return <p className="text-gray-600 text-center">Korpa je prazna.</p>;
        }

        return (
            <div className="flex flex-col gap-4">
                {cart.map((product) => (
                    <CartItem key={product.id} product={product} />
                ))}
            </div>
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
