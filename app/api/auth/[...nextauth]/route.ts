import NextAuth, { Session, User as UserNA } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDatabase } from "@/lib/mongo";
import bcrypt from "bcrypt";
import { User, UserDoc } from "@/model/User";
import { JWT } from "next-auth/jwt";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                await connectToDatabase();

                const user = await User.findOne({ email: credentials?.email }).lean() as UserDoc | null;

                if (!user) return null;

                const isValid = await bcrypt.compare(credentials!.password, user.password);
                if (!isValid) return null;

                return {
                    id: user._id.toString(),
                    name: user.name || user.email,
                    email: user.email,
                };
            },
        }),
    ],
    session: {
        strategy: "jwt" as "jwt"
    },
    callbacks: {
        async jwt({ token, user }: { token: JWT; user?: UserNA | undefined }) {
            if (user) {
                token.user = user;
            }
            return token;
        },
        async session({ session, token }: { session: Session; token: JWT }) {
            session.user = token.user as any;
            return session;
        }
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
