import axios from "axios";
import {useAuthStore} from '../store/authUseStore'

const authApi = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: true
})

authApi.interceptors.request.use((config) =>{
    const token = useAuthStore.getState().token
    config.headers = {
        Authorization: `Bearer ${token}`
    }
    return config
})

export default authApi