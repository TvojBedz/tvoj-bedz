import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PricingSection() {
    return (
        <section className="w-full py-20" id="cenovnik">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-4">Izaberi paket koji ti odgovara</h2>
                <p className="text-muted-foreground mb-10 text-lg">
                    Bilo da naručuješ jedan bedž ili sto – imamo ponudu za tebe.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Pojedinačni */}
                    <Card className="rounded-2xl shadow-md">
                        <CardContent className="p-6">
                            <h3 className="text-xl font-semibold mb-2">Pojedinačni</h3>
                            <p className="text-3xl font-bold text-orange-600 mb-4">250 RSD</p>
                            <ul className="text-left text-muted-foreground space-y-2">
                                <li>✔️ Personalizuj dizajn</li>
                                <li>✔️ Online pregled</li>
                                <li>✔️ Brza isporuka</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Mini Paket */}
                    <Card className="rounded-2xl shadow-md border border-orange-500">
                        <CardContent className="p-6">
                            <h3 className="text-xl font-semibold mb-2">Mini Paket (5 kom)</h3>
                            <p className="text-3xl font-bold text-orange-600 mb-4">1.000 RSD</p>
                            <ul className="text-left text-muted-foreground space-y-2">
                                <li>✔️ Više dizajna u paketu</li>
                                <li>✔️ Poklon za prijatelje</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Grupni Paket */}
                    <Card className="rounded-2xl shadow-md">
                        <CardContent className="p-6">
                            <h3 className="text-xl font-semibold mb-2">Grupni Paket (20+ kom)</h3>
                            <p className="text-3xl font-bold text-orange-600 mb-4">3.000 RSD</p>
                            <ul className="text-left text-muted-foreground space-y-2">
                                <li>✔️ Idealno za timove i događaje</li>
                                <li>✔️ Besplatna dostava</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                <p className="text-sm text-muted-foreground mt-8">
                    📢 Za veće porudžbine (50+ kom) kontaktiraj nas za posebnu ponudu!
                </p>

            </div>
        </section>
    );
}
