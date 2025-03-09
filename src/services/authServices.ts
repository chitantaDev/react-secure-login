import axios from 'axios'
import {BASE_URL} from "../helper/Constants";

/**
 * Spring sets cookies into HTTP response body,
 * no need to handle token in the frontend
 */
const api = axios.create({
    baseURL: BASE_URL,
    withCredentials: true
})

type User = {
    email: string
    firstname: string
    lastname: string
    role: string
}

export const authService = {
    async login(email: string, password: string): Promise<User> {
        const response = await api.post('/auth/authenticate', {
            email,
            password
        })
        return response.data
    },

    async checkAuth(): Promise<User | null> {
        try {
            console.log("checkingAuth with /auth/me")
            const response = await api.get('/auth/me')
            return response.data
        } catch {
            return null
        }
    },

    async logout(): Promise<void> {
        await api.post('/auth/logout')
    }
}