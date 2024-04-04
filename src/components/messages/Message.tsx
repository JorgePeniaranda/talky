'use client'

import { type IMessage, MessageStatus } from '@/types/index.d'
import classNames from 'classnames'
import Image from 'next/image'

export function Message ({
  id,
  message,
  deleted,
  updatedAt,
  createdAt,
  author
}: IMessage): React.ReactNode {
  const editedStatus = updatedAt !== createdAt // TO-DO: hacer un hook para manejar el estado de edición
  const messageStatus =
    id !== 'user' ? MessageStatus.RECEIVED : MessageStatus.SENT // TO-DO: hacer un hook para manejar el estado de edición

  const messageClassname = classNames(
    'flex flex-col max-w-72 h-auto  px-3 gap-y-3 py-2 rounded-lg',
    {
      'bg-red-500': messageStatus === MessageStatus.RECEIVED,
      'bg-green-500': messageStatus === MessageStatus.SENT
    }
  )
  const formatedCreatedDate = new Date(createdAt).toLocaleTimeString('es-AR', {
    hour12: false, // TO-DO: obtener configuración de usuario
    hour: 'numeric',
    minute: 'numeric'
  })

  return (
    <article
      className={`flex gap-3 px-2 my-3 ${messageStatus === MessageStatus.SENT && 'justify-end'}`}
    >
      {messageStatus === MessageStatus.RECEIVED && (
        <Image
          src={author.urlImage ?? '/img/nonprofile.webp'}
          height={40}
          width={40}
          alt="profile picture"
          className="rounded-full w-10 h-10"
        />
      )}
      <div className={messageClassname}>
        <sub>{author.name}</sub>
        {deleted
          ? (
          <i className="text-center">Mensaje eliminado</i>
            )
          : (
          <p className="text-center">{message}</p>
            )}
        <sup className="text-end self-end mt-1">
          {editedStatus && 'Editado'} {formatedCreatedDate}
        </sup>
      </div>
      {messageStatus === MessageStatus.SENT && (
        <Image
          src={author.urlImage ?? '/img/nonprofile.webp'}
          height={40}
          width={40}
          alt="profile picture"
          className="rounded-full w-10 h-10"
        />
      )}
    </article>
  )
}
