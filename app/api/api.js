import axios from "axios";

const api = axios.create({
    baseURL: 'https://6adfdd0f8e42963c8d5e71d0.mockapi.io/snapnote',
    timeout: 5000,
    headers: {
        "Content-Type" : "application/json"
    }
})

export default api