import { Button } from "@mui/material";
import React, { createRef } from "react";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';


export default class SideNav extends React.Component {
    sideNavRef = createRef<HTMLDivElement>()
    closeNav () {
        let node = this.sideNavRef.current;
        if (node) {
            node.style.width = "0";
        }
    }
    openNav () {
        let node = this.sideNavRef.current;
        if (node) {
            node.style.width = "250px";
        } 
    }
    render() {
        return (<div className="sidenav-wrapper">
                <MenuIcon onClick={this.openNav.bind(this)} color="primary"></MenuIcon>                
                <div ref={this.sideNavRef} className="sidenav">
                    <ul>
                        <li className="closebtn" onClick={this.closeNav.bind(this)}>
                            <CloseIcon></CloseIcon>
                        </li>
                        <li>Skills</li>
                        <li>Projects</li>
                        <li>Blog</li>
                        <li>Contac</li>
                    </ul>
                </div>
            </div>
        );
    }
}