import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './appBar.css'
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {

  return (
    <div data-testid="appbar">
      <AppBar position="static">
        <Toolbar>

          <Link to="/catalog">
            <Button color="inherit">Catálogo</Button>
          </Link>
          <Typography variant="h6" className="title">
            NEUMÁTICOS MOLINA SPORT
          </Typography>
          <Link to="/about">
            <Button color="inherit">About</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}