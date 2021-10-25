import { Typography } from "@mui/material";
import React from "react";

export default class Welcome extends React.Component {
    render () {
        return <section className="container">
                    <Typography variant="h4">
                        Hi, I am <Typography component="span" variant="h4" color="primary">Dominik</Typography>.
                        A software developer based in Austria.
                    </Typography>
                </section>
    }
}