import React from 'react';
import { makeStyles, Theme, createStyles, Grid, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      height: 320,
      width: 540,
    },
    link: {
      textDecoration: 'none',
    },
    catalogButton: {
      backgroundColor: theme.palette.primary.main,
      color: 'white',
    },
    infoButton: {
      backgroundColor: theme.palette.secondary.main,
    }
  }),
);

export default function Home() {
  const classes = useStyles();

  return (
    <Grid item container alignItems="center" justify="space-around">
      <Grid item xs={5}>
        <Link className={classes.link} to="/catalogo">
          <Button variant="outlined" className={`${classes.button} ${classes.catalogButton}`} >
            <Typography variant="h6">CATÁLOGO</Typography>
          </Button>
        </Link>
      </Grid>
      <Grid item xs={5}>
        <Link className={classes.link} to="/info">
          <Button variant="outlined" className={`${classes.button} ${classes.infoButton}`} >
            <Typography variant="h6">INFORMACIÓN</Typography>
          </Button>
        </Link>
      </Grid>
    </Grid >
  );
}