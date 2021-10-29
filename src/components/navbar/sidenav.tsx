import React, { createRef } from "react";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

import menuJson from '@data/menu.json';

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
    renderList () {
        return menuJson.map(entry => {
            return <li><a
                        href={`#${entry.link}`}
                        className="link"
                        onClick={this.closeNav.bind(this)}>{entry.label}</a>
                    </li>;
        });
    }
    render() {
        return (<div className="sidenav-wrapper">
                <MenuIcon 
                onClick={this.openNav.bind(this)}
                color="inherit"
                className="menubtn"
                fontSize="large"></MenuIcon>                
                <div ref={this.sideNavRef} className="sidenav">
                    <div className="closebtn" onClick={this.closeNav.bind(this)}>
                    <CloseIcon fontSize="large"></CloseIcon>
                    </div>
                    <ul>
                        {this.renderList()}
                    </ul>
                </div>
            </div>
        );
    }
}