import React from 'react';
import { Card, Fade, Button, Grid, CardActionArea, CardContent, Typography, CardActions } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {Post} from '../interfaces';

const useStyles = makeStyles((theme : Theme) => 
    createStyles({
        root : {
            width: "100%",
            backgroundColor: theme.palette.primary.main,
            color: "white",
            borderRadius: 0,
            margin: "5px 0",
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
            
        </Card>
    )
}