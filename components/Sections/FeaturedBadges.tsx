"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Section from "./Section";

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
        <Section sectionId="bedzevi" title="Popularni bedževi">
            <p className="mb-8 text-lg text-gray-700 px-3">
                Pogledaj najpopularnije bedževe koje su naši korisnici kreirali!
            </p>

            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-2xl shadow-lg md:max-w-md w-full max-w-[70vw] p-6 flex items-center justify-center hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                >
                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200 mb-4">
                            <Image
                                width={200}
                                height={200}
                                src={EXAMPLE_BADGES[index].image}
                                alt={EXAMPLE_BADGES[index].name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="text-lg font-semibold">{EXAMPLE_BADGES[index].name}</p>
                    </div>
                </motion.div>
            </AnimatePresence>
            <p className="mt-8 text-xs text-gray-700 px-6">
                Ovi bedževi su samo primeri. Naša platforma omogućava kreiranje
                bedževa po vašoj meri!
            </p>


            <Link href="/shop">
                <Button className="mt-8 px-6 text-base">Pogledaj sve bedževe</Button>
            </Link>
        </Section>
    );
}
