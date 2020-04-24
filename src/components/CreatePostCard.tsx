import React from 'react';
import { Card, Fade, Button, Grid, CardActionArea, Input } from '@material-ui/core';
import { createStyles, makeStyles, Theme, fade } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PostAddIcon from '@material-ui/icons/PostAdd';

const useStyles = makeStyles((theme : Theme) => 
    createStyles({
        root : {
            width: "100%",
            backgroundColor: theme.palette.primary.main,
            color: "white",
            borderRadius: 0,
            margin: "5px 0",
        },
        actionArea : {
            padding: "5px 0"
        },
        input: {
            color: "white",
            padding: "5px",
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
              backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            width: '80%',
            [theme.breakpoints.up('sm')]: {
              marginLeft: theme.spacing(3),
              width: '80%',
            },
          },
        [theme.breakpoints.up('lg')]: {
            root : {
                borderRadius: theme.shape.borderRadius,
            }
        }
    })
)

export default function PostCard(){

    const classes = useStyles();

    return(
        <Card variant="outlined" className={classes.root}>
            {/* onclick will open create post overlay */}
           <CardActionArea className={classes.actionArea}> 
                <Grid container direction="row" wrap="nowrap" justify="space-evenly" alignItems="center">
                    <AccountCircleIcon  fontSize="large" color="secondary"/>
                    <Input className={classes.input} placeholder="Create Post..." disabled></Input>
                    <PostAddIcon/>
                </Grid>
           </CardActionArea>
        </Card>
    )
}
