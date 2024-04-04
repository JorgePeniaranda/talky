"use client"

import { IMessage } from '@/types'
import { IMessageStore } from '@/types/store'
import { create } from 'zustand'

export const MessagesStore = create<IMessageStore>((set, get) => ({
    messages: [],
    getMessages: () => {
      return get().messages
    },
    setMessages: (messages: IMessage[]) => {
      return set({ messages })
    },
    addMessage: (message: IMessage) => {
      return set((state) => ({ messages: [...state.messages, message] }))
    },
    updateMessage: (updatedMessage: IMessage) => {
      return set((state) => ({
        messages: state.messages.map((message) => (message.id === message.id ? updatedMessage : message)),
      }))
    },
    deleteMessage: (id: string) => {
      return set((state) => ({
        messages: state.messages.filter((message) => message.id !== id),
      }))
    }
}))
