import { useEffect, useState } from "react";
import api from "@/app/api/api";

export default function useMessages(isAuthenticated) {
    const [messages, setMessages] = useState([])
    const [messageErrors, setMessageErrors] = useState({ isError: false, textError: "" })
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

    useEffect(() => {
        if(isAuthenticated){
            getMessages()
        }
        setLoading(false)
    }, [isAuthenticated]);

    return { messages, messageErrors, loading };
}