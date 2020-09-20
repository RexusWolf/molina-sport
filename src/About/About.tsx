import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Taller from '../images/taller.jpg';
import {
  Grid,
  Typography,
  Paper,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  CardActionArea,
  Card,
} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import { Schedule } from './Schedule';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridsContainer: {
      height: 100,
      margin: 30,
    },
    grid: {
      padding: 10,
    },
    paper: {
      height: 130,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    media: {
      height: 320,
    },
    infogrid: {
      height: 120,
    },
  })
);

export default function About() {
  const classes = useStyles();

  return (
    <Grid className={classes.gridsContainer} container justify="space-between">
      <Grid
        className={classes.grid}
        item
        xs={12}
        sm={4}
        md={6}
        justify="center"
      >
        <Card>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={Taller}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Sobre el taller
              </Typography>
              <Typography variant="body1" component="p">
                Neumaticos Molina Sport es taller de venta y reparación de
                neumáticos y mantenimiento de vehículos. Pulido de faros con
                polímeros, carga, revisión y relleno de aire acondicionado,
                alineación de la dirección y muchos más servicios son los que se
                ofrecen en el taller.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="primary"
              target="_blank"
              href="https://www.google.com/maps/place/NEUMATICOS+MOLINA+SPORT/@37.886414,-4.7686941,15z/data=!4m2!3m1!1s0x0:0x1204212e50497ace?sa=X"
            >
              Ver ubicación
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid
        className={classes.grid}
        item
        container
        xs={12}
        sm={8}
        md={6}
        spacing={2}
      >
        <Grid item xs={6}>
          <Paper className={classes.paper} elevation={3}>
            <LocationOnIcon></LocationOnIcon>
            <Typography variant="h6">Dirección:</Typography>
            <Typography>
              Calle Ronda de Andújar, 2,<br></br>14002, Córdoba
            </Typography>
          </Paper>
        </Grid>
        <Grid className={classes.infogrid} item xs={6}>
          <Paper className={classes.paper} elevation={3}>
            <PhoneIcon></PhoneIcon>
            <Typography variant="h6">Teléfono:</Typography>
            <Typography>957 26 47 05</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Schedule></Schedule>
        </Grid>
      </Grid>
    </Grid>
  );
}
