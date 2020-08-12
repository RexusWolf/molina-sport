import React from 'react';
import './App.css';
import { NavBar } from '../navBar/navBar';
import Catalog from '../../routes/catalog'
import About from '../../routes/about'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from '../../routes/home';
import { Grid } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Router>
        <Grid container>
          <Grid item xs={12} className="App-bar">
            <NavBar></NavBar>
          </Grid>
          <Grid item className="App-content" xs={12}>
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
