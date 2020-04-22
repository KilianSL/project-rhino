import React from 'react';
import {useTheme, withStyles, WithStyles, createStyles} from '@material-ui/styles';
import {Theme, Fab} from '@material-ui/core';
import PostAddIcon from '@material-ui/icons/PostAdd';
import {AppBar} from '../components';
import logo from '../images/logo.png';

const styles = ({palette} : Theme) => createStyles({
    
})

interface props extends WithStyles<typeof styles>{

}

function BrowsePage(props : props){
    return(
        <>
        <AppBar />
        <Fab color="secondary" aria-label="post" style={{right:"0", bottom:"0"}}>
            <PostAddIcon htmlColor="black"/>
        </Fab>
        </>
    )
}

export default withStyles(styles)(BrowsePage);
