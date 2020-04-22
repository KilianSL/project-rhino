import React from 'react';
import {Link} from 'react-router-dom';
import {Box, Paper, useMediaQuery, Grid, Typography, Button, Theme, Fade} from '@material-ui/core';
import {useTheme, withStyles, WithStyles, createStyles} from '@material-ui/styles';
import background from '../images/rhino.jpg';
import logo from '../images/logo.png';

// Landing page for browser and mobile. 
// Displays a title and subtitle over a background image, 
// as well as a call to action button and a secondary action button

const styles = ({palette} : Theme) => createStyles({ // Creates style from object
    root : {
        height: '100vh',
        width: '100vw',
        background: `url(${background})`,
        padding: '0',
        color : "#fff",
        textAlign: "center",
    },
    itemContainer : {
        height: '100%',
        width: '100%',
        padding: '10px',
        overflow : "hidden",
        backgroundColor : palette.primary.main

    },
    item : {
        marginTop : '50px'
    },
    text : {
        color : palette.secondary.main
    },
    button1 : {
        padding: '20px',
        width: '40%'
    },
    button2 : {
        padding: '20px',
        width: '40%',
        borderColor : palette.secondary.main,
        color : palette.secondary.main
    },
    '@media(min-width:1025px)' : { // BROWSER STYLING
        root : {
            padding : '50px',
        },
        itemContainer : {
            width :'710px',
        }
    },
    '@media(max-width:480px)' : {
        button1 : {
            padding: '20px',
            marginBottom: '10px',
            width: '100%'
        },
        button2 : {
            padding: '20px',
            width: '100%',
        },
    },
});

interface props extends WithStyles<typeof styles> { // passes all relevant classes to prop interface

}

function LandingPage(props : props){
    const {classes} = props;
    const mob = useMediaQuery('(max-width:480px)')
    return(
        <Box className={classes.root}>
                <Paper className={classes.itemContainer} elevation={20}>
                    <Fade in={true}>
                        <Grid className={classes.itemContainer} container direction="column" alignItems="center" justify="flex-start">
                            <Grid item container direction="row" justify="center" alignItems="center" className={classes.item}>
                                <img src={logo} style={{width : "30%"}}/>
                                <Typography variant="h1" className={classes.text}><Typography variant="h5">AI Core</Typography>Rhino</Typography>
                            </Grid>
                            <Grid item container direction="column" justify="space-evenly" className={classes.item}>
                                <Typography variant="h3" className={[classes.item, classes.text].join(" ")}>Crowdsource intelligence to combat rhino poaching in Botswana</Typography>
                                <Grid item container direction={mob ? "column" : "row"} justify="space-evenly" alignItems="center" className={classes.item}>
                                    <Button color="secondary" variant="contained" className={classes.button1} component={Link} to="/browse">Contribute</Button>
                                    <Button color="default" variant="outlined" className={classes.button2} component={Link} to="/about">Learn More</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Fade>
                </Paper>
        </Box>
    );
}

export default withStyles(styles)(LandingPage);
