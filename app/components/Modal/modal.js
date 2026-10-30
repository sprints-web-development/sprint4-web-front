"use client"
import { useRef } from "react";
import SectionTag from "../SectionTag/sectionTag";

export default function ModalAutenticacao({ isOpenModal }) {

    const nameRef = useRef()

    const handleSubmit = () => {
        nameRef.current.focus()
        console.log("O cara clicou em validar hein")
    }

    return (
        <>
            <div className={`min-h-dvh w-full bg-black/40 backdrop-blur-sm ${isOpenModal ? 'flex' : 'hidden'} items-center justify-center z-10`}>
                <div>
                    <div className="flex items-center justify-between">
                        <SectionTag name={"Insira suas credenciais para acessar as mensagens enviadas pelos visitantes do site"} />
                        <button onClick={() => { }}>X</button>
                    </div>
                    <form id="formContact" onSubmit={handleSubmit} className="z-100">
                        <div className="grid grid-cols-2 gap-6.25 max-[650px]:grid-cols-1">
                            <div className="flex flex-col">
                                <label className="font-mansrope text-[10px] text-brand-snow" htmlFor="nome">SEU NOME</label>
                                <input ref={nameRef} className="font-mansrope w-full border-b border-[#555] bg-transparent py-3 text-brand-snow outline-none focus:border-brand-lime" required type="text" id="nome" name="nome" placeholder="Como podemos chamar você?" />
                            </div>
                            <div className="flex flex-col">
                                <label className="font-mansrope text-[10px] text-brand-snow" htmlFor="email">SEU E-MAIL</label>
                                <input className="font-mansrope w-full border-b border-[#555] bg-transparent py-3 text-brand-snow outline-none focus:border-brand-lime" required type="email" id="email" name="email" placeholder="voce@email.com" />
                            </div>
                        </div>
                        <button className="mt-5 self-start cursor-pointer rounded-[30px] bg-brand-lime px-5.5 py-3.5 transition-all duration-300 hover:translate-x-1.5 hover:bg-brand-snow" type="submit">Ver Mensagens <span>→</span></button>
                    </form>
                </div>

            </div>
        </>
    )
}