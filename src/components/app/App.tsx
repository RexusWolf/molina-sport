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

function App() {

  return (
    <Router>
      <div className="App">
        <AppBar></AppBar>
        <div className="App-content">
          <Switch>
            <Route path="/catalogo">
              <Catalog />
            </Route>
            <Route path="/info">
              <About />
            </Route>
          </Switch>
        </div>
      </div >
    </Router>
  );
}

export default App;
