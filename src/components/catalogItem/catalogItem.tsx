import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

interface CardProps {
  productName: string
  productImg: string
  productDescription: string
  productPrice: number
}

export const CatalogItem: React.FC<CardProps> = ({ productName, productImg, productDescription, productPrice }) => (
  <Card>
    <CardActionArea>
      <CardMedia
        component="img"
        height="320"
        image={productImg}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2" data-testid="item-name">
          {productName}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" data-testid="item-description">
          {productDescription}
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
          <Typography variant="h4" data-testid="item-price">{productPrice}€</Typography>
        </Grid>
      </Grid>
    </CardActions>
  </Card >
);