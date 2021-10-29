import * as React from 'react';

import '../../App.scss';
import './navbar.scss';

import menuJson from '@data/menu.json';

export default class NavBar extends React.Component<{}> {
    renderMenu() {
        return menuJson.map(menu => {
            return <li> <a href={`#${menu.link}`}  className="link">{menu.label}</a></li>;
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