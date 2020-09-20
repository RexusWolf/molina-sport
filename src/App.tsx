import React from 'react';

import { NavBar } from './shared/NavBar';
import Catalog from './Catalog';
import About from './About';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
    },
  })
);

const Routers = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/catalogo" exact component={Catalog} />
    <Route path="/info" exact component={About} />
  </Switch>
);
function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Router>
          <Grid item xs={12} className={classes.navbar}>
            <NavBar />
          </Grid>
          <Grid item className={classes.content} xs={12}>
            <Routers />
          </Grid>
        </Router>
      </Grid>
    </div>
  );
}

export default App;
