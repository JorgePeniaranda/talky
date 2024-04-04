"use server"

import { axiosInstance } from "@/lib/axios";
import { IMessage } from "@/types";

export const getMessages = async () => {
  return await axiosInstance.get<IMessage[]>('/api/message');
}

export const createMessage = async (message: string): Promise<void> => {
  const data = {message, idAuthor: "0"}
  await axiosInstance.post<IMessage>('/api/message', data);
}