import React from "react";
import GitHub from '@mui/icons-material/GitHub';
import Email from '@mui/icons-material/Email';
import LinkedIn from '@mui/icons-material/LinkedIn';

import './contact.scss';

export default class Contact extends React.Component {
    render() {
        return <div className="link-container">
                <a href="/" className="link"><GitHub fontSize="large"/></a>
                <a href="/" className="link"><Email fontSize="large"/></a>
                <a href="/" className="link"><LinkedIn fontSize="large"/></a>
                </div>
    }
}