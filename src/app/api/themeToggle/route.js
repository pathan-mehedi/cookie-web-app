import { cookies } from "next/headers";

async function create(data) {
    let response = NextResponse.next();
    response.cookies.set("show-banner", "false");

    return response;
}
