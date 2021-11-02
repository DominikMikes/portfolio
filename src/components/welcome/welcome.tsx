import { Typography } from "@mui/material";
import React from "react";

import './welcome.scss';

const headlines = [
    "I build software solutions.",
    "I love to write beatiful code.",
    "I build performance oriented apps.",
    "I never stop learning something new."
];

export default class Welcome extends React.Component {
    headlineCnt: number
    typewriterRef: React.RefObject<HTMLDivElement>
    typewriteInterval: any
    constructor(props: any) {
        super(props);

        this.typewriterRef = React.createRef();
        this.headlineCnt = 0;
        this.typewriteInterval = undefined;
    }
    componentDidMount() {
        this.renderTypewriterText();
    }
    startTypewriter() {
        if (!this.typewriteInterval) {
            this.typewriteInterval = setInterval(() => {
                this.renderTypewriterText();                
            }, 4000);  
        }      
    }
    renderTypewriterText() {
        let node = this.typewriterRef.current;
        if (node) {
            // node.classList.toggle('animate');
            node.innerHTML = headlines[this.headlineCnt];

            if (this.headlineCnt === headlines.length-1) {
                this.headlineCnt = 0;
            } else {
                this.headlineCnt++;
            }            
        }
    }
    render () {
        this.startTypewriter();        
        return <section className="container top-container" id="welcome">
                    <div className="welcome">
                        <Typography variant="h1" gutterBottom>
                            Hi, I am <Typography component="span" variant="h1" color="primary">Dominik</Typography>.<br/>
                        </Typography>
                        <Typography variant="h3" gutterBottom>
                            A frontend Engineer.
                        </Typography>
                        <Typography variant="body1" gutterBottom sx={{display: "inline-block"}}>
                            <div className="flex-box">
                                <div className="typewrite animate" ref={this.typewriterRef}></div>                                
                            </div>
                        </Typography>
                    </div>
                </section>
    }
}