import { prisma } from '@/lib/prisma'
import { type NextRequest, NextResponse } from 'next/server'

export async function POST (request: NextRequest): Promise<NextResponse> {
  const { idAuthor, message } = await request.json()

  const messages = await prisma.message.create({
    data: {
      idAuthor,
      message
    }
  })

  return NextResponse.json({ messages })
}
