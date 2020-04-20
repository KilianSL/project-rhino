import React from 'react';
import {useMediaQuery} from '@material-ui/core';

// Landing page for browser and mobile. 
// Displays a title and subtitle over a background image, 
// as well as a call to action button and a secondary action button

type props = {
    title : string,
    subtitle : string,
    logo : string,
    button1 : {
        text : string,
        to : string
    }
    button2 : {
        text : string,
        to : string
    }
    footer : string
}

export default function LandingPage(props : props){

    const isMobile = useMediaQuery('(max-width:1000px)');
    
}

