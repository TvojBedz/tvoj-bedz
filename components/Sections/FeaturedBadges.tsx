"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const EXAMPLE_BADGES = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    image: `https://picsum.photos/seed/featured-${i + 1}/200/200`,
    name: `Bedž ${i + 1}`,
}));

export default function FeaturedBadges() {
    const [index, setIndex] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % EXAMPLE_BADGES.length);

        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-16 text-center px-6 " id="bedzevi">
            <h2 className="text-4xl font-bold mb-6">
                Popularni bedževi
            </h2>

            <p className="mb-8 text-lg text-gray-700">
                Pogledaj najpopularnije bedževe koje su naši korisnici kreirali!
            </p>

            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="p-2 bg-white rounded-2xl shadow-lg md:max-w-md mx-auto"
                >
                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200 mb-4">
                            <img
                                src={EXAMPLE_BADGES[index].image}
                                alt={EXAMPLE_BADGES[index].name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="text-lg font-semibold">{EXAMPLE_BADGES[index].name}</p>
                    </div>
                </motion.div>
            </AnimatePresence>
            <p className="mt-8 text-xs text-gray-700">
                Ovi bedževi su samo primeri. Naša platforma omogućava kreiranje
                bedževa po vašoj meri!
            </p>


            <Link href="/shop">
                <Button className="mt-8 px-6 text-base">Pogledaj sve bedževe</Button>
            </Link>
        </section>
    );
}
