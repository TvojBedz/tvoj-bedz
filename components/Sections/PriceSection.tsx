import { Card, CardContent } from "@/components/ui/card";
import { BadgeDollarSign, Gift, Users } from "lucide-react";
import Section from "./Section";

export default function PricingSection() {
    return (
        <Section sectionId="cenovnik" title="Izaberi paket koji ti odgovara">
            <p className="text-muted-foreground mb-10 text-lg">
                Bilo da naručuješ jedan bedž ili sto – imamo ponudu za tebe.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Pojedinačni */}
                <div>
                    <Card className="rounded-2xl shadow-md hover:scale-[1.02] transition-transform duration-300 md:min-h-[400px]">
                        <CardContent className=" py-2 text-center flex flex-col items-center">
                            <BadgeDollarSign className="w-8 h-8 mx-auto text-orange-600 mb-2" />
                            <h3 className="text-xl font-semibold mb-2">Pojedinačni</h3>
                            <p className="text-3xl font-bold text-orange-600 mb-4">250 RSD</p>
                            <ul className="text-left text-muted-foreground space-y-2 text-lg">
                                <li>✔️ Dizajniraj svoj bedž</li>
                                <li>✔️ Online pregled bedža</li>
                                <li>✔️ Brza i jeftina isporuka</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                {/* Mini Paket */}
                <div>
                    <Card className="rounded-2xl shadow-md border border-orange-500 hover:scale-[1.02] transition-transform duration-300 md:min-h-[400px]">
                        <CardContent className="py-2 text-center flex flex-col items-center">
                            <Gift className="w-8 h-8 mx-auto text-orange-600 mb-2" />
                            <h3 className="text-xl font-semibold mb-2">Mini Paket (5 kom)</h3>
                            <p className="text-3xl font-bold text-orange-600 mb-4">1.000 RSD</p>
                            <ul className="text-left text-muted-foreground space-y-2 text-lg">
                                <li>✔️ Više dizajna u paketu</li>
                                <li>✔️ Poklon za prijatelje</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                {/* Grupni Paket */}
                <div>
                    <Card className="rounded-2xl shadow-md hover:scale-[1.02] transition-transform duration-300 md:min-h-[400px]">
                        <CardContent className="py-2 text-center flex flex-col items-center">
                            <Users className="w-8 h-8 mx-auto text-orange-600 mb-2" />
                            <h3 className="text-xl font-semibold mb-2">Grupni Paket (20+ kom)</h3>
                            <p className="text-3xl font-bold text-orange-600 mb-4">3.000 RSD</p>
                            <ul className="text-left text-muted-foreground space-y-2 text-lg">
                                <li>✔️ Idealno za timove i događaje</li>
                                <li>✔️ Besplatna dostava</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <p className="text-sm text-muted-foreground mt-8">
                📢 Za veće porudžbine (50+ kom) kontaktiraj nas za posebnu ponudu!
            </p>
        </Section>
    );
}
