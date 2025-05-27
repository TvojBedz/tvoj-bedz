import Badge from "@/model/Badge";
import Image from "next/image";
import CartItemActions from "./CartItemActions";
import IconButton from "../ui/iconButton";
import { X } from "lucide-react";
import { useCart } from "@/context/CartContext";

const IMAGE_SIZE = 120;

interface CartItemProps {
    product: Badge;
}

const CartItem = ({ product }: CartItemProps) => {
    const { removeFromCart } = useCart();

    return (
        <div key={product.id} className="flex gap-2 p-2 items-center  border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200 ease-in-out w-full rounded-md hover:shadow-sm cursor-pointer">
            <Image
                src={product.image}
                alt={product.name}
                width={IMAGE_SIZE}
                height={IMAGE_SIZE}
                className="rounded-md border object-cover"
            />
            <div className="flex flex-col text-left  w-full gap-2 h-[90px] justify-between">
                <div className="flex items-center gap-4 justify-between">

                    <p className="text-md font-semibold text-gray-800 truncate max-w-full">
                        {product.name}
                    </p>
                    <IconButton
                        icon={<X />}
                        onClick={() => removeFromCart(product.id)}
                        tooltip="Ukloni iz korpe"
                        additionalClass="text-red-500 hover:bg-red-100 hover:text-red-600"
                    />
                </div>

                <div className="flex items-center gap-4 justify-between">
                    <span className=" min-w-[100px] text-md  text-gray-800">
                        {product.price * product.quantity} RSD
                    </span>
                    <CartItemActions product={product} />
                </div>

            </div>
        </div>
    )
}

export default CartItem