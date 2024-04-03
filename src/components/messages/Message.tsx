"use client"

import { IMessage, MessageStatus } from "@/types/index.d";
import classNames from "classnames";
import Image from "next/image";


interface Props extends IMessage {
  status: MessageStatus
}

export function Message({
  image,
  username,
  message,
  date,
  deleted,
  edited,
  status,
}: Props) {
  const messageClassname = classNames('flex flex-col max-w-72 h-auto  px-3 gap-y-3 py-2 rounded-lg', {
    'bg-red-500': status === MessageStatus.RECEIVED,
    'bg-green-500': status === MessageStatus.SENT
  })
  const formatedDate = date.toLocaleTimeString('es-AR', {
    hour12: false, // TO-DO: obtener configuración de usuario
    hour: 'numeric',
    minute: 'numeric'
  });

  return (
    <article className={`flex gap-3 px-2 my-3 ${status === MessageStatus.SENT && 'justify-end'}`}>
      {status === MessageStatus.RECEIVED && <Image src={image ?? '/img/nonprofile.webp'} height={40} width={40} alt="profile picture" className="rounded-full w-10 h-10" />}
      <div className={messageClassname}>
        <sub>{username}</sub>
        {
          deleted ? (
            <i className='text-center'>Mensaje eliminado</i>
          ) : (
            <p className='text-center'>{message}</p>
          )
        }
        <sup className='text-end self-end mt-1'>{edited && "Editado"} {formatedDate}</sup>
      </div>
      {status === MessageStatus.SENT && <Image src={image ?? '/img/nonprofile.webp'} height={40} width={40} alt="profile picture" className="rounded-full w-10 h-10" />}
    </article>
  )
}
