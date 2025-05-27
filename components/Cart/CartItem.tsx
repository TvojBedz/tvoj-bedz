import Badge from "@/model/Badge";
import Image from "next/image";
import CartItemActions from "./CartItemActions";

const IMAGE_SIZE = 80;

interface CartItemProps {
    product: Badge;
}

const CartItem = ({ product }: CartItemProps) => {

    return (
        <div key={product.id} className="flex gap-4 p-1 items-center  border-b border-gray-200 w-full ">
            <Image
                src={product.image}
                alt={product.name}
                width={IMAGE_SIZE}
                height={IMAGE_SIZE}
                className="rounded-md border object-cover"
            />
            <div className="flex flex-col text-left  w-full gap-2 justify-between">
                <div className="flex items-center gap-4 justify-between">
                    <p className="text-lg font-semibold text-gray-800 truncate max-w-full">
                        {product.name}
                    </p>
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