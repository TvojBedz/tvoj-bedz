import Badge from "@/model/Badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Button } from "../ui/button";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useCookies } from "next-client-cookies";
import { Minus, Plus, Trash } from "lucide-react";

interface CartItemActionsProps {
    product: Badge;
}

const CartItemActions = ({ product }: CartItemActionsProps) => {
    const [animated, setAnimated] = useState(false);
    const { cart, refreshCart } = useCart();
    const cookies = useCookies();


    const updateQuantity = (id: string, delta: number) => {
        const updated = cart.map(item =>
            item.id === id
                ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                : item
        );
        cookies.set("cart", JSON.stringify(updated));
        refreshCart();
        setAnimated(true);
        setTimeout(() => setAnimated(false), 200);
    }

    return (
        <div className="flex items-center gap-3">
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        size="icon"
                        variant="outline"
                        onClick={() => updateQuantity(product.id, -1)}
                        className="rounded-full"
                    >
                        <Minus />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>Umanji količinu</TooltipContent>
            </Tooltip>

            <span className="text-xl font-semibold">
                {product.quantity}
            </span>

            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        size="icon"
                        variant="outline"
                        onClick={() => updateQuantity(product.id, 1)}
                        className="rounded-full"
                    >
                        <Plus />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>Povećaj količinu</TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        size="icon"
                        variant="outline"
                        onClick={() => updateQuantity(product.id, -product.quantity)}
                        className={`rounded-full text-red-500 hover:bg-red-100 transition-all ${animated ? 'animate-pulse' : ''}`}
                    >
                        <Trash />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>Ukloni iz korpe</TooltipContent>
            </Tooltip>

        </div>
    );
}

export default CartItemActions