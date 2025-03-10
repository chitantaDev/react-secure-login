import {Card, Stack} from "@mui/joy";
import Typography from "@mui/joy/Typography";
import "./displayStyles.css"
import React from "react";

interface DisplaySheetProps {
    id: number,
    category: string,
    amount: number
}
export const DisplaySheet: React.FC<DisplaySheetProps> = (props: DisplaySheetProps) => {

    return (
        <Stack spacing={2} sx={{ maxWidth: '60ch' }}>
            <Card>
                <Typography level="title-lg">
                    {props.category}
                </Typography>
                <Typography level="body-md">
                    {props.amount} €
                </Typography>
            </Card>
        </Stack>
    )
}