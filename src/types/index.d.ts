export interface IMessage {
  image?: string
  username: string
  message: string
  date: Date
  deleted?: boolean
  edited?: boolean
}

export enum MessageStatus {
  SENT = 0,
  RECEIVED = 1
}