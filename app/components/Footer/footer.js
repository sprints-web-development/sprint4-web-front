import Image from "next/image";

export default function Footer() {
    return (
        <footer className="grid w-full items-center gap-7.5 border-t border-brand-primary bg-brand-cream px-7.5 py-10 grid-cols-[2fr_.7fr_.7fr_1.4fr] max-[850px]:grid-cols-[2fr_1fr_1fr] max-[550px]:grid-cols-1 max-[550px]:gap-5">
            <div className="flex flex-col items-start gap-2">
                <a href="/#top" className="flex items-center gap-2.5">
                    <Image src="/images/logo-snap-note.png" alt="Logotipo do SnapNote" width={50} height={50} className="h-7.5 w-7.5 object-contain" />
                    <span className="text-[18px] font-bold text-brand-primary">Snap<span className="text-brand-blue">Note</span></span>
                </a>
                <p className="text-[11px] text-brand-grey">Fotografe. Organize. Reencontre.</p>
            </div>

            <nav className="grid gap-2.5" aria-label="Navegação principal">
                <a href="/#top" className="font-mansrope text-[12px] text-brand-primary transition-colors duration-300 hover:text-brand-blue">A solução</a>
                <a href="/#galeria" className="font-mansrope text-[12px] text-brand-primary transition-colors duration-300 hover:text-brand-blue">Galeria</a>
            </nav>

            <nav className="grid gap-2.5" aria-label="Navegação complementar">
                <a href="/#publico" className="font-mansrope text-[12px] text-brand-primary transition-colors duration-300 hover:text-brand-blue">Público-alvo</a>
                <a href="/#equipe" className="font-mansrope text-[12px] text-brand-primary transition-colors duration-300 hover:text-brand-blue">Equipe</a>
            </nav>

            <div className="text-right max-[850px]:col-span-full max-[850px]:text-left max-[550px]:col-auto">
                <p className="text-[11px] text-brand-grey">Challenge Front-end Design</p>
                <p className="text-[11px] text-brand-grey">© 2026 SnapNote</p>
            </div>
        </footer>


    );
}
