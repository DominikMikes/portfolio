import React from "react";
import Skill from "@components/skill/skill";
import Project from "@components/project/project";
import Blog from '@components/blog-card/blog-card';
import Contact from "@components/contact/contact";
import History from "@components/history/history";
import About from "@components/about/about";
import { Typography } from "@mui/material";


interface PropsType {
    headline?: string,
    type?: string
}

export default class Section extends React.Component<PropsType, {}> {
    renderType(type: string | undefined) {
        switch (type) {
            case 'skill':
                return <Skill></Skill>;
            case 'about':
                return <About></About>
            case 'project':
                return <Project></Project>;
            case 'blog':
                return <Blog></Blog>;
            case 'contact':
                return <Contact></Contact>;
            case 'history':
                return <History></History>;
            default:
                return '';
        }
    }
    render() {
        return (
            <section className="container">
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="primary"
                    sx={{ textTransform: 'uppercase'}}>
                    {this.props.headline}
                </Typography>
                <div className="content">
                    <div className="skills flex-box flex-row flex-center">
                        {this.renderType(this.props?.type)}                        
                    </div>
                </div>
            </section>
        );
    }
}