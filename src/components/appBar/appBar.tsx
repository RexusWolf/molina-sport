import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './appBar.css'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
});

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div data-testid="appbar" className="appbar-style">
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">Catálogo</Button>
          <Typography variant="h6" className={classes.title}>
            NEUMÁTICOS MOLINA SPORT
          </Typography>
          <Button color="inherit">About</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}