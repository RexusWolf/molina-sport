import React from 'react';
import './App.css';
import AppBar from '../appBar/appBar';
import Catalog from '../../routes/catalog'
import About from '../../routes/about'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from '../../routes/home';

function App() {

  return (
    <Router>
      <div className="App">
        <AppBar></AppBar>
        <div className="App-content">
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
        </div>
      </div >
    </Router>
  );
}

export default App;
