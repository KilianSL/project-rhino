import React from 'react';
import {useMediaQuery} from '@material-ui/core';
import LandingPageL from './LandingPageL';

// Landing page for browser and mobile. 
// Displays a title and subtitle over a background image, 
// as well as a call to action button and a secondary action button

export default function LandingPage(){

    const isMobile = useMediaQuery('(max-width:960px)');

    if (isMobile) {
        return(
            <>MOBILE VIEW</>
        );
    } else {
        return(
            <LandingPageL />
        )
    }
}

