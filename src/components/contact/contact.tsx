import React from "react";
import GitHub from '@mui/icons-material/GitHub';
import Email from '@mui/icons-material/Email';
import LinkedIn from '@mui/icons-material/LinkedIn';

import './contact.scss';
import { Twitter } from "@mui/icons-material";

export default class Contact extends React.Component {
    render() {
        return <div className="link-container">
                <a href="https://github.com/DominikMikes" target="_blank" className="link" rel="noreferrer"><GitHub fontSize="large"/></a>
                <a href="mailto:dominik.blau@gmail.com" className="link"><Email fontSize="large"/></a>
                <a href="https://www.linkedin.com/in/dominik-mikes-3879631ba/" target="_blank" className="link" rel="noreferrer"><LinkedIn fontSize="large"/></a>
                <a href="https://twitter.com/MikesDominik" target="_blank" className="link" rel="noreferrer"><Twitter fontSize="large"/></a>
                </div>
    }
}