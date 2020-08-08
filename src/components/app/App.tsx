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
        <header className="App-header">
          <Switch>
            <Route path="/catalog">
              <Catalog />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </header>
      </div >
    </Router>
  );
}

export default App;
