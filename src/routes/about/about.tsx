import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import Taller from '../../images/taller.jpg'
import { Schedule } from '../../components/schedule'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 560,
    },
    grids: {
      height: '100%',
    },
    infogrid: {
      backgroundColor: '#000000',
    },
  }),
);

export default function About() {
  const classes = useStyles();

  return (
    <Grid className={classes.grids} container alignItems="center" justify="space-around">
      <Grid item xs={6}>
        <img alt="Taller1" height="420" src={Taller}></img>
        <img alt="Taller2" height="420" src={Taller}></img>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h4">Calle Ronda de Andújar, 2
        </Typography>
        <Typography variant="h4">14002, Córdoba
        </Typography>
        <Typography variant="h4">957 26 47 05</Typography>
        <Schedule></Schedule>
      </Grid>
    </Grid >);
}