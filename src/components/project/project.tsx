import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

export default class Project extends React.Component {
    render() {
        return <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="/images/cards/light.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Project 1
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Lorem Ipsum dolore Lorem Ipsum dolore Lorem Ipsum dolore Lorem Ipsum dolore
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Demo
                    </Button>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                </CardActions>
            </Card>;
    }
}