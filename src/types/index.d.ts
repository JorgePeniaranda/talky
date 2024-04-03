export interface IMessage {
  image?: string | null
  username: string | null
  message: string
  date: Date
  deleted?: boolean
  edited?: boolean
  status: MessageStatus
}

export enum MessageStatus {
  SENT = 0,
  RECEIVED = 1
}