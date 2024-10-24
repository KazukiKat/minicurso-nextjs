import { db } from "@/prisma/db";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const {titulo,descricao,conteudo,imagem} = await request.json()
    console.log(titulo)
    await db.noticias.create({
        data:{
            titulo,
            conteudo,
            imagem,
            descricao
        }
    })

    revalidatePath('/')

    return NextResponse.json({
        status: 201,
        mensagem: "Sucesso"
    })
}