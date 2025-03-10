import '@fontsource/inter';
import * as React from 'react';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import { useState } from "react";
import {useHandleTextInput} from "../hooks/useHandleTextInput";
import {authService} from "../services/authServices";
import {useNavigate} from "react-router-dom";
import {useAuthStore} from "../store/authStore";

interface FormData {
    email: string;
    password: string;
    [key: string]: string;
}

export default function MUILoginPage() {
    const navigate = useNavigate()
    const setAuth = useAuthStore(state => state.setAuth)
    const { handleTextInputChange } = useHandleTextInput<FormData>();
    const [formData, setFormData] = useState<FormData>({
        email: "",
        password: "",
    });
    const [error, setError] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const user = await authService.login(formData.email, formData.password)
            setAuth(user)
            navigate('/home')
        } catch (err) {
            setError('Login failed')
            console.error(err)
        }
    }

    return (
        <main>
            <Sheet
                sx={{
                    width: 300,
                    mx: 'auto',
                    my: 4,
                    py: 3,
                    px: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    borderRadius: 'sm',
                    boxShadow: 'md',
                    marginTop: "100px"
                }}
                variant="outlined"
            >
                <form onSubmit={handleSubmit}>
                    <div>
                        <Typography level="h4" component="h1">
                            <b>Welcome!</b>
                        </Typography>
                        <Typography level="body-sm">Sign in to continue.</Typography>
                    </div>
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input
                            name="email"
                            type="email"
                            placeholder="johndoe@email.com"
                            value={formData.email}
                            onChange={(event) => handleTextInputChange(event, setFormData)}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Password</FormLabel>
                        <Input
                            name="password"
                            type="password"
                            placeholder="password"
                            value={formData.password}
                            onChange={(event) => handleTextInputChange(event, setFormData)}
                        />
                    </FormControl>
                    <Button type="submit" sx={{mt: 1}}>Log in</Button>
                    {error && <p style={{color: 'red'}}>{error}</p>}
                    <Typography
                        endDecorator={<Link href="/sign-up">Sign up</Link>}
                        sx={{fontSize: 'sm', alignSelf: 'center'}}
                    >
                        Don&apos;t have an account?
                    </Typography>
                    </form>
            </Sheet>
        </main>
    );
}
