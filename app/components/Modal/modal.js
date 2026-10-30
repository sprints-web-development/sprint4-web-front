"use client"
import { useEffect, useRef, useState } from "react";
import SectionTag from "../SectionTag/sectionTag";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function ModalAutenticacao({ isOpenModal, closeModal }) {

    const emailRef = useRef()
    const [hidden, setHidden] = useState(true)
    const [form, setForm] = useState({ email: "", password: "" })
    const [errors, setErrors] = useState({ isError: false, textError: "" })
    const router = useRouter()

    const handleChange = (e) => {
        console.log("Teste")
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const validate = (email, password) => {
        if (email !== "equipe@snapnote.com" || password !== "SnapNote3ºNext") {
            setErrors({ isError: true, textError: "Credenciais Inválidas!" })
        } else {
            router.push('/mensagens')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setForm({ email: "", password: "" })
        emailRef.current.focus()
        validate(form.email, form.password)
        console.log("O cara clicou em validar hein")
    }

    return (
        <>
            <div className={`relative min-h-dvh w-full ${isOpenModal ? 'flex flex-col' : 'hidden'} items-center justify-center z-10`}>
                <button className="absolute top-65 right-[10%] cursor-pointer" onClick={() => closeModal()}>
                    <Image alt="ícone de fechar seção" className="cursor-pointer" src={`/images/icons/close.png`} width={35} height={35} />
                </button>
                <div>
                    <div className="flex items-center justify-between">
                        <SectionTag name={"Insira suas credenciais para acessar as mensagens enviadas pelos visitantes do site"} />
                    </div>
                    {errors.isError ?
                        <p className="text-sm text-red-400">
                            {errors.textError}.
                        </p>
                        : null
                    }
                    <form id="formContact" onSubmit={handleSubmit} className="z-100">
                        <div className="grid grid-cols-2 gap-6.25 max-[650px]:grid-cols-1">
                            <div className="flex flex-col">
                                <label className="font-mansrope text-[10px] text-black-800" htmlFor="nome">SEU E-MAIL</label>
                                <input ref={emailRef} value={form.email} onChange={handleChange} className="font-mansrope w-full border-b border-[#555] bg-transparent py-3 text-black-800 outline-none focus:border-brand-lime" required type="email" id="nome" name="email" placeholder="voce@email.com" />
                            </div>
                            <div className="flex flex-col">
                                <label className="font-mansrope text-[10px] text-black-800" htmlFor="email">SUA SENHA</label>
                                <div className="flex items-center justify-between">
                                    <input onChange={handleChange} value={form.password} className="font-mansrope w-full border-b border-[#555] bg-transparent py-3 text-black-800 outline-none focus:border-brand-lime" required type={`${hidden ? 'password' : 'text'}`} id="nome" name="password" placeholder="123456" />
                                    <Image onClick={() => setHidden(prev => !prev)} alt="ícone de visibilidade de senha" className="cursor-pointer" src={`/images/icons/${hidden ? 'visible' : 'hidden'}.png`} width={30} height={15} />
                                </div>
                            </div>
                        </div>
                        <button className="mt-5 self-start cursor-pointer rounded-[30px] bg-brand-lime border-brand-lime px-5.5 py-3.5 transition-all duration-300 hover:translate-x-1.5 hover:bg-brand-snow hover:border hover:border-black" type="submit">Ver Mensagens <span>→</span></button>
                    </form>
                </div>

            </div>
        </>
    )
}