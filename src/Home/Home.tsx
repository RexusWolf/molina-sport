import React from 'react';
import { makeStyles, Theme, createStyles, Grid, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
      background: 'linear-gradient(to right, #000000, #303030)',
      color: 'white',
      "&:hover": {
        background: 'linear-gradient(to right, #303030, #525252)'
      },
    },
    infoButton: {
      background: 'linear-gradient(to right, #c97000, #e8a200)',
      color: 'black',
      "&:hover": {
        background: 'linear-gradient(to right, #e8a200, #ffb200)',
      }
    }
  }),
);

export default function Home() {
  const classes = useStyles();

  return (
    <Grid item container alignItems="center" justify="space-around">
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