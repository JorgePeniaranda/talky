"use client"

import { MessagesStore } from "@/context/message";

// export async function getAllMessages() {
//   return await getMessages();
// }

export function sendMessage(formData: any) {
  formData.preventDefault();

  console.log('formData', formData)

  MessagesStore.getState().addMessage({
    id: '1',
    message: "W",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deleted: false,
    author: {
      name: 'User',
    }
  })

  console.log(MessagesStore.getState().getMessages())
  // return await createMessage(formData);
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