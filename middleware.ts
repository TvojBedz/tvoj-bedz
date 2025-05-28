import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { UserDoc } from "./model/User";

export async function middleware(req: NextRequest) {
    const token = await getToken({ req });
    const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");

    const user = token?.user as UserDoc | undefined;

    if (isAdminRoute && (!token || user?.role !== "admin")) {
        return NextResponse.redirect(new URL("/", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*"],
};
