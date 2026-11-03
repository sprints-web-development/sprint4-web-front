import Image from "next/image";
import SectionTag from "../SectionTag/sectionTag";

export default function Experimente() {
    return (
        <section className="border-t border-gray-300 flex min-h-dvh w-full flex-col items-start gap-15 bg-brand-cream px-20 py-12.5 max-[1250px]:px-7.5 max-[850px]:px-7.5 max-[850px]:py-7.5 max-[500px]:px-5">
            <div className="max-w-180">
                <SectionTag name="Protótipo e código-fonte" />
                <h1 className="text-start text-[clamp(42px,4vw+20px,80px)] font-medium leading-[1.2] max-[650px]:leading-[1.1]">Do conceito<br /><span className="font-playfair text-brand-blue">ao seu celular.</span></h1>
                <p className="mt-5 text-xl text-brand-grey max-[650px]:text-[15px]">Instale o protótipo para navegar pelo SnapNote como se ele já estivesse no seu
                    bolso, ou explore o código que dá vida ao projeto.</p>
            </div>

            <div className="grid w-full grid-cols-[1.3fr_1fr] gap-5 max-[991px]:grid-cols-1">
                <article className="relative flex min-h-95 flex-col items-start gap-5 overflow-hidden rounded-[15px] bg-brand-blue p-12.5 pr-75 max-[650px]:p-7.5 max-[650px]:pb-75">
                    <h2 className="text-[clamp(28px,2vw+15px,40px)] font-medium text-white">Protótipo</h2>
                    <p className="max-w-105 text-white">Navegue pelas telas de captura, biblioteca e lembretes e sinta como o SnapNote organiza suas
                        anotações.</p>
                    <a className="mt-auto rounded-[50px] bg-brand-lime px-7.5 py-3.75 font-mansrope text-[15px] font-bold text-brand-primary transition-colors duration-300 hover:bg-brand-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-lime"
                        href="/downloads/snapnote-0.1.apk" download type="application/vnd.android.package-archive">Baixar APK para Android</a>
                    <p className="mt-2.5 max-w-105 text-[12px] leading-normal text-brand-ciano">Versão de teste 0.1 apresentada no NEXT, com 46 MB. Ao abrir o arquivo no celular, permita a
                        instalação de apps de fontes desconhecidas.</p>
                    <Image
                        src="/images/prot.png"
                        alt="Tela inicial do protótipo do SnapNote"
                        width={311}
                        height={595}
                        className="absolute top-12.5 right-12.5 h-auto w-55 rotate-6 max-[650px]:top-auto max-[650px]:right-1/2 max-[650px]:-bottom-22.5 max-[650px]:w-45 max-[650px]:translate-x-1/2"
                    />
                </article>

                <article className="flex flex-col items-start gap-5 rounded-[15px] bg-brand-primary p-12.5 max-[650px]:p-7.5">
                    <svg width="40" height="40" viewBox="0 0 16 16" fill="currentColor" className="text-white">
                        <path
                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    <h2 className="text-[clamp(28px,2vw+15px,40px)] font-medium text-white">Código-fonte</h2>
                    <p className="max-w-105 text-brand-light-grey">Veja como o SnapNote foi construído e acompanhe a evolução do projeto no GitHub.</p>
                    <a className="mt-auto rounded-[50px] bg-brand-cream px-7.5 py-3.75 font-mansrope text-[15px] font-bold text-brand-primary transition-colors duration-300 hover:bg-brand-lime focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-lime"
                        href="https://github.com/Fiap-ES/SnapNote" target="_blank">Abrir no GitHub</a>
                </article>
            </div>
        </section>
    );
}