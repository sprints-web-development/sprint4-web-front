import SectionTag from "../SectionTag/sectionTag";
import Person from "../UI-Components/Person/Person";

export default function Publico() {

    const users = [
        {
            abbreviation: "JV",
            type: "Usuário Principal",
            group: "Jovens estudantes",
            note: "18-30 ANOS - ENSINO TÉCNICO E SUPERIOR",
            text: "Guardam lousas, exercícios e slides no celular, estudam entre aulas e precisam revisar conteúdos com agilidade.",
            style: 1,
            list: [
                { text: "Rotina Acadêmica Intensa" },
                { text: "Grande Volume de Registros" },
                { text: "Busca Rápida antes de Provas" }
            ]
        },
        {
            abbreviation: "LP",
            type: "Usuário Secundário",
            group: "Profissionais Curiosos",
            note: "CURSOS - PALESTRAS - REUNIÕES",
            text: "Registram quadros, apresentações e referências visuais para consultar em projetos e compartilhar aprendizados.",
            style: 2,
            list: [
                { text: "Aprendizado Contínuo" },
                { text: "Referências Espalhadas" },
                { text: "Conhecimento Compartilhável" }
            ]
        },
    ]

    return (
        <section id="publico" className="grid w-full items-center gap-12.5 bg-brand-cream px-20 py-12.5 grid-cols-[.8fr_1.2fr] max-[1250px]:px-7.5 max-[850px]:grid-cols-1 max-[850px]:gap-px max-[850px]:px-7.5 max-[850px]:py-7.5 max-[500px]:px-5">
            <div className="flex h-full w-full flex-col items-start justify-center">
                <SectionTag name="Público-Alvo" />
                <h2 className="text-[70px]">Feito para quem aprende<br /><span className="font-playfair text-brand-blue">em Movimento.</span></h2>
                <p className="mt-7.5 text-xl text-brand-grey">O SnapNote apoia pessoas que usam o celular para registrar informações importantes e precisam
                    recuperar o significado delas depois.</p>
                <div className="my-2.5 h-px w-[90%] rounded-[5px] bg-brand-light-grey"></div>
                <p className="font-playfair text-3xl font-bold text-brand-primary"><span className="font-playfair text-brand-blue text-[50px] font-semibold">"</span>Eu sei que fotografei. Só não lembro onde — nem
                    por quê.</p>
            </div>
            <div className="grid h-[90%] grid-cols-2 gap-7.5 max-[991px]:grid-cols-1 max-[850px]:h-full max-[850px]:gap-2.5">
                {
                    users && users.length > 0 ?
                        users.map((user, index) => (
                            <Person key={index} user={user} />
                        ))
                        : null
                }
            </div>
        </section>

    );
}
