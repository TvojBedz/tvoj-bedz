"use server";

import { log } from "console";
import { cookies } from "next/headers";

export async function addToCart(formData: FormData) {
    log("Adding to cart");
    log(formData);
    const id = formData.get("productId");
    const name = formData.get("productName");
    const image = formData.get("productImage");
    const price = formData.get("productPrice");

    const cookieStore = await cookies();
    const raw = cookieStore.get("cart")?.value;
    let cart = raw ? JSON.parse(raw) : [];

    const existing = cart.find((item: any) => item.id === id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ id, name, image, price, quantity: 1 });
    }

    log

    cookieStore.set("cart", JSON.stringify(cart), {
        path: "/",
        maxAge: 60 * 60 * 24 * 7, // 7 dana
    });
}
