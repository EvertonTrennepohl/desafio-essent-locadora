import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(){
    const users = await prisma.user.findMany();
    return new Response(JSON.stringify(users));
    console.log("login método get");
}

export async function POST(req: NextRequest, res: NextResponse){
    const {email, password, name, cpf} = await req.json();
    const user = await prisma.user.create({
        data: {
            email,
            password,
            name,
            cpf
        }
    })
    console.log (JSON.stringify(user));
    return new Response(JSON.stringify(user));
}