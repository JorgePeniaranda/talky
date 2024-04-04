import { IMessage } from "."

export interface IMessageStore {
  messages: IMessage[]
  getMessages: () => IMessage[]
  setMessages: (messages: IMessage[]) => void
  addMessage: (message: IMessage) => void
  updateMessage: (updatedMessage: IMessage) => void
  deleteMessage: (id: string) => void
}