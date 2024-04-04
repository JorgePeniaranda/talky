"use client"

import { getMessages } from "@/api";
import { Message } from "@/components/messages/Message";
import { MessagesStore } from "@/context/message";
import { sendMessage } from "@/use-case/chat.usecase";
import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true)
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors }
  } = useForm<ChatForm>({})
  const messages = MessagesStore(state => state.messages);

  useEffect(() => {
    setLoading(true)
    getMessages().then((messages) => {
      MessagesStore.getState().setMessages(messages);
    })
    setLoading(false)
  }, [])

  if(loading) return <main className="flex h-[90%] bg-zinc-800 text-white justify-center items-center">Cargando...</main>

  return (
    <main className="flex h-[90%] bg-zinc-800">
      <div className="h-full m-auto">
        <section className="bg-zinc-700 min-w-[45rem] max-w-[56rem] h-5/6 overflow-y-auto px-4">
          {
            messages.map((message, index) => (
              <Message
                key={index}
                id={message.id}
                message={message.message}
                deleted={message.deleted}
                updatedAt={message.updatedAt}
                createdAt={message.createdAt}
                author={message.author}
              />
            ))
          }
        </section>
        <form onSubmit={handleSubmit((form) => sendMessage(form, reset))} className="flex justify-center items-center h-1/6 gap-5">
          <input type="text" className="w-full px-4 py-3 rounded-md" placeholder="Escriba un mensaje..." {...register('message')}/>
          <button type="submit" className="bg-zinc-700 text-white px-4 py-3 rounded-md">Enviar</button>
        </form>
      </div>
    </main>
  );
}
