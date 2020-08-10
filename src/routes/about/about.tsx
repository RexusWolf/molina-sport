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
  {
    morning: [9, 14], evening: [16, 21]
  },
  { morning: [9, 14], evening: [16, 21] },
  { morning: [9, 14], evening: [16, 21] },
  { morning: [9, 14], evening: [16, 21] },
  { morning: [9, 14], evening: [16, 21] },
  { morning: [9, 14], evening: [16, 21] },
]

type Shifts = "morning" | "evening";

function getCurrentTime(): number {
  const currentDate: Date = new Date();
  let hour: number = currentDate.getHours();
  let minutes: number = currentDate.getMinutes();
  let currentTime: number = hour + minutes / 100;
  return currentTime;
}

function getShift(): Shifts {
  let currentTime: number = getCurrentTime();
  if (currentTime < 14)
    return "morning";
  return "evening";
}

function checkifOpen(): boolean {
  let currentTime: number = getCurrentTime();
  let shift: Shifts = getShift()
  let day = new Date().getDay();
  if (currentTime >= openHours[day][shift][0] && currentTime <= openHours[day][shift][1])
    return true;
  return false;
};

export default function About() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(true);

  const isOpen: boolean = checkifOpen();
  const shift: Shifts = getShift();

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
                    <ListItemText primary={shift === "morning" ? '9:00-14:00' : '17:00-20:30'} secondary={shift === "morning" ? '17:00-20:30' : '9:00-14:00'} />
                  </Grid>
                </Grid>
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Grid>
    </Grid >);
}