import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest){
  const { idAuthor, message } = await request.json()

  const messages = await prisma.message.create({
    data: {
      idAuthor,
      message
    }
  })

  return NextResponse.json({messages})
}