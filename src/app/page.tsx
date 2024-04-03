import { Message } from "@/components/messages/Message";
import { MessageStatus } from "@/types/index.d";

export default function Home() {
  return (
    <main className="flex h-[90%] bg-zinc-800">
      {/* <aside>
        <h2>Conversaciones</h2>
      </aside> */}
      <div className="h-full m-auto">
        <section className="bg-zinc-700 min-w-[45rem] max-w-[56rem] h-5/6 overflow-y-auto px-4">
          <Message message="HOLASDJOASJDSOAJ" date={new Date()} username="YOOO" status={MessageStatus.RECEIVED}/>
          <Message message="HOLASDJOASJDSOAJ" date={new Date()} username="YOOO" status={MessageStatus.SENT}/>
          <Message message="HOLASDJOASJDSOAJ" date={new Date()} username="YOOO" status={MessageStatus.RECEIVED}/>
          <Message message="HOLASDJOASJDSOAJ" date={new Date()} username="YOOO" status={MessageStatus.RECEIVED}/>
          <Message message="HOLASDJOASJDSOAJ" date={new Date()} username="YOOO" status={MessageStatus.RECEIVED}/>
          <Message message="HOLASDJOASJDSOAJ" date={new Date()} username="YOOO" status={MessageStatus.SENT}/>
          <Message message="HOLASDJOASJDSOAJ" date={new Date()} username="YOOO" status={MessageStatus.RECEIVED}/>
          <Message message="HOLASDJOASJDSOAJ" date={new Date()} username="YOOO" status={MessageStatus.SENT}/>
          <Message message="HOLASDJOASJDSOAJ" date={new Date()} username="YOOO" status={MessageStatus.RECEIVED}/>
          <Message message="HOLASDJOASJDSOAJ" date={new Date()} username="YOOO" status={MessageStatus.SENT}/>
          <Message message="HOLASDJOASJDSOAJ" date={new Date()} username="YOOO" status={MessageStatus.RECEIVED}/>
        </section>
        <form className="flex justify-center items-center h-1/6 gap-5">
          <input type="text" className="w-full px-4 py-3 rounded-md" placeholder="Escriba un mensaje..." />
          <button className="bg-zinc-700 text-white px-4 py-3 rounded-md">Enviar</button>
        </form>
      </div>
    </main>
  );
}
