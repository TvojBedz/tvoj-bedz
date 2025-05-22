"use client";

import { useCookies } from "next-client-cookies";
import { createContext, useContext, useEffect, useState } from "react";

interface CartItem {
    id: string;
    name: string;
    image: string;
    price: string;
    quantity: number;
}

interface CartContextValue {
    cart: CartItem[];
    count: number;
    refreshCart: () => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const cookies = useCookies();
    const [cart, setCart] = useState<CartItem[]>([]);

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
    };

    useEffect(() => {
        refreshCart();
    }, []);

    const count = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, count, refreshCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
    return ctx;
}
