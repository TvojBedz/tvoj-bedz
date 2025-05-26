import Badge from "@/model/Badge";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Button } from "../ui/button";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useCookies } from "next-client-cookies";

interface ProductQuantityProps {
    product: Badge;
}

const ProductQuantity = ({ product }: ProductQuantityProps) => {
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
        <Card key={product.id} className="shadow-md">
            <CardContent className="flex flex-col gap-4 p-6">
                <div className="flex items-center gap-4">
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={80}
                        height={80}
                        className="rounded-md border object-cover"
                    />
                    <div>
                        <p className="text-lg font-medium">{product.name}</p>
                        <p className="text-sm text-gray-500">Cena: {product.price} RSD</p>
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    {/* Animirana količina */}
                    <div
                        className={`text-lg font-bold transition-transform duration-200 ${animated ? "scale-110" : ""
                            }`}
                    >
                        Količina: {product.quantity}
                    </div>

                    {/* Dugmad sa tooltip-ovima */}
                    <div className="flex items-center gap-2">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    size="icon"
                                    variant="ghost"
                                    onClick={() => updateQuantity(product.id, -1)}
                                >
                                    −
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>Umanji količinu</TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    size="icon"
                                    variant="ghost"
                                    onClick={() => updateQuantity(product.id, 1)}
                                >
                                    +
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>Povećaj količinu</TooltipContent>
                        </Tooltip>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default ProductQuantity