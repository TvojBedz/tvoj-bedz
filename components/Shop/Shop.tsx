import { Metadata } from "next";
import Image from "next/image";
import AddToCartButton from "./AddToCartButton";
import { returnPaginatedPages } from "@/utils/pagination";

export const metadata: Metadata = {
    title: "Shop | TvojBedž",
    description: "Izaberi gotove bedževe iz naše kolekcije.",
};

const PRODUCTS_PER_PAGE = 8;

const allProducts = [
    ...Array.from({ length: 120 }, (_, i) => ({
        id: i + 1,
        name: `Bedž #${i + 1}`,
        image: `https://picsum.photos/seed/${i + 1}/200/200`,
        price: "250 RSD",
    })),
];

export default function Shop({ page }: { page: number }) {
    const totalPages = Math.ceil(allProducts.length / PRODUCTS_PER_PAGE);
    const startIndex = (page - 1) * PRODUCTS_PER_PAGE;
    const currentProducts = allProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

    const paginatedPages = returnPaginatedPages(page, totalPages);


    return (
        <section className="bg-gray-50 max-w-6xl mx-auto px-4 py-16 rounded-2xl">
            <h1 className="text-4xl font-extrabold mb-8 text-center tracking-tight">
                Naša Kolekcija Bedževa
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {currentProducts.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6 flex flex-col items-center text-center transition-all border border-transparent hover:border-orange-500"
                    >
                        <div className="relative w-32 h-32 mb-4">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                title={product.name}
                                className="rounded-full object-cover shadow-sm"
                            />
                        </div>
                        <h2 className="text-xl font-semibold mb-1 text-gray-800">
                            {product.name}
                        </h2>
                        <p className="text-sm text-orange-600 font-semibold mb-4">
                            {product.price}
                        </p>
                        <AddToCartButton product={product} />
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-12 gap-1 flex-wrap items-center">
                {paginatedPages.map((item, i) =>
                    item === "..." ? (
                        <span key={i} className="px-2 py-2 text-gray-400">…</span>
                    ) : (
                        <a
                            key={`page${item}`}
                            href={`?page=${item}`}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition border ${item === page
                                ? "bg-orange-500 text-white border-orange-500"
                                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                                }`}
                        >
                            {item}
                        </a>
                    )
                )}
            </div>

        </section>
    );
}