// Floating Action button that pops up on scrolling down from the top of the page
import React from 'react';
import {useScrollTrigger, Slide, Fab} from '@material-ui/core';

interface props{
    ariaLabel : string,
    position? : 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right',
    onClick : Function,
    direction : 'up' | 'down' | 'left' | 'right',
    icon : React.ReactChildren,
}

export default function PopUpButton(props : props) {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold : 100,
      });

      return(
          <Slide direction={props.direction} in={trigger}>
              <Fab color={"secondary"} aria-label={props.ariaLabel} style={{position:"fixed", bottom:"5%", right:"10%"}}>
                {props.icon}
              </Fab>
          </Slide>
      )
}