import Image from "next/image";
import Link from "next/link";

export default function Footer({openModal}) {
    return (
        <footer className="grid w-full items-center gap-7.5 border-t border-brand-primary bg-brand-cream px-7.5 py-10 grid-cols-[2fr_.7fr_.7fr_.7fr_.7fr] max-[850px]:grid-cols-[1fr_1fr] max-[550px]:grid-cols-1 max-[550px]:gap-5">
            <div className="flex flex-col items-start gap-2">
                <Link href="/#top" className="flex items-center gap-2.5">
                    <Image src="/images/logo-snap-note.png" alt="Logotipo do SnapNote" width={50} height={50} className="h-7.5 w-7.5 object-contain" />
                    <span className="text-[18px] font-bold text-brand-primary">Snap<span className="text-brand-blue">Note</span></span>
                </Link>
                <p className="text-[11px] text-brand-grey">Fotografe. Organize. Reencontre.</p>
            </div>

            <nav className="grid gap-2.5">
                <Link href="/#top" className="font-mansrope text-[12px] text-brand-primary transition-colors duration-300 hover:text-brand-blue">A solução</Link>
                <Link href="/#galeria" className="font-mansrope text-[12px] text-brand-primary transition-colors duration-300 hover:text-brand-blue">Galeria</Link>
            </nav>

            <nav className="grid gap-2.5">
                <Link href="/#publico" className="font-mansrope text-[12px] text-brand-primary transition-colors duration-300 hover:text-brand-blue">Público-alvo</Link>
                <Link href="/#equipe" className="font-mansrope text-[12px] text-brand-primary transition-colors duration-300 hover:text-brand-blue">Equipe</Link>
            </nav>

            <nav className="grid gap-2.5">
                <Link href="/experimente" className="font-mansrope text-[12px] text-brand-primary transition-colors duration-300 hover:text-brand-blue">Experimente</Link>
                <p onClick={() => openModal()} className="cursor-pointer font-mansrope text-[12px] text-brand-primary transition-colors duration-300 hover:text-brand-blue">Ver Mensagens (Equipe)</p>
            </nav>

            <div className="text-right max-[850px]:col-span-full max-[850px]:text-left max-[550px]:col-auto">
                <p className="text-[11px] text-brand-grey">Challenge Front-end Design</p>
                <p className="text-[11px] text-brand-grey">© 2026 SnapNote</p>
            </div>
        </footer>


    );
}
