import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function CatalogItem(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="320"
          image={props.productImg}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.productName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.productDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid container spacing={3}>
          <Grid item xs>
            <Button color="primary">
              Ver producto
            </Button>
          </Grid>
          <Grid item xs>
            <Typography variant="h4">{props.productPrice}€</Typography>
          </Grid>
        </Grid>
      </CardActions>
    </Card >
  );
}