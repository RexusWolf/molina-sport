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
  productName: string;
  productImg: string;
  productDescription: string;
  productPrice: number;
}

const cardStyle = {
  height: '520px',
};

const cardInfoStyle = {
  height: '120px',
};

export const CatalogItem: React.FC<CardProps> = ({
  productName,
  productImg,
  productDescription,
  productPrice,
}) => (
  <Card variant="elevation" elevation={8} style={cardStyle}>
    <CardActionArea>
      <CardMedia
        height="300px"
        data-testid="item-img"
        component="img"
        image={productImg}
      />
      <CardContent style={cardInfoStyle}>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          data-testid="item-name"
        >
          {productName}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          data-testid="item-description"
        >
          {productDescription}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Button size="large" color="primary">
            Ver producto
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h4" data-testid="item-price">
            {productPrice}€
          </Typography>
        </Grid>
      </Grid>
    </CardActions>
  </Card>
);
