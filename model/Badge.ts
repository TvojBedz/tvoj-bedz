interface Badge {
    id: string;
    name: string;
    image: string;
    price: string;
    quantity: number;
}

export default Badge;

export const allProducts: Badge[] = [
    ...Array.from({ length: 120 }, (_, i) => ({
        id: `id-${i + 1}`,
        name: `Bedž #${i + 1}`,
        image: `https://picsum.photos/seed/${i + 1}/200/200`,
        price: "250 RSD",
        quantity: 1,
    })),
]