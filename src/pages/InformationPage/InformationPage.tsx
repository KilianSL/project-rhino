import React from 'react';
import {jsx, css} from '@emotion/core';
/**@jsx jsx */
import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';

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

type paragraph = {
    heading : string,
    content : string
}

type props = {
    heading : paragraph,
    logo : string,
    content : Array<paragraph>,
    btnText : string
}

export default function InformationPage(props : props){
        return(
            <div className={"fl-column fl-items-center"} css={style}> 
                <div className="txt-center logo">
                    <img src={props.logo} />
                </div>
                <div className="w-full w-max-800 title">
                    <h1 className="txt-center">{props.heading.heading}</h1>
                    <h3 className="w-max-435 txt-center m-auto">{props.heading.content}</h3>
                </div>
                {props.content.map(
                    (paragraph) => {
                        return(
                            <div className="paragraph w-full w-max-800">
                                <h2 className="m-auto txt-center w-max-600">{paragraph.heading}</h2>
                                <h6>{paragraph.content}</h6>
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