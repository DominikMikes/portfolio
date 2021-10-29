import { Typography } from "@mui/material";
import React from "react";

import './welcome.scss';

export default class Welcome extends React.Component {
    render () {
        return <section className="container" id="welcome">
                    <div className="welcome">
                        <Typography variant="h1" gutterBottom>
                            Hi, I am <Typography component="span" variant="h1" color="primary">Dominik</Typography>.<br/>
                        </Typography>
                        <Typography variant="h3" gutterBottom>
                            A frontend Engineer.
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                        Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.
                        </Typography>
                    </div>
                </section>
    }
}