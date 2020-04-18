import React from 'react';
import {useMediaQuery} from '@material-ui/core';
import '../../styleguide.css';
import {LandingPageProps} from './types';
import LandingPageMobile from './LandingPageMobile';
import LandingPagePC from './LandingPagePC';

// Responsive landing page component - breaks at 1000px
// Shows either slides displaying text+button or paragraphs of text for MobileStepper
// Last slide is form to sign up / enter any details

export default function LandingPage(props : LandingPageProps){

    const isMobile = useMediaQuery('(max-width:1000px)');

    if (isMobile) {
        return(
            // MOBILE VERIOSN
            <LandingPageMobile {...props} />
        )
    }
    else {
        return(
            // DESKTOP VERSION
            <LandingPagePC {...props} />
        )
    }
}

