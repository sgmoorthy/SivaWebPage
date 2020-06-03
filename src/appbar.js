
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SvgIcon from '@material-ui/core/SvgIcon';
import ButtonBase from '@material-ui/core/ButtonBase';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';



import React from 'react';
import './index.css';

const useStyles = makeStyles((theme) => ({

menuButton: {
  marginRight: theme.spacing(2),
},
title: {
  flexGrow: 1,
}

}));


function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}



export default function Appbar({ children }) {
  const classes = useStyles();
  return (
    <div>
          
    <AppBar position="static">
    <Toolbar>
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" className={classes.title}>
        Siva Arul Veli
      </Typography>
      <ButtonBase component={Link} to={'/'}>
      <HomeIcon  />
      </ButtonBase>
    </Toolbar>
  </AppBar>
   {children} 
   </div>
 
    

   
  );
}
