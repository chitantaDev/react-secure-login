import {DisplaySheet} from "./DisplaySheet";
import {Data, Income} from "../../utils/Data";
import {Card, Divider, Stack} from "@mui/joy";
import Typography from "@mui/joy/Typography";
import React from "react";

export const DataDisplay = () => {

    return (
        <>
            <Stack className={"item"} spacing={2} sx={{ maxWidth: '60ch' }}>
                <Card>
                    <Typography level="title-lg">
                        Total Net Income
                    </Typography>
                    <Typography level="body-md">
                        {Income && Income[0].amount} €
                    </Typography>
                </Card>
            </Stack>
            <Divider orientation="horizontal" />
            {Data &&
                Data.map((data: any) =>
                    <div>
                    <div key={data.id} className={"item"}>
                        <DisplaySheet
                            key={data.id}
                            id={data.id}
                            category={data.category}
                            amount={data.amount}
                        />
                    </div>
                        <Divider orientation="horizontal" />
                    </div>
                )
            }
        </>
    )
}