import Image from "next/image"
import Link from "next/link"

export default function MobileMenu({ menuOpen, openModal }) {
    return (
        <div className={`absolute top-0 h-[110dvh] w-1/2 bg-brand-primary px-1.25 py-5 transition-[.5s] ease-in ${menuOpen ? 'left-0' : '-left-1/2'}`}>
            <div className="mb-5 flex items-center justify-center">
                <Link href="/#top">
                    <Image src="/images/logo-snap-white.png" alt="Logotipo do SnapNote" width={50} height={50} className="max-h-20" />
                </Link>
            </div>
            <ul className="flex list-none flex-col items-center gap-7.5">
                <li><Link href="/#top" className="cursor-pointer text-sm text-brand-cream">A Solução</Link></li>
                <li><Link href="/#publico" className="cursor-pointer text-sm text-brand-cream">Público-alvo</Link></li>
                <li><Link href="/#galeria" className="cursor-pointer text-sm text-brand-cream">Galeria</Link></li>
                <li><Link href="/#equipe" className="cursor-pointer text-sm text-brand-cream">Nossa Equipe</Link></li>
                <li><Link href="/experimente" className="cursor-pointer text-sm text-brand-cream">Experimente</Link></li>
                <button onClick={() => openModal()}><span className="cursor-pointer text-sm text-brand-cream">Ver Mensagens (Equipe)</span></button>
                <li><Link href="/#contact" className="cursor-pointer rounded-[30px] border-2 border-brand-yellow bg-brand-yellow px-3.75 py-3.75 text-sm font-bold text-brand-snow transition-[.3s] ease-in-out hover:bg-brand-cream hover:text-brand-yellow">Contato</Link></li>
            </ul>
        </div>
    )
}
