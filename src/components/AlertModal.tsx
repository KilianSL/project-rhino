// Displays some text and 2 buttons - can be used either as a static element for landing pages or as a pop-up modal component. 

import React from 'react';
import {withStyles, createStyles, CSSProperties} from '@material-ui/styles';
import { Box, Paper, PropTypes, Theme, StyleRules, Grid, Typography, Button } from '@material-ui/core';
import {theme} from '../utils';

type props = {
    classes : {
        root : string,
        grid : string,
        btnContainer : string
    }
}

const styles = ({palette} : Theme) => createStyles({
    root: {
        margin : 'auto',
        padding: '40px',
        border : `10px solid ${palette.secondary.main}`,
        backgroundColor : palette.primary.main,
        maxWidth : '600px',
    },
    grid : {
        width : '100%',
        height: '100%',
    },
    btnContainer : {
        width: '100%'
    }
})

function AlertModal(props : props) {
    const {classes} = props;
    return(
            <Paper className={classes.root} elevation={10}>
                <Grid className={classes.grid} direction="column" justify="center" alignItems="center" container>
                    <Typography variant="h4">Contribute Now!</Typography>
                    <Grid container item justify="center" direction="row" className={classes.btnContainer}>
                        <Button variant="contained" color="secondary" style={{margin : '10px', width: '40%'}}>Contribute</Button>
                        <Button variant="outlined" color="default" style={{margin : '10px', width: '40%'}}>Learn More</Button>
                    </Grid>
                </Grid>
            </Paper>
    )
}

export default withStyles(styles)(AlertModal);