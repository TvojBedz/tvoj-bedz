"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
    {
        name: "Jovana M.",
        avatar: "/test.jpeg",
        text: "TvojBedž mi je omogućio da napravim bedž za devojačko veče! Sve pohvale!",
    },
    {
        name: "Nikola P.",
        avatar: "/test.jpeg",
        text: "Kvalitet štampe me iznenadio! Bedževi su stigli brzo i lepo zapakovani.",
    },
    {
        name: "Marija K.",
        avatar: "/test.jpeg",
        text: "Toliko je jednostavno da napravim svoj dizajn! Preporučujem svima.",
    },
];

export default function UserReviewsCarousel() {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((prev) => (prev + 1) % reviews.length);
    const prev = () =>
        setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

    return (
        <section className="py-12 bg-gray-50" id="recenzije">
            <div className="max-w-xl mx-auto px-4 text-center min-h-screen">
                <h2 className="text-4xl font-bold mb-12">Recenzije korisnika</h2>
                <div className="relative flex items-center justify-center gap-2">
                    {/* Strelica levo */}
                    <button
                        onClick={prev}
                        className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition z-10"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>

                    {/* Recenzija */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            className="p-2 bg-white rounded-2xl shadow-lg md:max-w-md max-w-[70vw]"
                        >
                            <div className="flex flex-col items-center min-h-[250px]">
                                <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200 mb-4">
                                    <img
                                        src={reviews[index].avatar}
                                        alt={reviews[index].name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <p className="text-lg font-semibold">{reviews[index].name}</p>
                                <p className="text-gray-600 mt-3">{reviews[index].text}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Strelica desno */}
                    <button
                        onClick={next}
                        className=" p-2 rounded-full bg-white shadow hover:bg-gray-100 transition z-10"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div >

                {/* Indicators */}
                <div className="flex justify-center mt-4 gap-2" >
                    {
                        reviews.map((_, i) => (
                            <div
                                key={i}
                                className={`w-3 h-3 rounded-full ${i === index ? "bg-orange-500" : "bg-gray-300"
                                    }`}
                            ></div>
                        ))
                    }
                </div>
            </div >
        </section >
    );
}
