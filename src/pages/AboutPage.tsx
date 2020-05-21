import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {teal} from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  buttonBack: {
    backgroundColor: teal[400],
    color: '#fff', 
    '&:hover': {
      backgroundColor: teal[600],
    },   
  }
}));


type PropsType = {}


const AboutPage: React.FC<PropsType> = (props) => {
  const classes = useStyles();

  return (
    <div className="mainWrap">
      <h1 className="h1">Information page</h1>
      <p>
        The Combo App is a project that essentially combines several 
        different applications in which you can record all the important 
        things (and they will be saved), study the level of cryptocurrency 
        and chat. Todolist will also allow you to effectively organize 
        your work hours. You can record everything in it: from the shopping 
        list to important business meetings. This project is written on modern 
        technologies: React, Redux, Typescript, Material-UI. Welcome! :)
        <br/>
        (Nuance: all sections will work if you download the project from github, this problem will be solved soon)
      </p>
      <NavLink to="/">
        <Button className={classes.buttonBack} variant="contained">
          Back to list things
        </Button>
      </NavLink>
    </div>
  );
}

export default AboutPage;


