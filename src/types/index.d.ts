export interface Author {
  name: string
  urlImage?: string | null
}

export interface IMessage {
  id: string
  message: string
  deleted: boolean
  updatedAt: Date | string
  createdAt: Date | string
  author: Author
}

export enum MessageStatus {
  RECEIVED = 0,
  SENT = 1,
}
