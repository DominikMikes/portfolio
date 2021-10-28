import { Button } from '@mui/material';
import * as React from 'react';

import '../../App.scss';
import './navbar.scss';

export default class NavBar extends React.Component<{}> {
    render() {
        return (            
            <nav className="main-navbar">
                <ul className="flex-box flex-row">
                    <li>
                        <Button href="/">
                            Skills.
                        </Button>
                    </li>
                    <li>
                        <Button href="/">
                            Projects.
                        </Button>
                    </li>
                    <li>
                        <Button href="/">
                            Blog.
                        </Button>
                    </li>
                    <li>
                        <Button href="/">
                            Contact.
                        </Button>
                    </li>
                </ul>
            </nav>
        );
    }
}