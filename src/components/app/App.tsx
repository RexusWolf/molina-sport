import React from 'react';
import { NavBar } from '../navBar/navBar';
import Catalog from '../../routes/catalog'
import About from '../../routes/about'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from '../../routes/home';
import { Grid, makeStyles, createStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
    },
    navbar: {
      minHeight: '7vh',
    },
    content: {
      display: 'flex',
      height: '93vh',
    }
  }),
);

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Router>
        <Grid container>
          <Grid item xs={12} className={classes.navbar}>
            <NavBar></NavBar>
          </Grid>
          <Grid item className={classes.content} xs={12}>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/catalogo" exact>
                <Catalog />
              </Route>
              <Route path="/info" exact>
                <About />
              </Route>
            </Switch>
          </Grid>
        </Grid>
      </Router>
    </div >
  );
}

export default App;
