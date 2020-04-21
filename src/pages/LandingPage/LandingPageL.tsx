import React from 'react';
import {css, jsx} from '@emotion/core';
/**@jsx jsx */
import logo from '../../images/logo.png';
import rhino from '../../images/rhino.jpg';
import { Box, Paper, Grid } from '@material-ui/core';
import {AlertModal} from '../../components';

const style = css `
    width: 100vw;
    height: 100vh;
    background-image: url(${rhino})
`

export default function LandingPageL() {
    return(
        <Box css={style}>
            <Box style={{height:'100%', width: '35%', left: '0'}} />
            <AlertModal />
        </Box>
    )
}