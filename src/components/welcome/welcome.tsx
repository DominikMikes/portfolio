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
                            <div className="flex-box">
                                {/* <div className="flex-element">{"<code>"} </div> */}
                                <div className="typewrite"> I build software solutions. </div>
                                {/* <div className="flex-element">{"<code>"} </div> */}
                            </div>
                        </Typography>
                    </div>
                </section>
    }
}