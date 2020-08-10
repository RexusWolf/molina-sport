import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Grid, List, ListSubheader, ListItem, ListItemIcon, Typography } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Taller from '../../images/taller.jpg'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 560,
    },
    nested: {
      paddingLeft: theme.spacing(8),
    },
  }),
);

const openHours = [
  { morning: [9, 14], evening: [16, 21] },
  { morning: [9, 14], evening: [16, 21] },
  { morning: [9, 14], evening: [16, 21] },
  { morning: [9, 14], evening: [16, 21] },
  { morning: [9, 14], evening: [16, 21] },
  { morning: [9, 14], evening: [16, 21] },
  { morning: [9, 14], evening: [16, 21] },
]

function checkifOpen(): boolean {
  const currentDate: Date = new Date();
  let currentDay: number = currentDate.getDay();
  let hour: number = currentDate.getHours();

  if (hour >= openHours[currentDay].morning[0] && hour <= openHours[currentDay].morning[1])
    return true;

  if (hour >= openHours[currentDay].evening[0] && hour <= openHours[currentDay].evening[1])
    return true;

  return false;
};

export default function About() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(true);

  const isOpen: boolean = checkifOpen();

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Grid container alignItems="center" justify="space-around">
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
        <List
          component="nav"
          subheader={
            <ListSubheader>
              Horario
            </ListSubheader>
          }
          className={classes.root}
        >
          <ListItem button onClick={handleClick}>
            <ListItemIcon>
              <AccessTimeIcon />
            </ListItemIcon>

            <ListItemText primary={isOpen ? 'Abierto ahora' : 'Cerrado ahora'} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <Grid container justify="flex-start" spacing={8}>
                  <Grid item>
                    <ListItemText primary="Lunes" />
                  </Grid>
                  <Grid item>
                    <ListItemText primary="9:00-14:00" secondary="17:00-20:30" />
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem button className={classes.nested}>
                <Grid container justify="flex-start" spacing={7}>
                  <Grid item>
                    <ListItemText primary="Martes" />
                  </Grid>
                  <Grid item>
                    <ListItemText primary="9:00-14:00" secondary="17:00-20:30" />
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem button className={classes.nested}>
                <Grid container justify="flex-start" spacing={5}>
                  <Grid item>
                    <ListItemText primary="Miércoles" />
                  </Grid>
                  <Grid item>
                    <ListItemText primary="9:00-14:00" secondary="17:00-20:30" />
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem button className={classes.nested}>
                <Grid container justify="flex-start" spacing={8}>
                  <Grid item>
                    <ListItemText primary="Jueves" />
                  </Grid>
                  <Grid item>
                    <ListItemText primary="9:00-14:00" secondary="17:00-20:30" />
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem button className={classes.nested}>
                <Grid container justify="flex-start" spacing={8}>
                  <Grid item>
                    <ListItemText primary="Viernes" />
                  </Grid>
                  <Grid item>
                    <ListItemText primary="9:00-14:00" secondary="17:00-20:30" />
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem button className={classes.nested}>
                <Grid container justify="flex-start" spacing={8}>
                  <Grid item>
                    <ListItemText primary="Sábado" />
                  </Grid>
                  <Grid item>
                    <ListItemText primary="9:00-14:00" secondary="17:00-20:30" />
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem button className={classes.nested}>
                <Grid container justify="flex-start" spacing={7}>
                  <Grid item>
                    <ListItemText primary="Domingo" />
                  </Grid>
                  <Grid item>
                    <ListItemText primary="9:00-14:00" secondary="17:00-20:30" />
                  </Grid>
                </Grid>
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Grid>
    </Grid >);
}