import { createMessage } from "@/api";
import { Message } from "@/components/messages/Message";
import { getAllMessages } from "@/use-case/chat.usecase";

export default async function Home() {
  const messages = await getAllMessages();

  return (
    <main className="flex h-[90%] bg-zinc-800">
      <div className="h-full m-auto">
        <section className="bg-zinc-700 min-w-[45rem] max-w-[56rem] h-5/6 overflow-y-auto px-4">
          {
            messages.data.map((message) => (
              <Message
                key={message.id}
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
        <form action={createMessage} className="flex justify-center items-center h-1/6 gap-5">
          <input type="text" name="message" className="w-full px-4 py-3 rounded-md" placeholder="Escriba un mensaje..." />
          <button className="bg-zinc-700 text-white px-4 py-3 rounded-md">Enviar</button>
        </form>
      </div>
    </main>
  );
}
