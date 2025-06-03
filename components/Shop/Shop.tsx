import { Metadata } from "next";
import Image from "next/image";
import AddToCartButton from "./AddToCartButton";
import { allProducts } from "@/model/Badge";
import { PaginationWithLinks } from "./PaginationControl";

export const metadata: Metadata = {
    title: "Shop | TvojBedž",
    description: "Izaberi gotove bedževe iz naše kolekcije.",
};

const PRODUCTS_PER_PAGE = 8;



export default function Shop({ page }: { page: number }) {
    const startIndex = (page - 1) * PRODUCTS_PER_PAGE;
    const currentProducts = allProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);


    return (
        <section className="bg-gray-50 mx-auto px-4 py-16 w-full min-h-screen flex flex-col items-center">
            <h1 className="text-4xl font-extrabold mb-8 text-center tracking-tight">
                Naša Kolekcija Bedževa
            </h1>

            <div className="max-w-6xl mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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

            <PaginationWithLinks
                page={page}
                pageSize={PRODUCTS_PER_PAGE}
                totalCount={allProducts.length}
                pageSearchParam="page"
            />

        </section>
    );
}