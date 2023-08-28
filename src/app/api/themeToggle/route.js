import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {headers} from "next/headers"


export async function POST(req, res) {

    let {searchParams} =new URL(req.url);
    let name = searchParams.get('name');
    let city = searchParams.get('city');

    return NextResponse.json({msg: name})
}