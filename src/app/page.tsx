import Message from "@/components/Message";

export default function Home() {
  return (
    <main>
      <h1>Mensajes</h1>
      <section>
        <Message message="HOLASDJOASJDSOAJ" date={new Date()} username="YOOO" deleted/>
      </section>
    </main>
  );
}
