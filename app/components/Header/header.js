'use client'
import Image from "next/image";
import { useState } from "react";
import MobileMenu from "../UI-Components/MobileMenu/MobileMenu";
import MobileButton from "../UI-Components/MobileMenu/MobileButton";

export default function Header() {

  const[menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-10 flex items-center justify-around border-b border-brand-grey bg-brand-cream px-5 py-3.75">
      <a href="#top">
        <div className="flex items-center gap-1.25">
          <Image src="/images/logo.png" alt="Logotipo do SnapNote" width={50} height={50} className="max-h-15" />
          <p className="text-xl font-extrabold text-brand-primary">Snap<span className="text-brand-yellow">Note</span></p>
        </div>
      </a>
      <nav>
        <ul className="max-[991px]:hidden flex list-none items-center gap-7.5">
          <li><a href="#top" className="cursor-pointer text-sm font-bold">A Solução</a></li>
          <li><a href="#publico" className="cursor-pointer text-sm font-bold">Público-alvo</a></li>
          <li><a href="#galeria" className="cursor-pointer text-sm font-bold">Galeria</a></li>
          <li><a href="#equipe" className="cursor-pointer text-sm font-bold">Nossa Equipe</a></li>
          <li><a href="#contact" className="cursor-pointer rounded-[30px] border-2 border-brand-yellow bg-brand-yellow px-3.75 py-3.75 text-sm font-bold text-brand-snow transition-[.3s] ease-in-out hover:bg-brand-cream hover:text-brand-yellow">Contato</a></li>
        </ul>
      </nav>
      <MobileButton menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <MobileMenu menuOpen={menuOpen}/>
    </header>

  );
}
