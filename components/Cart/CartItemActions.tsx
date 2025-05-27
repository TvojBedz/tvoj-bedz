import Badge from "@/model/Badge";
import { useCart } from "@/context/CartContext";
import { Minus, Plus } from "lucide-react";
import IconButton from "../ui/iconButton";

interface CartItemActionsProps {
    product: Badge;
}

const CartItemActions = ({ product }: CartItemActionsProps) => {
    const { updateQuantity } = useCart();


    return (
        <div className="flex items-center gap-3">
            <IconButton
                icon={<Minus />}
                onClick={() => updateQuantity(product.id, -1)}
                tooltip="Smanji količinu"
                additionalClass="text-red-500 hover:bg-red-100 hover:text-red-600"
            />

            <span className="text-lg font-semibold w-[30px] text-center text-gray-800">
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