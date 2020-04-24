// Floating Action button that pops up on scrolling down from the top of the page
// Renders upon it the children passed to the component
// TODO - Implement direction, position, color as props

import React from 'react';
import {useScrollTrigger, Slide, Fab} from '@material-ui/core';

interface props{
    ariaLabel : string,
    direction : 'up' | 'down' | 'left' | 'right',
    children? : React.ReactElement
}

export default function PopUpButton(props : props) {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold : 100,
      });

      return(
          <Slide direction={props.direction} in={trigger}>
              <Fab color={"secondary"} aria-label={props.ariaLabel} style={{position:"fixed", bottom:"5%", right:"10%"}}>
                  {props.children}
              </Fab>
          </Slide>
      )
}