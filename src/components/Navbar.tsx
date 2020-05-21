import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {orange} from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  titleNavbarUI: {
    fontWeight: 'normal',
  },
  appBar: {
    backgroundColor: orange[700],
    color: '#fff',
  },
  navLink: {
    color: '#fff',
  },
  navbarButtons: {
    '&:focus': {
      backgroundColor: 'unset',
    }
  }
}));


type PropsType = {}

const Navbar: React.FC<PropsType> = React.memo(() => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={'navbarBlock'}>
          <Typography variant="h6" className={`titleNavbarWrap ${classes.title}`}>
            <NavLink className={`titleNavbar ${classes.navLink} ${classes.titleNavbarUI}`} to="/">React + Typescript</NavLink>
          </Typography>
          <NavLink style={ {fontWeight: 'normal', margin: '0px 5px'} } className={classes.navLink} to="/chat"><Button className={classes.navbarButtons} color="inherit">Chat</Button></NavLink>
          <NavLink style={ {fontWeight: 'normal', margin: '0px 5px'} } className={classes.navLink} to="/cryptoCurrencies"><Button className={classes.navbarButtons} color="inherit">Crypto currencies</Button></NavLink>
          <NavLink style={ {fontWeight: 'normal', margin: '0px 5px'} } className={classes.navLink} to="/"><Button className={classes.navbarButtons} color="inherit">Todolist</Button></NavLink>
          <NavLink style={ {fontWeight: 'normal', margin: '0px 5px'} } className={classes.navLink} to="/about"><Button className={classes.navbarButtons} color="inherit">Information</Button></NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
})

export default Navbar;


