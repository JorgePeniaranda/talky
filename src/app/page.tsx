import { Message } from "@/components/messages/Message";
import { IMessage } from "@/types/index.d";
import axios from "axios";

const getMessages = async () => {
  return await axios.get<IMessage[]>('http://localhost:3000/api/message');
}

export default async function Home() {
  const messages = await getMessages();

  return (
    <main className="flex h-[90%] bg-zinc-800">
      {/* <aside>
        <h2>Conversaciones</h2>
      </aside> */}
      <div className="h-full m-auto">
        <section className="bg-zinc-700 min-w-[45rem] max-w-[56rem] h-5/6 overflow-y-auto px-4">
          {
            messages.data.map((message, index) => (
              <Message
                key={index}
                image={message.image}
                username={message.username}
                message={message.message}
                date={new Date(message.date)}
                deleted={message.deleted}
                edited={message.edited}
                status={message.status}
              />
            ))
          }
        </section>
        <form className="flex justify-center items-center h-1/6 gap-5">
          <input type="text" className="w-full px-4 py-3 rounded-md" placeholder="Escriba un mensaje..." />
          <button className="bg-zinc-700 text-white px-4 py-3 rounded-md">Enviar</button>
        </form>
      </div>
    </main>
  );
}
