'use client'

import { createMessage, getMessages } from '@/api'
import { MessagesStore } from '@/context/message'
import { type IMessage } from '@/types'

export async function getAllMessages (): Promise<IMessage[]> {
  return await getMessages()
}

export function sendMessage (form: ChatForm, callback?: () => void): void {
  const prevMessagesState = MessagesStore.getState().getMessages()

  MessagesStore.getState().addMessage({
    id: '1',
    message: form.message,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deleted: false,
    author: {
      name: 'User'
    }
  })

  createMessage(form.message)
    .then(() => {
      if (typeof callback === 'function') callback()
    })
    .catch(() => {
      MessagesStore.getState().setMessages(prevMessagesState)
    })
}

// const messagesFormatted: IMessage[] = messages.map(message => {
//   return {
//     image: message.Sender.urlImage,
//     username: message.Sender.name,
//     message: message.message,
//     date: message.createdAt,
//     deleted: message.deleted,
//     edited: message.createdAt !== message.createdAt,
//     status: false ? MessageStatus.RECEIVED : MessageStatus.SENT
//   }
// })
