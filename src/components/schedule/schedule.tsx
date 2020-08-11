import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Grid, List, ListSubheader, ListItem, ListItemIcon, Typography } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nested: {
      paddingLeft: theme.spacing(8),
    },
    dayGrid: {
      width: '100px',
    }
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

function getFormattedHours(openHoursArray: Array<number>) {
  let fixedOpenHoursArray = openHoursArray.map((hour) => hour.toFixed(2));
  let hoursOpenString = fixedOpenHoursArray.toString()
  let formattedHoursOpen = hoursOpenString.replace(/,/g, "-").replace(/\./g, ":");
  return formattedHoursOpen;
}

function getOpenHours(): Array<number> {
  let day = new Date().getDay()
  let shift: Shift = getShift();
  let openHoursArray = openHours[day][shift];
  return openHoursArray;
}

function checkIfOpen(): boolean {
  let currentTime: number = getCurrentTime();
  let shift: Shift = getShift()
  let day = new Date().getDay();
  if (currentTime >= openHours[day][shift][0] && currentTime <= openHours[day][shift][1])
    return true;
  return false;
};

export const Schedule: React.FC = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(true);

  const isOpen: boolean = checkIfOpen();
  const shift: Shift = getShift();
  const currentOpenHours: Array<number> = getOpenHours();
  const closeHourToday: string = currentOpenHours[1].toFixed(2).toString();

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
    >
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <AccessTimeIcon />
        </ListItemIcon>

        <ListItemText primary={isOpen ? ('Abierto ⋅ Cierra a las '.concat(closeHourToday)) : 'Cerrado ahora'} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {openHours.map((openHour) => {
            return <ListItem button className={classes.nested}>
              <Grid container spacing={4}>
                <Grid className={classes.dayGrid} item><ListItemText primary={openHour.day} /></Grid>
                <Grid item>
                  <ListItemText primary={shift === "morning" ? (getFormattedHours(openHour.morning)) : (getFormattedHours(openHour.evening))} secondary={shift === "morning" ? getFormattedHours((openHour.evening)) : getFormattedHours((openHour.morning))} />
                </Grid>
              </Grid>
            </ListItem>
          })}
        </List>
      </Collapse>
    </List >);
}