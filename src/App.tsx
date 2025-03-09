import React, {useEffect, useState} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {useAuthStore} from './store/authStore'
import {HomePage} from './pages/HomePage'
import {PrivateRoute} from './components/PrivateRoute'
import {authService} from "./services/authServices";
import {TestPage} from "./pages/TestPage";
import {NotFoundPage} from "./pages/NotFoundPage";
import MUILoginPage from "./pages/MUILoginPage";
import {CssVarsProvider} from "@mui/joy";
import ModeToggle from "./components/ModeToggle";
import CssBaseline from "@mui/joy/CssBaseline";
import ContentPage from "./pages/ContentPage";
import PrivateRoutes from "./components/PrivateRoutes";

const App = () => {
    const setAuth = useAuthStore(state => state.setAuth)
    const [isLoading, setIsLoading] = useState(true)
    const privateRoutes = [
        {path: "home", element: <HomePage/>},
        {path: "test", element: <TestPage/>},
        {path: "/content", element: <ContentPage/>},
        {path: "*", element: <NotFoundPage/>},
    ]

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

    return (
        <CssVarsProvider>
            <ModeToggle/>
            <CssBaseline />
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<MUILoginPage/>} />
                    <Route element={<PrivateRoute/>}>
                        <Route
                            path={"*"}
                            element={<PrivateRoutes routes={privateRoutes}/>}
                        />
                    </Route>
                    <Route path="/" element={<HomePage/>} />
                </Routes>
            </BrowserRouter>
        </CssVarsProvider>
    )
}

export default App