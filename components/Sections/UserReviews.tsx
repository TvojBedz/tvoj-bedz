"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const reviews = [
    {
        name: "Jovana M.",
        avatar: "/avatars/jovana.jpg",
        text: "TvojBedž mi je omogućio da napravim bedž za devojačko veče! Sve pohvale!",
    },
    {
        name: "Nikola P.",
        avatar: "/avatars/nikola.jpg",
        text: "Kvalitet štampe me iznenadio! Bedževi su stigli brzo i lepo zapakovani.",
    },
    {
        name: "Marija K.",
        avatar: "/avatars/marija.jpg",
        text: "Toliko je jednostavno da napravim svoj dizajn! Preporučujem svima.",
    },
];

export default function UserReviews() {
    return (
        <section className="py-12 bg-gray-50" id="recenzije">
            <div className="max-w-5xl mx-auto px-4 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold mb-8"
                >
                    Recenzije korisnika
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                        >
                            <Card className="p-4 shadow-lg hover:shadow-xl transition duration-300">
                                <CardContent className="flex flex-col items-center text-center">
                                    <Avatar className="mb-4">
                                        <AvatarImage src={review.avatar} alt={review.name} />
                                        <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <p className="text-lg font-medium">{review.name}</p>
                                    <p className="text-sm text-gray-600 mt-2">{review.text}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
