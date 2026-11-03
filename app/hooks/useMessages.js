import { useEffect, useState } from "react";
import api from "@/app/api/api";

export default function useMessages(isAuthenticated) {
    const [messages, setMessages] = useState([])
    const [messageErrors, setMessageErrors] = useState({ isError: false, textError: "" })
    const [sendError, setSendError] = useState("")
    const [sending, setSending] = useState(false)
    const [loading, setLoading] = useState(true)

    const getMessages = async () => {
        try {
            const response = await api.get('/messages')
            setMessages(response.data)
        } catch (error) {
            setMessageErrors({ isError: true, textError: error.toString() })
        } finally {
            setLoading(false)
        }
    }

    const createMessage = async (message) => {
        setSending(true)
        setSendError("")
        try {
            const response = await api.post('/messages', message)
            setMessages(prev => [...prev, response.data])
            return true
        } catch (error) {
            setSendError(`Não foi possível enviar sua mensagem. ${error}`)
            return false
        } finally {
            setSending(false)
        }
    }

    useEffect(() => {
        if(isAuthenticated){
            getMessages()
        }
    }, [isAuthenticated]);

    return { messages, messageErrors, loading, createMessage, sending, sendError };
}