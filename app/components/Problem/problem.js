export default function Problem() {
    return (
        <section className="flex w-full items-center bg-brand-primary px-20 py-25 text-brand-cream max-[1250px]:px-7.5 max-[850px]:px-7.5 max-[500px]:px-5">
            <div className="grid w-full grid-cols-2 gap-20 max-[1199px]:grid-cols-1">
                <div className="text-[50px]">
                    <h2 className="text-brand-cream">
                        A galeria registra.
                        <br />
                        <span className="font-playfair text-brand-lime">Mas não ajuda a lembrar.</span>
                    </h2>
                </div>
                <div className="flex flex-col items-center justify-center gap-5">
                    <p className="text-brand-cream">Fotografamos conteúdos importantes todos os dias. Depois, eles desaparecem entre prints, memes e
                        milhares de imagens sem nome.
                    </p>
                    <div className="grid grid-cols-3">
                        <div className="flex flex-col items-start justify-start">
                            <div className="my-2.5 h-px w-[90%] rounded-[5px] bg-brand-light-grey"></div>
                            <strong className="mb-5 text-brand-lime">01</strong>
                            <h3 className="text-[15px] font-bold text-brand-cream">Contexto Perdido</h3>
                            <p className="text-[14px] text-brand-light-grey">Uma foto sem matéria, data ou explicação vira apenas mais um arquivo.</p>
                        </div>
                        <div className="flex flex-col items-start justify-start">
                            <div className="my-2.5 h-px w-[90%] rounded-[5px] bg-brand-light-grey"></div>
                            <strong className="mb-5 text-brand-lime">02</strong>
                            <h3 className="text-[15px] font-bold text-brand-cream">Busca Cansativa</h3>
                            <p className="text-[14px] text-brand-light-grey">Encontrar aquela lousa antes da prova custa tempo e concentração.</p>
                        </div>
                        <div className="flex flex-col items-start justify-start">
                            <div className="my-2.5 h-px w-[90%] rounded-[5px] bg-brand-light-grey"></div>
                            <strong className="mb-5 text-brand-lime">03</strong>
                            <h3 className="text-[15px] font-bold text-brand-cream">Revisão esquecida</h3>
                            <p className="text-[14px] text-brand-light-grey">Sem lembretes e organização, conteúdos valiosos nunca são revisitados.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
