import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, UploadCloud, Settings2 } from "lucide-react";
import Section from "./Section";

export default function HowItWorks() {
    return (
        <Section sectionId="kako-funkcionise" title="Kako funkcioniše?">
            <div className="grid md:grid-cols-3 gap-6">
                <Card className="rounded-2xl shadow-md hover:shadow-lg transition">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                        <UploadCloud className="w-10 h-10 mb-4 text-blue-500" />
                        <h3 className="text-xl font-semibold mb-2">1. Izaberi dizajn</h3>
                        <p className="text-sm text-muted-foreground">
                            Odaberi ilustraciju iz naše kolekcije ili učitaj svoju sliku za personalizovani bedž.
                        </p>
                    </CardContent>
                </Card>

                <Card className="rounded-2xl shadow-md hover:shadow-lg transition">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                        <Settings2 className="w-10 h-10 mb-4 text-green-500" />
                        <h3 className="text-xl font-semibold mb-2">2. Podesi izgled</h3>
                        <p className="text-sm text-muted-foreground">
                            Podesi veličinu, poziciju slike i dodaj tekst. Sve promene vidiš uživo!
                        </p>
                    </CardContent>
                </Card>

                <Card className="rounded-2xl shadow-md hover:shadow-lg transition">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                        <CheckCircle className="w-10 h-10 mb-4 text-purple-500" />
                        <h3 className="text-xl font-semibold mb-2">3. Poruči</h3>
                        <p className="text-sm text-muted-foreground">
                            Kada si zadovoljan dizajnom, poruči bedž i mi ga štampamo i šaljemo na tvoju adresu.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </Section>
    );
}
