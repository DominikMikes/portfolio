import { Box, Button, Card, CardActionArea, CardActions, CardContent, Chip, Typography } from "@mui/material";
import React from "react";

// ICONS
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CodeIcon from '@mui/icons-material/Code';
// import SchoolIcon from '@mui/icons-material/School';

import IHistory from 'model/IHistory';

interface PropsType {
    history: IHistory
}

interface IState {
    isExpanded: boolean
}

export default class HistoryCard extends React.Component<PropsType, IState> {
    history: IHistory
    historyCard: any
    lastBoundings: any
    placeHolderHistory: any
    constructor(props: any) {
        super(props);

        this.state = {
            isExpanded: false
        };

        this.history = this.props.history;        
        this.historyCard = React.createRef();
    }
    createPlaceHolder() {        
        this.placeHolderHistory = document.createElement('div');
        this.placeHolderHistory.id = "placeholderHistory";
        this.placeHolderHistory.style.top = this.lastBoundings.top+"px";
        this.placeHolderHistory.style.left = this.lastBoundings.left+"px";
        this.placeHolderHistory.style.height = this.lastBoundings.height+"px";
        this.placeHolderHistory.style.width = this.lastBoundings.width+"px";
        this.placeHolderHistory.style.marginRight = "16px";
        this.placeHolderHistory.style.flex = "0 0 auto";        
    }
    expandHistory () {
        function disableScroll() {
            var x=window.scrollX;
            var y=window.scrollY;
            window.onscroll=function(){window.scrollTo(x, y);};            
        }

        let node = this.historyCard.current;
        if (node) {
            if (node.classList.contains("expanded")) {
                this.setState({isExpanded: false});
                // window.onscroll=function(){};
                node.classList.toggle("expanded");
                
                setTimeout(() => {
                    // this.placeHolderHistory.remove();
                    node.removeAttribute("style");
                }, 200);
            } else {
                this.setState({isExpanded: true});

                // disableScroll(); 

                this.lastBoundings = node.getBoundingClientRect();
                // this.createPlaceHolder();
                
                // node.parentNode.insertBefore(this.placeHolderHistory, node);                
                node.style.top = this.lastBoundings.top+"px";
                node.style.left = this.lastBoundings.left+"px";
                node.style.height = this.lastBoundings.height+"px";
                node.style.width = this.lastBoundings.width+"px";
                // node.style.position = "fixed";
                setTimeout(() => {
                    node.classList.toggle("expanded");
                }, 1);
            }
        }
    }
    renderIcon(type: string) {
        switch(type) {
            case 'work':
                return <CodeIcon color="success"></CodeIcon>
            case 'award':
                return <EmojiEventsIcon color="warning"></EmojiEventsIcon>
            default:
                return '';
        }
    }
    renderTechnologies(data: Array<string>) {        
        return data.map(technology => {            
            return <Chip
            label={technology}
            variant="outlined"
            color="secondary"/>
        });
    }
    renderButtons() {
        return <div className="link">
                    {(!this.state.isExpanded) ? "Details" : "Close"}
                </div>;
    }
    render() {
        return (
            <Card 
                className="history-card"
                onClick={this.expandHistory.bind(this)}
                ref={this.historyCard}
                sx={{ display: 'flex', flexDirection: 'column', flex: '0 0 auto', marginRight: 2 }}>
                <CardActionArea sx={{ flex: 1, paddingTop: 2 }}>
                    {this.renderIcon(this.history.type)}
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {this.history.organisation}
                        </Typography>
                        <Typography variant="h5" component="div">
                            {this.history.job}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {this.history.from}
                            {this.history.to !== '' && <span> - {this.history.to} </span>}
                        </Typography>
                        <Typography gutterBottom variant="body2">
                            {this.history.shortDescription}
                        </Typography>
                        <Typography className="history-content" gutterBottom variant="body1">
                            <div>
                                <ul>
                                    <li>lorem ipsum dolore easdf efadoodafe</li>
                                    <li>lorem ipsum dolore easdf efadoodafe</li>
                                    <li>lorem ipsum dolore easdf efadoodafe</li>
                                    <li>lorem ipsum dolore easdf efadoodafe</li>
                                    <li>lorem ipsum dolore easdf efadoodafe</li>
                                    <li>lorem ipsum dolore easdf efadoodafe</li>
                                    <li>lorem ipsum dolore easdf efadoodafe</li>
                                    <li>lorem ipsum dolore easdf efadoodafe</li>
                                    <li>lorem ipsum dolore easdf efadoodafe</li>
                                </ul>
                            </div>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                                {this.renderTechnologies(this.history.technologies)}
                            </Box>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {this.renderButtons()}
                </CardActions>
            </Card>
        );
    }
}