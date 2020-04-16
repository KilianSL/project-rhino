import React from 'react';
import {jsx, css} from '@emotion/core';
/**@jsx jsx */
import {Button, useMediaQuery} from '@material-ui/core';
import {Link} from 'react-router-dom';
import '../../classes.css';

// Responsive landing page component - breaks at 1000px
// Shows either slides displaying text+button or paragraphs of text for MobileStepper
// Last slide is form to sign up / enter any details

type LandingPageSlideProps = {
    title : string,
    content : string
}

type LandingPageProps = {
    title : string, // Title displayed at top of all pages
    subtitle : string, // Subtitle + content of first slide
    logo : string,
    slides : Array<LandingPageSlideProps>, // List of slides to display
    btnText : string, // Text to be on button of each slide
    btnLink : React.FunctionComponent // Link for the button to go to
}

const style = css`
    padding: 25px;

    div {
        display: block;
    }

    .logo{
        padding-bottom: 50px;
    }

    h1{
        margin: 0;
    }

    h3{
        padding-bottom: 50px;
        padding-top: 20px;

    }

    h6{
        padding-top: 30px;
        padding-bottom: 30px;
        margin: 0;
        text-align: left;
    }
`

export default function LandingPage(props : LandingPageProps){
    return(
        // mOBILE VERIOSN
        <div className={"fl-column fl-center"} css={style}> 
            <div className="txt-center logo">
                <img src={props.logo} />
            </div>
            <div className="w-full w-max-800 title">
                <h1 className="txt-center">{props.title}</h1>
                <h3 className="w-max-435 txt-center m-auto">{props.subtitle}</h3>
            </div>
            {props.slides.map(
                (slide) => {
                    return(
                        <div className="paragraph w-full w-max-800">
                            <h2 className="m-auto txt-center w-max-600">{slide.title}</h2>
                            <h6>{slide.content}</h6>
                        </div>
                    )
                }
            )}
            <Button 
                variant="contained" 
                color="primary"
                component={Link}
                to="/contribute"
                >
                    {props.btnText}
            </Button>
        </div>
    )
}

