'use client'
import { useState } from "react";
import ContactUs from "../UI-Components/ContactUs/ContactUs";
import Testimonial from "../Testimonials/testimonials";
import useUsers from "@/app/hooks/useUser";
import useMessages from "@/app/hooks/useMessages";

export default function Contato() {

    const [form, setForm] = useState({ nome: "", email: "", mensagem: "" })
    const [status, setStatus] = useState(false)
    const [lastMessage, setLastMessage] = useState({ nome: "", protocolo: 0 })
    const { users, userErrors } = useUsers()
    const { messages, messageErrors, createMessage, sending, sendError } = useMessages(true)

    const errors = [{ ...userErrors, origin: 1 }, { ...messageErrors, origin: 2 }]

    const handleChange = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value })
    }

    const generateProtocol = () => {
        const protocol = Math.floor(Math.random() * 9000) + 1000
        const exists = messages.filter(message => message.protocolo && message.protocolo === protocol)
        if (exists.length > 0) {
            return generateProtocol()
        } else {
            return protocol
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const protocolo = generateProtocol()
        const { nome, email, mensagem } = form;
        const success = await createMessage({ nome, email, mensagem, protocolo })

        if (success) {
            setLastMessage({ nome, protocolo })
            setStatus(true)
            setForm({ nome: "", email: "", mensagem: "" })
        }
    }

    return (
        <section id="contact" className="grid w-full items-center gap-17.5 bg-brand-primary px-20 py-20 grid-cols-[1fr_1fr] max-[991px]:grid-cols-1 max-[850px]:px-7.5 max-[500px]:px-5">
            <Testimonial users={users} errors={errors} />
            <ContactUs handleChange={handleChange} handleSubmit={handleSubmit} lastMessage={lastMessage} status={status} form={form} sending={sending} sendError={sendError} />
        </section>
    );
}
