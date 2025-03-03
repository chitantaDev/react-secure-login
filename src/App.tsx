import React, {useEffect, useState} from 'react'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import {useAuthStore} from './store/authStore'
import {HomePage} from './pages/HomePage'
import {PrivateRoute} from './components/PrivateRoute'
import {authService} from "./services/authServices";
import {TestPage} from "./pages/TestPage";
import {NotFoundPage} from "./pages/NotFound";
import NewLogin from "./pages/NewLogin";
import {CssVarsProvider} from "@mui/joy";
import ModeToggle from "./components/ModeToggle";
import {Dashboard} from "./pages/Dashboard";

const App = () => {
    const setAuth = useAuthStore(state => state.setAuth)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const user = await authService.checkAuth()
                if (user) {
                    setAuth(user)
                }
            } catch (error) {
                console.error('Auth check failed:', error)
            } finally {
                setIsLoading(false)
            }
        }
        checkAuth()
    }, [setAuth])

    if (isLoading) {
        return <div>Loading...</div>
    }

    //TODO refactor private routes and map over it instead of having everything one by one in the routes
    return (
        <CssVarsProvider>
            <ModeToggle/>
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<NewLogin />} />
                <Route element={<PrivateRoute />}>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/test" element={<TestPage />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
                <Route path="/" element={<Navigate to="/home" />} />
            </Routes>
        </BrowserRouter>
        </CssVarsProvider>
    )
}

export default App