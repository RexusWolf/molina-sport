import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Grid, Typography, Paper, Button, CardActions, CardContent, CardMedia, CardActionArea, Card } from '@material-ui/core';
import Taller from '../../images/taller.jpg'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import { Schedule } from '../../components/schedule'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grids: {
      height: 100,
      padding: 30,
    },
    paper: {
      height: 120,
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
    }
  }),
);

export default function About() {
  const classes = useStyles();

  return (
    <Grid className={classes.grids} container justify="space-around" spacing={2}>
      <Grid item xs={12} sm={4} md={6}>
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
                Neumaticos Molina Sport un el centro de montaje de neumáticos en Córdoba. Si desea enviarlo directamente a su taller, no es necesario que contacte con el taller de montaje, una vez entre en el apartado de pedidos podrá indicar el día y la hora en la que irá a montar sus neumáticos; automáticamente el taller escogido recibirá un correo electrónico informándole de la cita seleccionada
          </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" target="_blank" href="https://www.google.com/maps/place/NEUMATICOS+MOLINA+SPORT/@37.886414,-4.7686941,15z/data=!4m2!3m1!1s0x0:0x1204212e50497ace?sa=X">
              Ver ubicación
        </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item container xs={12} sm={8} md={6} spacing={2}>
        <Grid item xs={6}>
          <Paper className={classes.paper} elevation={3}><LocationOnIcon></LocationOnIcon>
            <Typography variant="h6">Dirección:</Typography><Typography>Calle Ronda de Andújar, 2,<br></br>14002, Córdoba</Typography>
          </Paper>
        </Grid>
        <Grid className={classes.infogrid} item xs={6}>
          <Paper className={classes.paper} elevation={3}><PhoneIcon></PhoneIcon>
            <Typography variant="h6">Teléfono:</Typography><Typography>957 26 47 05</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Schedule></Schedule>
        </Grid>
      </Grid>
    </Grid >);
}