"use client";

import { useTransition } from "react";
import { addToCart } from "@/lib/cart-actions";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import Badge from "@/model/Badge";

export default function AddToCartButton({ product }: { product: Badge }) {
    const { refreshCart } = useCart();
    const [isPending, startTransition] = useTransition();

    const handleSubmit = (formData: FormData) => {
        startTransition(async () => {
            await addToCart(formData);
            refreshCart();
        });
    };

    if (isPending) {
        return (
            <Button
                disabled
                className="w-full transition-transform hover:scale-[1.02] hover:shadow-md"
            >
                Dodajem u korpu...
            </Button>
        );
    }

    return (
        <form action={handleSubmit} className="w-full">
            <input type="hidden" name="productId" value={product.id} />
            <input type="hidden" name="productName" value={product.name} />
            <input type="hidden" name="productImage" value={product.image} />
            <input type="hidden" name="productPrice" value={product.price} />
            <Button
                type="submit"
                className="w-full transition-transform hover:scale-[1.02] hover:shadow-md"
            >
                Dodaj u korpu
            </Button>
        </form>
    );
}
