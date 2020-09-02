import React from 'react';
import { Card, Fade, Button, Grid, CardActionArea, CardContent, Typography, CardActions, Box } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {Post} from '../interfaces';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import { api_root } from '../utils';

const useStyles = makeStyles((theme : Theme) => 
    createStyles({
        root : {
            width: "100%",
            backgroundColor: theme.palette.primary.main,
            color: "white",
            borderRadius: 0,
            marginBottom: "5px",
        },
        [theme.breakpoints.up('lg')]: {
            root : {
                borderRadius: theme.shape.borderRadius,
            }
        },
        text : {
            textOverflow : "ellipsis",
            overflow: "hidden",
        }
    })
)


export default function PostCard(props : Post){

    // -1 = disliked, 0 = neutral, +1 = liked
    const [likeState, setLikeState] = React.useState(0); 
    
    const classes = useStyles();

    function sendLike(like : number){

        var body = {
            id : props.postID,
            timestamp: props.timestamp,
            like : like
        }
    
        var request = {
            method : "PUT",
            mode : "cors" as RequestMode,
            body : JSON.stringify(body),
            headers : {
                "Content-Type" : "application/json"
            }
        }

        console.log("Sending like");

        fetch(api_root + "/posts", request)
        .then(
            (data : Body) => {
                console.log("Got response", data)
            }
        )
        .catch(
            err => console.log(err)
        )
    }
    

    const handleLikeEvent = () => { // Likes or Unlikes
        sendLike(1);
        setLikeState(1);
    }

    const handleDislikeEvent = () => { // Dislikes or UnDislikes
        sendLike(-1);
        setLikeState(-1);
    }


    return(
        <Card variant="outlined" className={classes.root}>
            <CardActionArea>
                <CardContent>
                    <Typography variant="h5"   className={classes.text}>
                        {props.title}
                    </Typography>
                    <Typography variant="body2" className={classes.text}>
                        {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button onClick={handleLikeEvent} style={{color : likeState === 1 ? "crimson" : "grey"}}>
                    <ArrowUpwardIcon />
                </Button>
                <Typography variant="body2">
                    {props.likes}
                </Typography>
                <Button onClick={handleDislikeEvent} style={{color : likeState === -1 ? "dodgerblue" : "grey"}}>
                    <ArrowDownwardIcon />
                </Button>
                <Button style={{color : "grey"}}>
                    <ChatBubbleIcon />
                    <Typography variant="body2" style={{color : "white", paddingLeft: '10px'}}>128</Typography>
                </Button>
            </CardActions>
        </Card>
    )
}