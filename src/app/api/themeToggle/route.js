import { cookies } from "next/headers";

async function create(data) {
    let response = NextResponse.next();
    response.cookies.set("light", "true");

    return response;
}
