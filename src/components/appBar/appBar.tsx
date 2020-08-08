import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './appBar.css'

export default function ButtonAppBar() {

  return (
    <div data-testid="appbar">
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">Catálogo</Button>
          <Typography variant="h6" className="title">
            NEUMÁTICOS MOLINA SPORT
          </Typography>
          <Button color="inherit">About</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}