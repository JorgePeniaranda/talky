import { prisma } from "@/lib/prisma";
import { IMessage, MessageStatus } from "@/types/index.d";
import { NextRequest, NextResponse } from "next/server";

/*
  image,
  username,
  message,
  date,
  deleted,
  edited,
  status,
*/

export async function GET(){
  const messages = await prisma.message.findMany({
    select: {
      id: true,
      message: true,
      deleted: true,
      createdAt: true,
      Sender: {
        select: {
          name: true,
          urlImage: true
        }
      },
      Receiver: {
        select: {
          name: true,
          urlImage: true
        }
      }
    }
  })

  const messagesFormatted: IMessage[] = messages.map(message => {
    return {
      image: message.Sender.urlImage,
      username: message.Sender.name,
      message: message.message,
      date: message.createdAt,
      deleted: message.deleted,
      edited: message.createdAt !== message.createdAt,
      status: false ? MessageStatus.RECEIVED : MessageStatus.SENT
    }
  })

  return NextResponse.json(messagesFormatted)
}

export async function POST(request: NextRequest){
  const { idSender, idReceiver, message } = await request.json()

  const messages = await prisma.message.create({
    data: {
        idSender,
        idReceiver,
        message
    }
  })

  if(messages === null){
      return NextResponse.json({message: []})
  }

  return NextResponse.json({messages})
}