import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import landing1 from "../../images/landing1.jfif"
import landing2 from "../../images/landing2.jfif"
import landing3 from "../../images/landing3.jfif"
import landing4 from "../../images/landing4.jfif"
import {Link,Switch,BrowserRouter,Route} from 'react-router-dom'
import useStyles from './styles'
import TodoList from '../Todo/TodoList'


const Home = () => {
  const classes=useStyles();
  return (
    <BrowserRouter>
    <div>
    <Grow in className={classes.root}>
      <Container className={classes.imageHolder}>
        <div className={classes.FirstLine}>
        
        <Link to="/meetups"> <img className="rounded-circle circleI" width="100" height="100" src={landing1} alt="meetups"/> </Link>
       
        <Link to="/messaging"><img className="rounded-circle circleI" width="100" height="100" src={landing2} alt="Messaging"/></Link>
        </div>
        <div className={classes.secondLine}>
        <Link to="/pomodoro"><img className="rounded-circle circleI" width="100" height="100" src={landing3} alt="Messaging"/></Link>
        <Link to="/todo"><img className="rounded-circle circleI" width="100" height="100" src={landing4} alt="todo"/></Link>
        </div>
      </Container>
    </Grow>
    </div>
    <Switch>
  <Route exact path="/todo">
   <TodoList/>
  </Route>
    </Switch>
    </BrowserRouter>
  );
};

export default Home;