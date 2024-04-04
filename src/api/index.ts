'use server'

import { axiosInstance } from '@/lib/axios'
import { type IMessage } from '@/types'

export const getMessages = async (): Promise<IMessage[]> => {
  const { data } = await axiosInstance.get<IMessage[]>('/api/message')
  return data
}

export const createMessage = async (message: string): Promise<void> => {
  const data = { message, idAuthor: '0' }
  await axiosInstance.post<IMessage>('/api/message', data)
}
