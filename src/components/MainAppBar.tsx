import * as React from 'react';
import { Box, Sheet, Typography, Button, IconButton } from '@mui/joy';
import MenuIcon from '@mui/icons-material/Menu';
import ModeToggle from "./ModeToggle";
import {useAuthStore} from "../store/authStore";
import {authService} from "../services/authServices";
import {useNavigate} from "react-router-dom";

export default function MainAppBar() {
    const {isAuthenticated, logout: logoutStore } = useAuthStore()
    const navigate = useNavigate()
    const handleLogout = async () => {
        await authService.logout()
        logoutStore()
        navigate('/login')
    }
    // TODO: https://mui.com/joy-ui/getting-started/read
    //  instructions to adhere to style guidelines like the Sheet component
    //  which is used as a container

    // FIXME: stop using joyui dark theme, joyui interferes with mui/material and i cant add a navbar
    //   refactor here https://mui.com/material-ui/customization/dark-mode/

    return (
        <Sheet
            variant="solid"
            //color="primary"
            sx={{
                display: 'flex',
                alignItems: 'center',
                p: 2,
                mb: 2,
                position: "fixed",
                top: 0,
                zIndex: 1100,
                width: "100%",
                height: "50px"
            }}
        >
            <IconButton
                variant="soft"
                color="neutral"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => navigate("/home")}
            >
                <MenuIcon />
            </IconButton>
            <Typography level={"h4"} sx={{ flexGrow: 1 }}>
                RentReflect
            </Typography>
            <ModeToggle/>
            {isAuthenticated && (
                <Button
                    variant="solid"
                    color="neutral"
                    onClick={handleLogout}
                >
                    Logout
                </Button>
            )}
        </Sheet>
    );
}