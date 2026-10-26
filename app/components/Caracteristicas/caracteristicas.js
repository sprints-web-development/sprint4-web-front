export default function Caracteristicas() {
    return (

        <section id="galeria2" className="grid w-full grid-cols-2 gap-5 bg-brand-blue px-20 py-12.5 max-[1250px]:px-7.5 max-[850px]:grid-cols-1 max-[850px]:px-7.5 max-[850px]:py-7.5 max-[500px]:px-5">
            <div className="flex w-full items-center justify-between">
                <h2 className="text-start text-[clamp(50px,5vw+15px,70px)] text-brand-cream">Menos tempo procurando.<br /><span className="font-playfair text-brand-lime">Mais tempo aprendendo.</span></h2>
            </div>
            <div className="flex flex-col gap-3.75">
                <div className="flex items-center justify-between py-3.75 max-[850px]:flex-col">
                    <p className="text-brand-lime">Organização</p>
                    <p className="text-brand-cream">Registros agrupados e renomeados com certeza.</p>
                </div>
                <div className="flex items-center justify-between border-t border-b border-brand-cream py-3.75 max-[850px]:flex-col">
                    <p className="text-brand-lime">Retenção</p>
                    <p className="text-brand-cream">Revisões frequentes ajudam o conteúdo a permanecer.</p>
                </div>
                <div className="flex items-center justify-between py-3.75 max-[850px]:flex-col">
                    <p className="text-brand-lime">Produtividade</p>
                    <p className="text-brand-cream">Informação reencontrada em segundos, não em horas.</p>
                </div>
            </div>
        </section>
    );
}
