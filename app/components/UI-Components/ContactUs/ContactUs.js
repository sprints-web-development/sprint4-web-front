import { useEffect, useRef } from "react"
import Mensagem from "../../Mensagem/mensagem"
import SectionTag from "../../SectionTag/sectionTag"

export default function ContactUs({ handleChange, handleSubmit, lastMessage, status, form }) {

    const nameRef = useRef()

    useEffect(() => {
        nameRef.current.focus()
    }, [status])

    return (
        <div className="flex w-full flex-col gap-6.25 rounded-[15px] border border-[#444] bg-[#171b21] p-7.5">
            <div>
                <h2 className="text-[clamp(42px,5vw,65px)] font-medium leading-[1.05] text-brand-snow">Vamos transformar<br />registros em<br /><span className="font-playfair text-brand-lime">memórias?</span></h2>
                <p className="mt-7.5 mb-5 text-brand-light-grey">Quer conhecer melhor o projeto ou compartilhar uma ideia? Fale com a nossa
                    equipe.</p>
                <a className="text-brand-lime border-b border-brand-lime" href="mailto:equipe@snapnote.com">equipe@snapnote.com ↗</a>
            </div>

            <form id="formContact" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-6.25 max-[650px]:grid-cols-1">
                    <div className="flex flex-col">
                        <label className="font-mansrope text-[10px] text-brand-snow" htmlFor="nome">SEU NOME</label>
                        <input ref={nameRef} className="font-mansrope w-full border-b border-[#555] bg-transparent py-3 text-brand-snow outline-none focus:border-brand-lime" onChange={handleChange} value={form.nome} required type="text" id="nome" name="nome" placeholder="Como podemos chamar você?" />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-mansrope text-[10px] text-brand-snow" htmlFor="email">SEU E-MAIL</label>
                        <input className="font-mansrope w-full border-b border-[#555] bg-transparent py-3 text-brand-snow outline-none focus:border-brand-lime" onChange={handleChange} value={form.email} required type="email" id="email" name="email" placeholder="voce@email.com" />
                    </div>
                    <div className="col-span-full flex flex-col max-[650px]:col-auto">
                        <label className="font-mansrope text-[10px] text-brand-snow" htmlFor="mensagem">MENSAGEM</label>
                        <textarea className="font-mansrope w-full min-h-25 resize-y border-b border-[#555] bg-transparent py-3 text-brand-snow outline-none focus:border-brand-lime" onChange={handleChange} value={form.mensagem} required id="mensagem" name="mensagem" placeholder="Conte para a gente..."></textarea>
                    </div>
                </div>
                <button className="mt-5 self-start cursor-pointer rounded-[30px] bg-brand-lime px-5.5 py-3.5 transition-all duration-300 hover:translate-x-1.5 hover:bg-brand-snow" type="submit">Enviar mensagem <span>→</span></button>
                {status ?
                    <Mensagem nome={lastMessage.nome} protocolo={lastMessage.protocolo} />
                    : null}
            </form>
        </div>
    )
}
