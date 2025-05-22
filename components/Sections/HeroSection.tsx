import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
    return (
        <section id='hero' className=" py-10 px-6  w-full flex flex-col-reverse md:flex-row items-center justify-end gap-4 max-w-7xl mx-auto md:min-h-screen">
            {/* Left side */}
            <div className="w-full  text-center md:text-left space-y-4">
                <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight">
                    Tvoj <span className="text-orange-600">Bedž.</span> Tvoja Priča.
                </h1>
                <p className="text-gray-700 text-lg max-w-md mx-auto md:mx-0">
                    Odaberi boju, ubaci svoju sliku ili tekst, i kreiraj bedž koji je baš po tvojoj meri. Ako nemaš inspiraciju, tu su i naši predlozi!
                </p>
                <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 w-full sm:w-auto pt-2">
                    <Link href="#bedzevi" className="w-full sm:w-auto">
                        <Button className="text-lg font-semibold px-6 py-6 w-full sm:w-auto bg-orange-600 text-white hover:bg-orange-700 transition duration-200">
                            Dizajniraj svoj bedž
                        </Button>
                    </Link>
                </div>


            </div>

            <div className="w-full md:w-1/2 flex justify-center">
                <Image
                    src="/hero-badge.png"
                    alt="Tvoj Bedž Ilustracija"
                    width={500}
                    height={500}
                    className="w-[240px] sm:w-[300px] md:w-[500px] lg:w-[600px] h-auto"
                    priority
                />
            </div>
        </section>
    );
}
