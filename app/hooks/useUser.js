import { useEffect, useState } from "react";
import api from "@/app/api/api";

export default function useUsers() {
    const [users, setUsers] = useState([]);
    const [userErrors, setUserErrors] = useState({ isError: false, textError: "" })

    const getUsers = async () => {
        try {
            const response = await api.get('/users')
            setUsers(response.data)
        } catch (error) {
            console.error("Erro: ", error)
            setUserErrors({ isError: true, textError: error.toString() })
        }
    }

    useEffect(() => {
        getUsers()
    }, []);

    return { users, userErrors };
}