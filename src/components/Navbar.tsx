"use client"

import Image from "next/image";
import { useState } from "react";

export function Navbar() {
  const [logged, setLogged] = useState(false)

  return (
    <nav className="flex justify-between items-center py-3 px-5 bg-slate-700 h-[10%]">
      <a href="/" aria-label="home">
        <Image src="/img/logo.jpg" width={52} height={52} alt="Logo" />
      </a>
      <div className="flex justify-between gap-5">
        {
          logged ? (<>PERFIL</>) : (
            <>
              <a href="/login" className="text-white">
                Iniciar sesión
              </a>
              <a href="/signup" className="text-white">
                Registrarse
              </a>
            </>
          )
        }
      </div>
    </nav>
  )
}
