'use client'
import Image from "next/image";
import { useState } from "react";
import MobileMenu from "../UI-Components/MobileMenu/MobileMenu";
import MobileButton from "../UI-Components/MobileMenu/MobileButton";
import Link from "next/link";

export default function Header({ openModal }) {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-10 flex items-center justify-around border-b border-brand-grey bg-brand-cream px-5 py-3.75">
      <Link href="/#top">
        <div className="flex cursor-pointer items-center gap-1.25">
          <Image src="/images/logo-snap-note.png" alt="Logotipo do SnapNote" width={50} height={50} className="max-h-15" />
          <p className="text-xl font-extrabold text-brand-primary">Snap<span className="text-brand-blue">Note</span></p>
        </div>
      </Link>
      <nav>
        <ul className="max-[991px]:hidden flex list-none items-center gap-7.5">
          <li><Link href="/#top" className="cursor-pointer text-sm font-bold">A Solução</Link></li>
          <li><Link href="/#publico" className="cursor-pointer text-sm font-bold">Público-alvo</Link></li>
          <li><Link href="/#galeria" className="cursor-pointer text-sm font-bold">Galeria</Link></li>
          <li><Link href="/#equipe" className="cursor-pointer text-sm font-bold">Nossa Equipe</Link></li>
          <li><Link href="/experimente" className="cursor-pointer text-sm font-bold">Experimente</Link></li>
          <li>
            <button onClick={() => openModal()}><span className="cursor-pointer text-sm font-bold">Ver Mensagens (Equipe)</span></button>
          </li>
          <li><Link href="/#contact" className="cursor-pointer rounded-[30px] border-2 border-brand-yellow bg-brand-yellow px-3.75 py-3.75 text-sm font-bold text-brand-snow transition-[.3s] ease-in-out hover:bg-brand-cream hover:text-brand-yellow">Contato</Link></li>
        </ul>
      </nav>
      <MobileButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} openModal={openModal} />
    </header>

  );
}
