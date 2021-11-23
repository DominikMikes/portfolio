import React from 'react';

import '../../App.scss';
import './navbar.scss';
import '../../index.css';

import menuJson from '@data/menu.json';
// todo add projects an blog section
// {
//     "label": "Projects",
//     "link": "project"
// },
// {
//     "label": "Blog",
//     "link": "blog"
// },
export default class NavBar extends React.Component<{}> {
    renderMenu() {
        return menuJson.map((menu, idx) => {
            return <li key={idx}> <a href={`#${menu.link}`}  className="link">{menu.label}</a></li>;
        });
    }
    render() {
        return (            
            <nav className="main-navbar">
                <ul className="flex-box flex-row">
                    {this.renderMenu()}
                </ul>
            </nav>
        );
    }
}