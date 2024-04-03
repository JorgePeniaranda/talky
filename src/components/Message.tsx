"use client"

import Image from "next/image"

interface Props {
  username: string
  message: string
  date: Date
  deleted?: boolean
  edited?: boolean
}

export default function Message({
  username,
  message,
  date,
  deleted = false,
  edited = false
}: Props) {
  const formatedDate = date.toLocaleTimeString('es-AR', {
    hour12: false, // TO-DO: obtener configuración de usuario
    hour: 'numeric',
    minute: 'numeric'
  });

  return (
    <article className='flex gap-3 px-2'>
      <Image src="/img/nonprofile.webp" height={40} width={40} alt="profile picture" className="rounded-full w-10 h-10" />
      <div className='flex flex-col max-w-72 h-auto bg-red-500 px-3 gap-y-3 py-2 rounded-lg'>
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
    </article>
  )
}
