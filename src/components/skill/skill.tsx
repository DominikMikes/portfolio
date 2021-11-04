import { Card, CardContent, CardActionArea, Typography, LinearProgress, Box } from "@mui/material";
import React from "react";

import { ISkill } from "model/ISkill";
import './skill.scss';

import skillsJson from '@data/skills.json';

export default  class Skill extends React.Component<{}> {
    render() {
        const renderSkills = [];
        for (const [key, value] of Object.entries(skillsJson)) {
            renderSkills.push(<div key={key} className="skill-headline">{key}</div>);
            renderSkills.push(value.map((skill: ISkill, index: number) => {
                    return <div key={index} className="skill">
                        <Card sx={{ flex: 1, marginBottom: 1 }}>
                            <CardActionArea>
                                <CardContent>
                                    <Box sx={{ display: 'flex' }}>
                                        <Box className="label" sx={{ alignSelf: 'flex-start', flex: 1, marginRight: 10 }}>
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
                                        value={parseInt(skill.percent) | 0} />
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
            }));
        }
        // const renderSkills = skillsJson.skills.map((category: Array<ISkill>) => {
        //     return category.map((skill: ISkill, idx) => {
        //         return {skill.label};
        //     });
        // });

        // const renderSkills = skillsJson.skills.map((skill, index) => {
        //     return <div key={index} className="skill">
        //                 <Card sx={{ flex: 1, marginBottom: 1 }}>
        //                     <CardActionArea>
        //                         <CardContent>
        //                             <Box sx={{ display: 'flex' }}>
        //                                 <Box className="label" sx={{ alignSelf: 'flex-start', flex: 1, marginRight: 10 }}>
        //                                     <Typography
        //                                         variant="body2"
        //                                         component="div"
        //                                         align="left">
        //                                         {skill.label}
        //                                     </Typography>
        //                                 </Box>
        //                                 <Box sx={{ marginLeft: 'auto' }}>
        //                                     <Typography
        //                                         variant="body2"
        //                                         component="div">
        //                                         {skill.percent}
        //                                     </Typography>
        //                                 </Box>
        //                             </Box>
        //                             <LinearProgress
        //                                 color="primary"
        //                                 variant="determinate"
        //                                 value={75} />
        //                         </CardContent>
        //                     </CardActionArea>
        //                 </Card>
        //             </div>
        // });
        return (        
            <Box sx={{ display: 'flex', flexFlow: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
                {renderSkills}
            </Box>
        );
    }
}