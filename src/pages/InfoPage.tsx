import React from 'react';
import {useTheme, withStyles, WithStyles, createStyles} from '@material-ui/styles';
import {Theme, Grid, Paper, useMediaQuery, Typography, Button, Fade, Fab, Zoom} from '@material-ui/core';
import {Link} from 'react-router-dom';
import background from '../images/rhino.jpg';
import logo from '../images/logo.png';

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
        position: 'relative',
        height: '100%',
        width: '100%',
        padding: '25px',
        overflowY : "scroll",
        backgroundColor : palette.primary.main,
        '&::-webkit-scrollbar': {
            width: '0.4em'
        },
        '&::-webkit-scrollbar-track': {
        boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
        webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(0,0,0,.1)',
        outline: '1px solid slategrey'
        }

    },
    item : {
        marginTop : '50px'
    },
    title : {
        fontWeight : 500,
        color : palette.secondary.main,
        fontSize: '32px',
        lineHeight : '44px'
    },
    subtitle : {
        fontWeight : 300,
        color : palette.secondary.light,
        fontSize: '22px',
        lineHeight : '30px',
        paddingTop: '20px',
        paddingBottom: '50px'
    },
    header : {
        fontWeight : 300,
        color : palette.secondary.main,
        fontSize: '22px',
        lineHeight : '30px'
    },
    content : {
        fontWeight : 500,
        color : palette.secondary.light,
        fontSize: '16px',
        lineHeight : '26px',
        textAlign : 'left',
        padding : '30px 0'
    },
    button : {
        padding: '20px',
        marginBottom: '10px',
        bottom: '0',
        width: '100%',
        position: "sticky",
        display : "flex",
        alignItems : "center"
    },
    back : {
        position: "absolute",
        left: "5%",
    },
    '@media(min-width:1025px)' : { // BROWSER STYLING
        root : {
            padding : '50px',
        },
        itemContainer : {
            width :'710px',
        }
    },
});

interface props extends WithStyles<typeof styles>{

};

function InfoPage(props : props){
    const {classes} = props;
    const theme = useTheme();
    const mob = useMediaQuery('(max-width:480px)')
    return(
        <Grid className={classes.root} justify="center" alignItems="center">
                <Paper className={classes.itemContainer} elevation={20}>
                    <Button className={classes.back} variant="outlined" component={Link} to="/">Back</Button>
                    <Fade in={true}>
                        <Grid direction="column" justify="flex-start" alignItems="center">
                            <img src={logo} style={{width : "30%"}}/>
                            <br />
                            <Typography paragraph>
                                <Typography variant="h1" align="center" className={classes.title}>Rhino</Typography>
                                <Typography variant="h3" align="center" className={classes.subtitle}>Crowdsource intelligence to combat rhino poaching in Botswana</Typography>
                            </Typography>
                            <Typography paragraph>
                                <Typography variant="h2" align="center" className={classes.header}>Our Mission</Typography>
                                <Typography variant="h6" align="center" className={classes.content}>In partnership with Adarga, we are going to crowdsource a dataset to help military operations to tackle rhino poaching in Botswana and North of the Zambezi river. Phase 1 consists of finding URLs that can point to potentially useful data sources. The next phase will consist of extracting data from these links, categorising it and cleaning it. This next phase will being within the next 2 weeks.</Typography>
                            </Typography>
                            <Typography paragraph>
                                <Typography variant="h2" align="center" className={classes.header}>How you can help</Typography>
                                <Typography variant="h6" align="center" className={classes.content}>All kinds of resources may be useful. For example you can submit articles, research papers, links to sources of satellite imagery or other telemetry data</Typography>
                            </Typography>
                            <Typography paragraph>
                                <Typography variant="h2" align="center" className={classes.header}>Final Aim</Typography>
                                <Typography variant="h6" align="center" className={classes.content}>A useful final output of this project would be code for producing different geographical heatmap overlays which then could be combined. For example, we could produce a heatmap of likely rhino watering holes, or heatmaps of difficult terrain for either poachers or rhinos. The eventual combination of these heatmaps will hopefully be able to inform where forces on the ground should deploy their resources.</Typography>
                            </Typography>
                            <Zoom in={true} timeout={500}>
                                <Fab color="secondary" className={classes.button} variant="extended" component={Link} to="/browse">Contribute</Fab>
                            </Zoom>
                        </Grid>
                    </Fade>
                </Paper>
        </Grid>
    );
};

export default withStyles(styles)(InfoPage);