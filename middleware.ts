import {NextRequestWithAuth, withAuth} from "next-auth/middleware";
import {NextResponse} from "next/server";

export default withAuth(
    function middleware(request: NextRequestWithAuth) {
        if (request.nextUrl.pathname.startsWith("/admin") && request.nextauth.token?.role !== "0001") {
            return NextResponse.rewrite(new URL("/denied", request.url))
        }
        if (request.nextUrl.pathname.startsWith("/client") && request.nextauth.token?.role !== "0002") {
            return NextResponse.rewrite(new URL("/denied", request.url))
        }
    },
    {
        callbacks: {
            authorized: ({token}) => !!token
        }
    }
);

export const config = {
    matcher: ["/admin/:path*", "/client/:path*"]
}