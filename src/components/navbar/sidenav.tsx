import React, { createRef } from "react";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

import menuJson from '@data/menu.json';

export default class SideNav extends React.Component {
    sideNavRef = createRef<HTMLDivElement>()
    menuRef = createRef<HTMLButtonElement>()
    closeNav () {
        this.toggleMenuButton();
        let node = this.sideNavRef.current;
        if (node) {
            node.style.width = "0";
        }
    }
    openNav (elem: any) {
        this.toggleMenuButton();
        let node = this.sideNavRef.current;
        if (node) {
            if (elem.currentTarget.classList.contains('opened')) {
                node.style.width = "250px";
            } else {
                node.style.width = "0";
            }
        } 
    }
    toggleMenuButton() {
        if(this.menuRef.current) {
            this.menuRef.current.classList.toggle('opened');
        }        
    }
    renderList () {
        return menuJson.map((entry, idx) => {
            return <li key={idx}><a
                        href={`#${entry.link}`}
                        className="link"
                        onClick={this.closeNav.bind(this)}>{entry.label}</a>
                    </li>;
        });
    }
    render() {
        return (<div className="sidenav-wrapper">                
                <button ref={this.menuRef} className="menu" onClick={this.openNav.bind(this)}>
                    <svg width="50" height="50" viewBox="0 0 100 100">
                        <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                        <path className="line line2" d="M 20,50 H 80" />
                        <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                    </svg>
                </button>
                <div ref={this.sideNavRef} className="sidenav">
                    <ul>
                        {this.renderList()}
                    </ul>
                </div>
            </div>
        );
    }
}