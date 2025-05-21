import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full border-t bg-white text-gray-600 text-sm">
            <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Leva strana */}
                <div className="text-center md:text-left">
                    <p className="text-base font-semibold text-gray-800">TvojBedž</p>
                    <p className="text-xs text-gray-500 mt-1">
                        © {new Date().getFullYear()} Sva prava zadržana.
                    </p>
                </div>

                {/* Navigacija */}
                <nav className="flex flex-col md:flex-row gap-3 md:gap-6 text-sm text-center md:text-left">
                    <Link href="/#kako-funkcionise" className="hover:text-black transition">
                        Kako funkcioniše
                    </Link>
                    <Link href="/#bedzevi" className="hover:text-black transition">
                        Bedževi
                    </Link>
                    <Link href="/#kontakt" className="hover:text-black transition">
                        Kontakt
                    </Link>
                </nav>

                {/* Kontakt */}
                <div className="text-center md:text-right text-sm text-gray-500">
                    <p>Za pitanja: <a href="mailto:kontakt@tvojbedz.rs" className="underline hover:text-black">kontakt@tvojbedz.rs</a></p>
                </div>
            </div>
        </footer>
    );
}
