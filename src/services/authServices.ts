import axios from 'axios'

//TODO: make an authorizedAxiosInstance service so i can reuse this instance in other places (like in my other projects)
const api = axios.create({
    baseURL: 'http://localhost:8080/api/v1', //TODO: export to a helper constant class, too lazy now c: (check if other classes have this need2)
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