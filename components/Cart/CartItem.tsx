import Badge from "@/model/Badge";
import Image from "next/image";
import CartItemActions from "./CartItemActions";

const IMAGE_SIZE = 80;

interface CartItemProps {
    product: Badge;
}

const CartItem = ({ product }: CartItemProps) => {

    return (
        <div key={product.id} className="flex gap-4 p-2 items-center justify-between">
            <Image
                src={product.image}
                alt={product.name}
                width={IMAGE_SIZE}
                height={IMAGE_SIZE}
                className="rounded-full border object-cover"
            />
            <div className="flex flex-col flex-1 text-left">
                <p className="text-md font-semibold text-gray-800 truncate max-w-full">
                    {product.name}
                </p>
                <div className="flex items-center gap-4">
                    <span className="text-gray-600 min-w-[100px]">
                        {product.price * product.quantity} RSD
                    </span>
                    <CartItemActions product={product} />
                </div>
            </div>


        </div>
    )
}

export default CartItem