'use client'

import { Message } from '@/components/messages/Message'
import { useFetchMessages } from '@/hooks/useFetchMessages'
import { ChatSchema } from '@/schemas/chat.schema'
import { type IMessage } from '@/types'
import { sendMessage } from '@/use-case/chat.usecase'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

export default function Home (): React.ReactNode {
  const { data, isLoading } = useFetchMessages()
  const {
    handleSubmit,
    register,
    reset,
    formState: { isValid, isDirty }
  } = useForm<ChatForm>({
    resolver: zodResolver(ChatSchema)
  })

  if (isLoading) {
    return (
      <main className="flex h-[90%] bg-zinc-800 text-white justify-center items-center">
        Cargando...
      </main>
    )
  }

  return (
    <main className="flex h-[90%] bg-zinc-800">
      <div className="h-full m-auto">
        <section className="bg-zinc-700 min-w-[45rem] max-w-[56rem] h-5/6 overflow-y-auto px-4">
          {(data as IMessage[]).map((message, index) => (
            <Message
              key={index}
              id={message.id}
              message={message.message}
              deleted={message.deleted}
              updatedAt={message.updatedAt}
              createdAt={message.createdAt}
              author={message.author}
            />
          ))}
        </section>
        <form
          onSubmit={handleSubmit((form) => {
            sendMessage(form, reset)
          })}
          className="flex justify-center items-center h-1/6 gap-5"
        >
          <input
            type="text"
            className="w-full px-4 py-3 rounded-md outline-none"
            placeholder="Escriba un mensaje..."
            {...register('message')}
          />
          <button
            type="submit"
            className="bg-zinc-700 text-white px-4 py-3 rounded-md disabled:bg-red-950"
            disabled={!isDirty || !isValid}
          >
            Enviar
          </button>
        </form>
      </div>
    </main>
  )
}
