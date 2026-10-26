import Image from "next/image";

export default function Solution() {
    return (
        <section className="flex w-full items-center bg-brand-blue px-20 py-12.5 max-[1250px]:px-7.5 max-[850px]:px-7.5 max-[850px]:py-7.5 max-[500px]:px-5">
            <div className="flex flex-col">
                <div className="flex items-center justify-between">
                    <h2 className="text-[50px] text-brand-cream">Capture Agora.
                        <br />
                        <span className="font-playfair text-brand-lime">Entenda Depois.</span>
                    </h2>
                    <p className="w-1/2 text-end text-brand-cream">Uma jornada simples que transforma registros soltos em uma memória visual organizada — sem mudar o
                        jeito
                        natural de estudar.</p>
                </div>
                <div className="my-7.5 grid w-full grid-cols-4 max-[1199px]:grid-cols-2 max-[550px]:grid-cols-1">
                    <div className="relative border border-brand-light-grey pt-6.25 px-6.75 pb-7.5">
                        <span className="text-brand-cream">01</span>
                        <div className="my-7.5 flex items-center justify-around">
                            <div className="flex h-12.5 w-12.5 items-center justify-center rounded-full bg-brand-lime">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 7V25" stroke="#1657B8" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M21 7V25" stroke="#1657B8" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M7 12H25" stroke="#1657B8" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M7 20H25" stroke="#1657B8" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>
                            <svg width="140" height="12" viewBox="0 0 140 12" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 6H138" stroke="#C9F24B" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M134 2L138 6L134 10" stroke="#C9F24B" strokeWidth="1.5" strokeLinecap="round"
                                    strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="flex flex-col items-start justify-center **:text-brand-cream">
                            <h2 className="mb-2.5 text-xl">Capture</h2>
                            <p className="text-sm leading-[1.2]">Fotografe a lousa, um slide ou sua anotação diretamente pelo aplicativo.</p>
                        </div>
                    </div>
                    <div className="relative border border-brand-light-grey pt-6.25 px-6.75 pb-7.5">
                        <span className="text-brand-cream">02</span>
                        <div className="my-7.5 flex items-center justify-around">
                            <div className="flex h-12.5 w-12.5 items-center justify-center rounded-full bg-brand-lime">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 2C12 7.5 16.5 12 22 12C16.5 12 12 16.5 12 22C12 16.5 7.5 12 2 12C7.5 12 12 7.5 12 2Z"
                                        fill="#0033CC" />
                                </svg>
                            </div>
                            <svg width="140" height="12" viewBox="0 0 140 12" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 6H138" stroke="#C9F24B" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M134 2L138 6L134 10" stroke="#C9F24B" strokeWidth="1.5" strokeLinecap="round"
                                    strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="flex flex-col items-start justify-center **:text-brand-cream">
                            <h2 className="mb-2.5 text-xl">Contextualize</h2>
                            <p className="text-sm leading-[1.2]">Adicione uma frase ou grave um áudio para preservar o que aquela imagem significa.</p>
                        </div>
                    </div>
                    <div className="relative border border-brand-light-grey pt-6.25 px-6.75 pb-7.5">
                        <span className="text-brand-cream">03</span>
                        <div className="my-7.5 flex items-center justify-around">
                            <div className="flex h-12.5 w-12.5 items-center justify-center rounded-full bg-brand-lime">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 4H20V20H4V4Z" stroke="#1657B8" strokeWidth="2" />

                                    <path d="M4 9.33H20M4 14.66H20" stroke="#1657B8" strokeWidth="2" />

                                    <path d="M9.33 4V20M14.66 4V20" stroke="#1657B8" strokeWidth="2" />
                                </svg>
                            </div>
                            <svg width="140" height="12" viewBox="0 0 140 12" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 6H138" stroke="#C9F24B" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M134 2L138 6L134 10" stroke="#C9F24B" strokeWidth="1.5" strokeLinecap="round"
                                    strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="flex flex-col items-start justify-center **:text-brand-cream">
                            <h2 className="mb-2.5 text-xl">Organize</h2>
                            <p className="text-sm leading-[1.2]">O SnapNote identifica o tema e agrupa tudo automaticamente por matéria.</p>
                        </div>
                    </div>
                    <div className="relative border border-brand-light-grey pt-6.25 px-6.75 pb-7.5">
                        <span className="text-brand-cream">04</span>
                        <div className="my-7.5 flex items-center justify-around">
                            <div className="flex h-12.5 w-12.5 items-center justify-center rounded-full bg-brand-lime">
                                <div>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M20 11C19.5 7.6 16.6 5 13 5C9.1 5 6 8.1 6 12C6 15.9 9.1 19 13 19C16 19 18.6 17.1 19.6 14.4"
                                            stroke="#1657B8" strokeWidth="2" strokeLinecap="round" />

                                        <path d="M20 5V11H14" stroke="#1657B8" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                            <svg width="140" height="12" viewBox="0 0 140 12" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 6H138" stroke="#C9F24B" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M134 2L138 6L134 10" stroke="#C9F24B" strokeWidth="1.5" strokeLinecap="round"
                                    strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="flex flex-col items-start justify-center **:text-brand-cream">
                            <h2 className="mb-2.5 text-xl">Reencontre</h2>
                            <p className="text-sm leading-[1.2]">Busque em segundos e receba lembretes inteligentes antes da prova.</p>
                        </div>
                    </div>
                </div>
                <div className="grid w-full grid-cols-2 rounded-[20px] max-[1199px]:grid-cols-1">
                    <div className="relative flex items-center justify-center bg-brand-ciano p-7.5">
                        <div className="absolute bottom-5 right-5 z-9 flex items-center justify-around gap-2.5 rounded-[15px] bg-[rgba(255,255,255,0.918)] p-3.75 shadow-[2px_2px_2px_rgba(0,0,0,.35)] max-[650px]:origin-right max-[650px]:scale-[.85] max-[650px]:p-2.5 max-[500px]:scale-[.7]">
                            <div className="flex h-7.5 w-7.5 items-center justify-center rounded-full bg-brand-lime">
                                <svg xmlns="http://w3.org" viewBox="0 0 24 24" width="24" height="24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-[10px]">Biologia Detectada</h3>
                                <p className="text-[10px]">Reprodução Celular</p>
                            </div>
                        </div>
                        <div className="relative grid h-full w-3/4 -rotate-4 grid-rows-2 bg-brand-cream p-2.5">
                            <span className="absolute top-1.25 left-1.25 z-2 h-6.25 w-6.25 border-t-[5px] border-l-[5px] border-brand-blue"></span>
                            <span className="absolute top-1.25 right-1.25 z-2 h-6.25 w-6.25 border-t-[5px] border-r-[5px] border-brand-blue"></span>
                            <span className="absolute bottom-1.25 right-1.25 z-2 h-6.25 w-6.25 border-r-[5px] border-b-[5px] border-brand-blue"></span>
                            <span className="absolute bottom-1.25 left-1.25 z-2 h-6.25 w-6.25 border-b-[5px] border-l-[5px] border-brand-blue"></span>
                            <div className="flex h-full w-full items-end justify-center text-3xl">
                                <p className="font-playfair text-brand-blue">Mitose</p>
                            </div>
                            <div className="flex h-full w-full items-start justify-center border-t-2 border-brand-lime text-3xl">
                                <p className="font-playfair text-brand-blue">2 células</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-center bg-brand-cream p-7.5">
                        <p className="font-sans my-3.75 flex uppercase tracking-[2px] text-sm font-bold text-brand-blue"><span className="mr-2.25 mb-0.75 inline-block h-0.5 w-6.5 bg-brand-blue"></span>Organização Inteligente</p>
                        <h3 className="text-3xl font-semibold">Do rolo da câmera para uma biblioteca que faz sentido.</h3>
                        <p className="mt-5 text-brand-grey">Títulos, categorias e palavras-chave são sugeridos a partir do conteúdo da imagem e
                            do contexto contado por você.</p>
                        <ul>
                            <li className="flex items-center gap-2.5">
                                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-lime text-brand-blue text-[15px]">
                                    <svg xmlns="http://w3.org" viewBox="0 0 20 20" width="20" height="20" fill="none"
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <polyline points="15 5 9 17 4 10"></polyline>
                                    </svg>
                                </div>
                                <p className="font-bold">Organização automática por matéria</p>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-lime text-brand-blue text-[15px]">
                                    <svg xmlns="http://w3.org" viewBox="0 0 20 20" width="20" height="20" fill="none"
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <polyline points="15 5 9 17 4 10"></polyline>
                                    </svg>
                                </div>
                                <p className="font-bold">Busca por palavras e contexto</p>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-lime text-brand-blue text-[15px]">
                                    <svg xmlns="http://w3.org" viewBox="0 0 20 20" width="20" height="20" fill="none"
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <polyline points="15 5 9 17 4 10"></polyline>
                                    </svg>
                                </div>
                                <p className="font-bold">Revisões no momento certo</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </section>

    );
}
