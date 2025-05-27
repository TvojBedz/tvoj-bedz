"use client";

import Badge from "@/model/Badge";
import { useCookies } from "next-client-cookies";
import { createContext, useContext, useEffect, useState } from "react";

interface CartContextValue {
    cart: Badge[];
    count: number;
    refreshCart: () => void;
    updateQuantity: (id: string, delta: number) => void;
    removeFromCart: (id: string) => void;
    loading?: boolean;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const cookies = useCookies();
    const [cart, setCart] = useState<Badge[]>([]);
    const [loading, setLoading] = useState(true);

    const refreshCart = () => {
        const raw = cookies.get("cart");
        if (raw) {
            try {
                const parsed = JSON.parse(raw);
                setCart(parsed);
            } catch {
                setCart([]);
            }
        } else {
            setCart([]);
        }
        setLoading(false);
    };

    const updateQuantity = (id: string, delta: number) => {
        const updated = cart.map(item =>
            item.id === id
                ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                : item
        );
        cookies.set("cart", JSON.stringify(updated));
        refreshCart();
    }

    const removeFromCart = (id: string) => {
        const updated = cart.filter(item => item.id !== id);
        cookies.set("cart", JSON.stringify(updated));
        refreshCart();
    }

    useEffect(() => {
        refreshCart();
    }, []);

    const count = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, count, refreshCart, updateQuantity, removeFromCart, loading }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
    return ctx;
}
