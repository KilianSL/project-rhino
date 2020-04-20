import React from 'react';
import {useMediaQuery, Container, Grid, Button} from '@material-ui/core';
import {Link} from 'react-router-dom';

// Landing page for browser and mobile. 
// Displays a title and subtitle over a background image, 
// as well as a call to action button and a secondary action button

type props = {
    title : string,
    subtitle : string,
    logo : string,
    background : string,
    button1 : {
        text : string,
        to : string
    },
    button2 : {
        text : string,
        to : string
    },
    footer : string
}

export default function LandingPage(props : props){

    const isMobile = useMediaQuery('(max-width:1000px)');

    return(
        <div style={{width:"100vw", 
            height : "100vh", 
            overflow: "hidden",
            backgroundImage : `url(${props.background})`,
            backgroundSize : "cover" }}>
            <Container maxWidth="lg">
                <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="center"
                >
                    <img src={props.logo} />
                    <h1>{props.title}</h1>
                    <h3>{props.subtitle}</h3>
                    <Grid 
                        item
                        direction="row"
                        justify="space-evenly"
                    >
                        <Button 
                            color="primary"
                            component={Link}
                            to={props.button1.to}
                        >
                            {props.button1.text}
                        </Button>
                        <Button 
                            color="secondary"
                            component={Link}
                            to={props.button2.to}
                        >
                            {props.button2.text}
                        </Button>
                    </Grid>
                </Grid>
                <footer style={{bottom: "0"}}>The AI Core</footer>
            </Container>
        </div> 
    )
}

