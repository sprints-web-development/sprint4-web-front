import Image from "next/image";
import SectionTag from "../SectionTag/sectionTag";
import ImageBorder from "../UI-Components/ImageBorder/ImageBorder";

export default function Galeria() {

    const cards = [
        {
            src: "/images/galery/desktop.png",
            title: "Biblioteca Visual",
            description: "Interface pensada para ser funcional, rápida e sem distrações."
        },
        {
            src: "/images/galery/cellPhone.png",
            title: "Lembretes Úteis",
            description: "O conteúdo certo, na hora certa."
        },
        {
            src: "/images/galery/half.png",
            title: "Captura Guiada",
            description: "Um bom registro desde o primeiro clique."
        }
    ]

    return (
        <section id="galeria" className="flex w-full flex-col items-center bg-brand-primary px-20 py-12.5 max-[1250px]:px-7.5 max-[850px]:px-7.5 max-[850px]:py-7.5 max-[500px]:px-5">
            <div className="flex w-full items-center justify-between">
                <div className="flex flex-col items-start">
                    <SectionTag name="Galeria" color="white" />
                    <h2 className="text-[60px] text-brand-cream">Uma memória visual<br /><span className="font-playfair text-brand-lime">Do seu jeito.</span></h2>
                </div>
                <p className="text-end text-brand-light-grey">Interface pensada para ser funcional, rápida e sem distrações.</p>
            </div>

            <div className="grid w-full grid-cols-2 grid-rows-2 gap-3.75 px-25 py-5 max-[1450px]:px-px max-[1199px]:grid-cols-1">
                {cards.map((card, index) => (
                    <ImageBorder key={index} card={card} index={index + 1}/>
                ))}
            </div>

        </section>
    );
}
