"use client";

import Badge from "@/model/Badge";
import { useCookies } from "next-client-cookies";
import { createContext, useContext, useEffect, useState } from "react";

interface CartContextValue {
    cart: Badge[];
    count: number;
    refreshCart: () => void;
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

    useEffect(() => {
        refreshCart();
    }, []);

    const count = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, count, refreshCart, loading }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
    return ctx;
}
