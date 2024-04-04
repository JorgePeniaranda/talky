import { createMessage, getMessages } from "@/api";

export async function getAllMessages() {
  return await getMessages();
}

export async function sendMessage(formData: FormData) {
  return await createMessage(formData);
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