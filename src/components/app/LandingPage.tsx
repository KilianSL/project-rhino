import React from 'react';
import {jsx, css} from '@emotion/core';
/**@jsx jsx */
import {Button, useMediaQuery, SlideProps} from '@material-ui/core';
import {Link} from 'react-router-dom';

// Responsive landing page component - breaks at 1000px
// Shows either slides displaying text+button or paragraphs of text for MobileStepper
// Last slide is form to sign up / enter any details

const style = css`
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    color: #42494f;
    font-size: 16px;

    div{
        max-width: 800px;
        width: 100%;
        box-sizing: border-box;
        display: block;
        font-weight: 500;
        margin: auto;
    }

    h1, h2{
        color: 1a1a1a;
        font-weight: 300;
    }
    h1{
        font-size: 48px;
        line-height: 58px;
        display: block;
        margin-block-start: 0.67em;
        margin-block-end: 0.67em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }
    h3{
        padding-bottom: 50px;
        padding-top: 20px;
        margin: auto;
        max-width: 435px;
        font-size: 24px;
        line-height: 34px;
        font-weight: 300;
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        color: #42494f;
    }
    h2{
        text-align: center;
        color: #1a1a1a;
        margin: auto;
        max-width: 600px;
        font-size: 30px;
        line-height: 40px;
        font-weight: 300 !important;
        margin-block-start: 0.83em;
        margin-block-end: 0.83em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        display: block;
    }
    h6{
        padding-top: 30px;
        padding-bottom: 30px;
        margin: 0;
        font-size: 18px;
        line-height: 28px;
        font-weight: 500;
        box-sizing: border-box;
        display: block;
        margin-block-start: 2.33em;
        margin-block-end: 2.33em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }
`

type LandingPageSlideProps = {
    title : string,
    content : string
}

type LandingPageProps = {
    title : string, // Title displayed at top of all pages
    subtitle : string, // Subtitle + content of first slide
    slides : Array<LandingPageSlideProps>, // List of slides to display
    btnText : string, // Text to be on button of each slide
    btnLink : React.FunctionComponent // Link for the button to go to
}

export default function LandingPage(props : LandingPageProps){
    return(
        // mOBILE VERIOSN
        <div css={style}> 
            <div className="title">
                <h1>{props.title}</h1>
                <h3>{props.subtitle}</h3>
            </div>
            {props.slides.map(
                (slide) => {
                    return(
                        <div className="paragraph">
                            <h2>{slide.title}</h2>
                            <h6>{slide.content}</h6>
                            <br />
                            <br />
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

