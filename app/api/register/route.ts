import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongo";
import bcrypt from "bcrypt";
import { User } from "@/model/User";

export async function POST(req: Request) {
    try {
        const { name, email, password } = await req.json();

        if (!name || !email || !password) {
            return NextResponse.json({ error: "Sva polja su obavezna." }, { status: 400 });
        }

        if (password.length < 6) {
            return NextResponse.json({ error: "Lozinka mora imati najmanje 6 karaktera." }, { status: 400 });
        }

        await connectToDatabase();

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ error: "Korisnik već postoji." }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({ name, email, password: hashedPassword });

        return NextResponse.json({ success: true, message: "Registracija uspešna." });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Greška na serveru." }, { status: 500 });
    }
}
