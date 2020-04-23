import React from 'react';
import { Card, Fade, Button, Grid, CardActionArea, CardContent, Typography, CardActions } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {Post} from '../interfaces';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const useStyles = makeStyles((theme : Theme) => 
    createStyles({
        root : {
            width: "100%",
            backgroundColor: theme.palette.primary.main,
            color: "white",
            borderRadius: 0
        },
        [theme.breakpoints.up('lg')]: {
            root : {
                borderRadius: theme.shape.borderRadius,
                marginBottom: "5px",
                
            }
        }
    })
)

export default function PostCard(props : Post){

    // -1 = disliked, 0 = neutral, +1 = liked
    const [likeState, setLikeState] = React.useState(0); 
    
    const classes = useStyles();

    const handleLikeEvent = () => { // Likes or Unlikes
        setLikeState(1);
    }

    const handleDislikeEvent = () => { // Dislikes or UnDislikes
        setLikeState(-1);
    }


    return(
        <Card variant="outlined" className={classes.root}>
            <CardActionArea>
                <CardContent>
                    <Typography variant="h5">
                        {props.title}
                    </Typography>
                    <Typography variant="body2">
                        {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button onClick={handleLikeEvent} style={{color : likeState === 1 ? "red" : "grey"}}>
                    <ArrowUpwardIcon />
                </Button>
                <Typography variant="body2">
                    {props.likes}
                </Typography>
                <Button onClick={handleDislikeEvent} style={{color : likeState === -1 ? "blue" : "grey"}}>
                    <ArrowDownwardIcon />
                </Button>
            </CardActions>
        </Card>
    )
}