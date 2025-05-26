import Badge from "@/model/Badge";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import CartItemActions from "./CartItemActions";

interface CartItemProps {
    product: Badge;
}

const CartItem = ({ product }: CartItemProps) => {

    return (
        <Card key={product.id} className="shadow-md p-0">
            <CardContent className="flex gap-4 p-2 items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={80}
                        height={80}
                        className="rounded-full border object-cover"
                    />
                    <div>
                        <p className="text-lg font-medium">{product.name}</p>
                        <p className="text-sm text-gray-500">Cena: {product.price} RSD</p>
                    </div>
                </div>

                <CartItemActions product={product} />
            </CardContent>
        </Card>
    )
}

export default CartItem