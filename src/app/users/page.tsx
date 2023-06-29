import { NextResponse } from "next/server";

export async function Users(request: Request) {
    const result = await fetch("https://desafio-essent-locadora-everton.vercel.app/login");
    const data = result.json();
    return NextResponse.json({data});
}