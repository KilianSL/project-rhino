import React from 'react';
import { fade, createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../images/logo.png';
import { Typography, InputBase, useScrollTrigger, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },

    logo: {
      height : "64px",
      marginRight: theme.spacing(1),
      display : "flex",
      flexDirection : "row",
      alignItems : "center",
      textDecoration : "none"
    },
    title : {
      color : theme.palette.secondary.main,
      display : "none",
      [theme.breakpoints.up('sm')] : {
        display : "block",
        marginRight : theme.spacing(4),
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }),
);

function ElevateOnScroll(props : {children : React.ReactElement}) {

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold : 0,
  });

  return(
    React.cloneElement(props.children, {
      elevation: trigger ? 5 : 0
    })
  );
}

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <ElevateOnScroll>
      <div className={classes.root}>
        <AppBar position="sticky">
          <Toolbar>
            <Link to="/browse" className={classes.logo}>
              <img src={logo} style={{height: "100%"}}/>
              <Typography variant="h4" noWrap className={classes.title}>Rhino</Typography>
            </Link>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    </ElevateOnScroll>
    
  );
}