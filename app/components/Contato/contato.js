'use client'
import { useEffect, useState } from "react";
import ContactUs from "../UI-Components/ContactUs/ContactUs";
import api from "@/app/api/api";
import Testimonial from "../Testimonials/testimonials";

export default function Contato() {

    const [form, setForm] = useState({ nome: "", email: "", mensagem: "" })
    const [messages, setMessages] = useState([])
    const [status, setStatus] = useState(false)
    const [lastMessage, setLastMessage] = useState({ nome: "", protocolo: 0 })
    const [users, setUsers] = useState([])
    const [errors, setErrors] = useState({ isError: false, textError: "" })

    const getUsers = async () => {
        try {
            const response = await api.get('/users')
            setUsers(response.data)
        } catch (error) {
            console.error("Erro: ", error)
            setErrors({ isError: true, textError: error.toString() })
        }
    }

    useEffect(() => {
        getUsers()
        const messages = JSON.parse(localStorage.getItem('mensagens')) || []
        setMessages(messages)
    }, [])

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

    useEffect(() => {
        localStorage.setItem('mensagens', JSON.stringify(messages))
    }, [messages])


    const handleSubmit = (e) => {
        e.preventDefault()

        const protocol = generateProtocol()

        setLastMessage({ ...lastMessage, nome: form.nome, protocolo: protocol })
        setMessages([...messages, { nome: form.nome, email: form.email, mensagem: form.mensagem, protocolo: protocol }])

        setStatus(true)
        setForm({ nome: "", email: "", mensagem: "" })

    }

    return (
        <section id="contact" className="grid w-full items-center gap-17.5 bg-brand-primary px-20 py-20 grid-cols-[1fr_1fr] max-[991px]:grid-cols-1 max-[850px]:px-7.5 max-[500px]:px-5">
            <Testimonial users={users} errors={errors}/>
            <ContactUs handleChange={handleChange} handleSubmit={handleSubmit} lastMessage={lastMessage} status={status} form={form} />
        </section>
    );
}
