"use server"

import { axiosInstance } from "@/lib/axios";
import { IMessage } from "@/types";

export const getMessages = async () => {
  return await axiosInstance.get<IMessage[]>('/api/message');
}

export const createMessage = async (formData: FormData) => {
  const data = {message: formData.get('message'), idAuthor: "0"}
  return await axiosInstance.post<IMessage>('/api/message', data);
}