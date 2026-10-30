"use client"
import Image from "next/image";
import SectionTag from "../SectionTag/sectionTag";
import { useEffect, useState } from "react";
import api from "@/app/api/api";
import Link from "next/link";

export default function Mensagens() {

    const [messages, setMessages] = useState([])
    const [errors, setErrors] = useState({ isError: false, textError: "" })

    const getMessages = async () => {
        try {
            const response = await api.get('/messages')
            setMessages(response.data)
        } catch (error) {
            setErrors({ isError: true, textError: error.toString() })
        }
    }

    useEffect(() => {
        getMessages()
    }, [])

    return (
        <section className="border-t border-gray-300 flex min-h-dvh w-full flex-col items-start gap-15 bg-brand-cream px-20 py-12.5 max-[1250px]:px-7.5 max-[850px]:px-7.5 max-[850px]:py-7.5 max-[500px]:px-5">
            <Link href={'/'}>
                <h1>Voltar</h1>
            </Link>
            {errors.isError ? 
            <h1>{errors.textError}</h1>    
            : null}
            <ul>
                {messages.map(message => (
                    <li key={message.id}>{message.mensagem}</li>
                ))}
            </ul>
        </section>
    );
}