import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './appBar.css'
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
  const linkStyle = {
    textDecoration: 'none',
  }

  return (
    <div data-testid="appbar">
      <AppBar position="static">
        <Toolbar>
          <Link to="/catalogo" style={linkStyle}>
            <Button color="secondary">Catálogo</Button>
          </Link>
          <Typography variant="h5" className="title">
            NEUMÁTICOS MOLINA SPORT
          </Typography>
          <Link to="/info" style={linkStyle}>
            <Button color="secondary">Información</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}