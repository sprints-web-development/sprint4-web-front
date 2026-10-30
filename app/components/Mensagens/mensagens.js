
"use client"

import { useEffect, useState } from "react";
import api from "@/app/api/api";
import Link from "next/link";
import Error from "../Erro/erro";
import { useRouter } from "next/navigation";
import SectionTag from "../SectionTag/sectionTag";

export default function Mensagens() {

    const [messages, setMessages] = useState([])
    const [errors, setErrors] = useState({ isError: false, textError: "" })
    const [authorized, setAuthorized] = useState(false)
    const [checking, setChecking] = useState(true)
    const [loading, setLoading] = useState(false)
    const getMessages = async () => {
        try {
            const response = await api.get('/messages')
            setMessages(response.data)
        } catch (error) {
            setErrors({ isError: true, textError: error.toString() })
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('autenticado')

        if (isAuthenticated !== "true") {
            setChecking(false)
            return
        }

        setAuthorized(true)
        setChecking(false)
        setLoading(true)

        getMessages()
    }, [])

    if (checking) {
        return (
            <div className="flex min-h-dvh w-full items-center justify-center bg-brand-cream">
                <p className="text-sm font-semibold text-brand-grey">
                    Verificando autenticação...
                </p>
            </div>
        )
    }

    if (!authorized) {
        return (
            <div className="flex min-h-dvh w-full items-center justify-center bg-brand-cream">
                <p className="text-sm font-semibold text-brand-grey">
                    Você não está autenticado e não tem acesso a essa rota.
                </p>
            </div>
        )
    }

    if (loading) {
        return (
            <div className="flex min-h-dvh w-full items-center justify-center bg-brand-cream">
                <p className="text-sm font-semibold text-brand-grey">
                    Carregando mensagens...
                </p>
            </div>
        )
    }

    if (errors.isError) {
        return <Error textError={errors.textError} />
    }

    return (
        <main className="min-h-dvh w-full bg-brand-cream px-20 py-12.5 max-[850px]:px-7.5 max-[850px]:py-8 max-[500px]:px-5">

            <div className="mx-auto flex w-full max-w-7xl flex-col gap-12">
                <header className="flex flex-wrap items-center justify-between gap-5 border-b border-brand-grey/30 pb-7.5">
                    <div>
                        <SectionTag name="ÁREA ADMINISTRATIVA" />
                        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-brand-primary max-[500px]:text-3xl">
                            Caixa de <span className="text-brand-blue">mensagens.</span>
                        </h1>
                        <p className="mt-2 text-sm text-brand-grey">
                            Acompanhe as mensagens enviadas pelos visitantes do SnapNote.
                        </p>
                    </div>

                    <Link href="/" className="group flex items-center gap-2 rounded-full border-2 border-brand-primary px-5 py-3 text-sm font-bold transition-all duration-300 hover:border-brand-yellow hover:bg-brand-yellow">
                        <span className="transition-transform duration-300 group-hover:-translate-x-1">
                            {'<'}
                        </span>
                        Voltar ao site
                    </Link>

                </header>

                <section className="grid grid-cols-[1fr_2fr] gap-5 max-[650px]:grid-cols-1">
                    <div className="flex flex-col justify-between gap-5 rounded-2xl bg-brand-primary p-7.5">
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-semibold text-brand-snow">Total de mensagens</p>
                            <span className="rounded-full bg-brand-yellow/15 px-3 py-1 text-xs font-bold text-brand-yellow">SNAPNOTE</span>
                        </div>

                        <div>
                            <h2 className="text-6xl font-extrabold text-brand-yellow">
                                {messages.length.toString().padStart(2, "0")}
                            </h2>
                            <p className="mt-2 text-xs text-brand-light-grey">
                                Mensagens registradas na plataforma
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center gap-3 rounded-2xl border border-brand-primary/10 bg-brand-pure p-7.5">
                        <span className="text-2xl">✉</span>

                        <h2 className="text-xl font-extrabold text-brand-primary">
                            Comunicação com a equipe
                        </h2>

                        <p className="max-w-lg text-sm leading-relaxed text-brand-grey">
                            Aqui ficam centralizadas as mensagens recebidas pelo formulário
                            de contato. Consulte os dados do remetente e o protocolo para
                            acompanhar cada solicitação.
                        </p>
                    </div>
                </section>
                <section className="flex flex-col gap-6">
                    <div className="flex flex-wrap items-end justify-between gap-3">
                        <div>
                            <SectionTag name="CENTRAL DE CONTATO" color="blue" />
                            <h2 className="text-2xl font-extrabold text-brand-primary">
                                Mensagens recebidas
                            </h2>
                        </div>

                        <span className="rounded-full border border-brand-primary/15 px-4 py-2 text-xs font-bold text-brand-grey">
                            {messages.length} {messages.length === 1 ? "mensagem" : "mensagens"}
                        </span>
                    </div>

                    {messages.length === 0 ? (

                        <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-brand-grey/30 bg-brand-pure px-5 py-16 text-center">
                            <h3 className="text-xl font-extrabold text-brand-primary">Nenhuma mensagem por aqui!</h3>
                            <p className="max-w-md text-sm leading-relaxed text-brand-grey">
                                Quando alguém entrar em contato pelo formulário do SnapNote,
                                a mensagem aparecerá nesta área.
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 gap-5 max-[850px]:grid-cols-1">
                            {messages.map((message, index) => (
                                <div
                                    key={message.id}
                                    className="group flex flex-col gap-5 rounded-2xl border border-brand-primary/10 bg-brand-pure p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-yellow hover:shadow-xl hover:shadow-brand-primary/5 max-[500px]:p-5"
                                >
                                    <div className="flex items-center justify-between gap-3">
                                        <div className="flex min-w-0 items-center gap-3">
                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-lg font-extrabold text-brand-primary">
                                                {message.nome?.charAt(0).toUpperCase() || "?"}
                                            </div>
                                            <div className="min-w-0">
                                                <h3 className="truncate font-extrabold text-brand-primary">{message.nome}</h3>
                                                <p className="truncate text-xs text-brand-grey">{message.email}</p>
                                            </div>
                                        </div>
                                        <span className="shrink-0 rounded-full bg-brand-lime/30 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-brand-primary">#{index + 1}</span>
                                    </div>
                                    <div className="flex flex-1 flex-col gap-2 border-l-4 border-brand-yellow pl-4">
                                        <p className="text-xs font-extrabold uppercase tracking-wider text-brand-grey">Mensagem</p>
                                        <p className="break-words text-sm leading-7 text-brand-primary">{message.mensagem}</p>
                                    </div>

                                    <div className="flex flex-wrap items-center justify-between gap-3 border-t border-brand-primary/10 pt-4">
                                        <span className="text-xs font-semibold text-brand-grey">Protocolo de atendimento</span>
                                        <span className="rounded-lg bg-brand-primary px-3 py-2 font-mono text-xs font-bold tracking-wider text-brand-yellow">#{message.protocolo}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
                <footer className="border-t border-brand-grey/30 pt-5 text-center">
                    <p className="text-xs text-brand-grey">SnapNote © {new Date().getFullYear()} · Área exclusiva da equipe</p>
                </footer>
            </div>
        </main>
    );
}
