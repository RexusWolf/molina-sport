import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { makeStyles, createStyles, Theme, Box } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flexGrow: 1,
    },
    link: {
      textDecoration: 'none',
      flexGrow: 0.5,
    },
    navBar: {
      background: 'linear-gradient(to right, #0f0c29, #302b63, #24243e)',
    },
    font: {
      fontFamily: 'OPTIEdgar',
    },
  }),
);

export const NavBar: React.FC = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.navBar} position="static">
      <Toolbar>
        <Link to="/catalogo" className={classes.link}>
          <Button color="secondary"><Typography className={classes.font}>Catálogo</Typography></Button>
        </Link>
        <Box className={classes.title}
          display={{ xs: "none", md: "block" }}>
          <Link to="/" className={classes.link}>
            <Typography className={classes.font} color="secondary" variant="h5">
              NEUMÁTICOS MOLINA SPORT
          </Typography>
          </Link>
        </Box>
        <Link to="/info" className={classes.link}>
          <Button color="secondary"><Typography className={classes.font}>Información</Typography></Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}