import { Card, CardContent, Typography, CardActions, CardActionArea, Button, Chip } from "@mui/material";
import React from "react";

import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';

import historyJSON from '@data/history.json';
import { Box } from "@mui/system";

interface IHistory {
    organisation: string,
    job: string,
    from: string,
    to: string,
    shortDescription: string,
    technologies: Array<string>,
    type: string
}

export default class History extends React.Component {
    historyData = historyJSON
    histories: any
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
    renderHistories(data: Array<IHistory>) {
        data.reverse();

        return data.map((history: IHistory) => {
            return  <Card sx={{ display:'flex', flexDirection: 'column', flex: '0 0 auto', marginRight: 2 }}>                        
                        <CardActionArea sx={{flex: 1, paddingTop: 2}}>                            
                            {this.renderIcon(history.type)}
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                {history.organisation}
                                </Typography>
                                <Typography variant="h5" component="div">
                                {history.job}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {history.from} 
                                {history.to !== '' && <span> - { history.to } </span> }
                                </Typography>
                                <Typography gutterBottom variant="body2">
                                {history.shortDescription}
                                </Typography>
                                {/* <Box sx={{display:'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
                                    {this.renderTechnologies(history.technologies)}
                                </Box> */}
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small">Details</Button>
                        </CardActions>
                    </Card>

        });
    }
    render() {
        this.histories = this.renderHistories(this.historyData);
        return (
        <Box sx={{display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'scroll'}}>
            {this.histories}
        </Box>);
    }
}