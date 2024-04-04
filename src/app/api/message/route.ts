import { prisma } from "@/lib/prisma";
import { IMessage } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(){
  const messages = await prisma.message.findMany({
    select: {
      id: true,
      message: true,
      deleted: true,
      updatedAt: true,
      createdAt: true,
      author: {
        select: {
          name: true,
          account: {
            select: {
              urlImage: true
            }
          }
        }
      }
    }
  })

  const messagesWithAuthor: IMessage[] = messages.map(message => {
    return {
      id: message.id,
      message: message.message,
      deleted: message.deleted,
      createdAt: message.createdAt,
      updatedAt: message.updatedAt,
      author:{
        name: message.author.name,
        urlImage: message.author.account?.urlImage
      }
    }
  })

  return NextResponse.json(messagesWithAuthor)
}

export async function POST(request: NextRequest){
  const { idAuthor, message } = await request.json()

  const newMessage = await prisma.message.create({
    data: {
        idAuthor,
        message
    }
  })

  return NextResponse.json(newMessage, {status: 201})
}

export async function PATCH(request: NextRequest){
  const { id, message } = await request.json()

  const updatedMessage = await prisma.message.update({
    where:{
      id
    },
    data: {
        message
    }
  })

  return NextResponse.json(updatedMessage, {status: 201})
}

export async function DELETE(request: NextRequest){
  const { id } = await request.json()

  const newMessage = await prisma.message.update({
    where:{
      id
    },
    data: {
      deleted: true      
    },
  })

  return NextResponse.json(newMessage, {status: 201})
}