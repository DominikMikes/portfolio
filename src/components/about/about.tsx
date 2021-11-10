import { Typography } from "@mui/material";
import React from "react";

export default class About extends React.Component{
    render() {
        return (
            <div>
                <Typography
                    variant="body1"
                    component="div"
                    align="left">
                    I’m a Frontend Developer located in Vienna. I have a passion to bring technical requirements to life since 2011.<br/>
                    Performance and usability without sacrificing creativity is my priority number one.<br/><br/>

                    I would describe myself as well-organised, focused on problem solving, attention to detail.<br/>
                    After work I do a lot of sports, learning new stuff and play video games.
                </Typography>
            </div>
        );
    }
}