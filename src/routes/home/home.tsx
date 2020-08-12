import React from 'react';
import { makeStyles, Theme, createStyles, Grid, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: 'linear-gradient(to right, #ffd89b, #19547b)',
    },
    grid: {
      height: '100%',
    },
    button: {
      height: '100%',
      borderRadius: '0',
    },
    link: {
      textDecoration: 'none',
    },
    catalogButton: {
      background: 'linear-gradient(to right, #6441a4 , #730099)',
      color: 'white',
      "&:hover": {
        background: 'linear-gradient(to right, #9d50bb, #6e48aa)'
      }
    },
    infoButton: {
      background: 'linear-gradient(to right, #f7971e, #ffd200)',
      color: 'white',
      "&:hover": {
        background: 'linear-gradient(to right, #f2994a, #f2c94c)',
      }
    }
  }),
);

export default function Home() {
  const classes = useStyles();

  return (
    <Grid className={classes.root} item container alignItems="center" justify="space-around">
      <Grid className={classes.grid} item xs={12} sm={6}>
        <Link className={classes.link} to="/catalogo">
          <Button fullWidth className={`${classes.button} ${classes.catalogButton}`} >
            <Typography variant="h6">CATÁLOGO</Typography>
          </Button>
        </Link>
      </Grid>
      <Grid className={classes.grid} item xs={12} sm={6}>
        <Link className={classes.link} to="/info">
          <Button fullWidth className={`${classes.button} ${classes.infoButton}`} >
            <Typography variant="h6">INFORMACIÓN</Typography>
          </Button>
        </Link>
      </Grid>
    </Grid >
  );
}