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
    grids: {
      height: '100%',
    },
    infogrid: {
      backgroundColor: '#000000',
    },
  }),
);

const openHours = [
  { day: "Domingo", morning: [0, 0], evening: [0, 0] },
  { day: "Lunes", morning: [9.00, 14.00], evening: [17.00, 20.30] },
  {
    day: "Martes", morning: [9.00, 14.00], evening: [17.00, 20.30]
  },
  { day: "Miércoles", morning: [9.00, 14.00], evening: [17.00, 20.30] },
  { day: "Jueves", morning: [9.00, 14.00], evening: [17.00, 20.30] },
  { day: "Viernes", morning: [9.00, 14.00], evening: [17.00, 20.30] },
  { day: "Sábado", morning: [9.00, 13.30], evening: [0, 0] },
]

type Shift = "morning" | "evening";

function getCurrentTime(): number {
  let currentDate: Date = new Date();
  let hour: number = currentDate.getHours();
  let minutes: number = currentDate.getMinutes();
  let currentTime: number = hour + minutes / 100;
  return currentTime;
}

function getShift(): Shift {
  let currentTime: number = getCurrentTime();
  if (currentTime < 14)
    return "morning";
  return "evening";
}

function getDayName(): string {
  let currentDate: Date = new Date();
  let dayValue: number = currentDate.getDay();
  return openHours[dayValue].day;
}

function getFormattedHours(openHoursArray: Array<number>) {
  let fixedOpenHoursArray = openHoursArray.map((hour) => hour.toFixed(2));
  let hoursOpenString = fixedOpenHoursArray.toString()
  let formattedHoursOpen = hoursOpenString.replace(/,/g, "-").replace(/\./g, ":");
  return formattedHoursOpen;
}

function getOpenHoursInDayShift(): string {
  let day = new Date().getDay()
  let shift: Shift = getShift();
  let openHoursArray = openHours[day][shift];
  return getFormattedHours(openHoursArray);
}

function checkIfOpen(): boolean {
  let currentTime: number = getCurrentTime();
  let shift: Shift = getShift()
  let day = new Date().getDay();
  if (currentTime >= openHours[day][shift][0] && currentTime <= openHours[day][shift][1])
    return true;
  return false;
};

export default function About() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(true);

  const isOpen: boolean = checkIfOpen();
  const shift: Shift = getShift();
  const dayName: string = getDayName();
  const currentOpenHours: string = getOpenHoursInDayShift();
  const getShiftInfo: string = dayName.concat(" ").concat(currentOpenHours);

  const handleClick = () => {
    setOpen(!open);
  };

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

            <ListItemText primary={isOpen ? ('Abierto ahora, '.concat(getShiftInfo)) : 'Cerrado ahora'} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>

              {openHours.map((openHour) => {
                return <ListItem button className={classes.nested}>
                  <Grid container spacing={4}><Grid item><ListItemText primary={openHour.day} /></Grid>
                    <Grid item>
                      <ListItemText primary={shift === "morning" ? (getFormattedHours(openHour.morning)) : (getFormattedHours(openHour.evening))} secondary={shift === "morning" ? getFormattedHours((openHour.evening)) : getFormattedHours((openHour.morning))} />
                    </Grid>
                  </Grid>
                </ListItem>
              })}
            </List>
          </Collapse>
        </List>
      </Grid>
    </Grid >);
}