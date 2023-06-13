import prisma from "@/app/lib/prisma";

export async function GET(){
    const users = prisma.user.findMany();
    return new Response(JSON.stringify(users));
    console.log("login método get");
}