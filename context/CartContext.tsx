"use client";

import { RemoveConfirmationDrawer } from "@/components/Cart/RemoveConfirmationDrawer";
import Badge from "@/model/Badge";
import { useCookies } from "next-client-cookies";
import { createContext, useContext, useEffect, useState } from "react";

interface CartContextValue {
    cart: Badge[];
    count: number;
    refreshCart: () => void;
    updateQuantity: (id: string, delta: number) => void;
    loading?: boolean;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const cookies = useCookies();
    const [cart, setCart] = useState<Badge[]>([]);
    const [loading, setLoading] = useState(true);
    const [pendingRemoveId, setPendingRemoveId] = useState<string | null>(null);

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
        const item = cart.find(i => i.id === id);
        if (!item) return;

        const newQuantity = item.quantity + delta;
        if (newQuantity <= 0) {
            setPendingRemoveId(id);
            return;
        }

        const updated = cart.map(item =>
            item.id === id ? { ...item, quantity: newQuantity } : item
        );

        cookies.set("cart", JSON.stringify(updated));
        refreshCart();
    };

    const confirmRemove = () => {
        if (!pendingRemoveId) return;
        const updated = cart.filter(item => item.id !== pendingRemoveId);
        cookies.set("cart", JSON.stringify(updated));
        refreshCart();
        setPendingRemoveId(null);
    };

    const count = cart.reduce((sum, item) => sum + item.quantity, 0);

    useEffect(() => {
        refreshCart();
    }, []);

    return (
        <CartContext.Provider value={{ cart, count, refreshCart, updateQuantity, loading }}>
            <>
                {children}
                <RemoveConfirmationDrawer
                    open={!!pendingRemoveId}
                    onCancel={() => setPendingRemoveId(null)}
                    onConfirm={confirmRemove}
                />
            </>
        </CartContext.Provider>
    );
}

export function useCart() {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
    return ctx;
}
