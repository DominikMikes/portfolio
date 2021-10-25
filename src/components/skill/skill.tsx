import { Card, CardContent, CardActionArea, Typography, LinearProgress, Box } from "@mui/material";
import React from "react";

import './skill.scss';

import skillsJson from '@data/skills.json';

export default  class Skill extends React.Component<{}> {    
    render() {
        const renderSkills = skillsJson.skills.map((skill, index) => {
            return <div className="skill">
                        <Card sx={{ flex: 1, marginTop: 1 }}>
                            <CardActionArea>
                                <CardContent>
                                    <Box sx={{ display: 'flex' }}>
                                        <Box sx={{ alignSelf: 'flex-start', flex: 1, marginRight: 10 }}>
                                            <Typography
                                                variant="body2"
                                                component="div"
                                                align="left">
                                                {skill.label}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ marginLeft: 'auto' }}>
                                            <Typography
                                                variant="body2"
                                                component="div">
                                                {skill.percent}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <LinearProgress
                                        color="primary"
                                        variant="determinate"
                                        value={75} />
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
        });
        return (        
            <Box sx={{ display: 'flex', flexFlow: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
                {renderSkills}
            </Box>
        );
    }
}