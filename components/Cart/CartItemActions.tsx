import Badge from "@/model/Badge";
import { useCart } from "@/context/CartContext";
import { useCookies } from "next-client-cookies";
import { Minus, Plus, Trash } from "lucide-react";
import IconButton from "../ui/iconButton";

interface CartItemActionsProps {
    product: Badge;
}

const CartItemActions = ({ product }: CartItemActionsProps) => {
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
    }

    const removeFromCart = (id: string) => {
        const updated = cart.filter(item => item.id !== id);
        cookies.set("cart", JSON.stringify(updated));
        refreshCart();
    }

    return (
        <div className="flex items-center gap-3">

            {product.quantity > 1 ?
                <IconButton
                    icon={<Minus />}
                    onClick={() => updateQuantity(product.id, -1)}
                    tooltip="Smanji količinu"
                    additionalClass="text-gray-500 hover:bg-gray-100 hover:text-gray-600"
                />
                :
                <IconButton
                    icon={<Trash />}
                    onClick={() => removeFromCart(product.id)}
                    tooltip="Ukloni iz korpe"
                    additionalClass="text-red-500 hover:bg-red-100 hover:text-red-600"
                />
            }

            <span className="text-lg font-semibold">
                {product.quantity}
            </span>


            <IconButton
                icon={<Plus />}
                onClick={() => updateQuantity(product.id, 1)}
                tooltip="Povećaj količinu"
                additionalClass="text-gray-500 hover:bg-gray-100 hover:text-gray-600"
            />


        </div>
    );
}

export default CartItemActions