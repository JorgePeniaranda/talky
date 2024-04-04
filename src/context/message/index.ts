'use client'

import { type IMessage } from '@/types'
import { type IMessageStore } from '@/types/store'
import { create } from 'zustand'

export const MessagesStore = create<IMessageStore>((set, get) => ({
  messages: [],
  getMessages: () => {
    return get().messages
  },
  setMessages: (messages: IMessage[]) => {
    set({ messages })
  },
  addMessage: (message: IMessage) => {
    set((state) => ({ messages: [...state.messages, message] }))
  },
  updateMessage: (updatedMessage: IMessage) => {
    set((state) => ({
      messages: state.messages.map((message) =>
        updatedMessage.id === message.id ? updatedMessage : message
      )
    }))
  },
  deleteMessage: (id: string) => {
    set((state) => ({
      messages: state.messages.filter((message) => message.id !== id)
    }))
  }
}))
