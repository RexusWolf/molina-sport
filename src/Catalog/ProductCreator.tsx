import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
import { Product } from '../store/types/Product';

interface Props {
  addProduct(product: Product): void;
}

const formStyle = {
  display: 'flex',
  alignItems: 'center',
  height: '390px',
  width: '320px',
};

export const ProductCreator: React.FC<Props> = ({ addProduct }) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (product: Product) => {
    addProduct(product);
  };

  return (
    <Paper variant="outlined" style={formStyle}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <Typography variant="h4">Product Creator</Typography>
          </Grid>
          <Grid item md={12}>
            <TextField
              inputRef={register({
                required: 'Name is required',
                maxLength: {
                  value: 64,
                  message: 'Name must have less than 64 characters',
                },
              })}
              error={errors.productName}
              placeholder="Name"
              name="productName"
            />
            {errors.productName && (
              <Typography>{errors.productName.message}</Typography>
            )}
          </Grid>
          <Grid item md={12}>
            <TextField
              inputRef={register({
                required: 'Image is required',
                maxLength: {
                  value: 512,
                  message: 'Description must have less than 512 characters',
                },
              })}
              placeholder="Img"
              name="productImg"
              error={!!errors.productImg}
            />
            {errors.productImg && (
              <Typography>{errors.productImg.message}</Typography>
            )}
          </Grid>
          <Grid item md={12}>
            <TextField
              inputRef={register({
                required: 'Description is required',
                maxLength: {
                  value: 512,
                  message: 'Description must have less than 512 characters',
                },
              })}
              placeholder="Description"
              name="productDescription"
              error={errors.productDescription}
            />
            {errors.productDescription && (
              <Typography>{errors.productDescription.message}</Typography>
            )}
          </Grid>
          <Grid item md={12}>
            <TextField
              inputRef={register({
                required: 'Price is required',
                maxLength: {
                  value: 8,
                  message: 'Price must have less than 8 characters',
                },
              })}
              placeholder="Price"
              name="productPrice"
              error={!!errors.productPrice}
            />
            {errors.productPrice && (
              <Typography>{errors.productPrice.message}</Typography>
            )}
          </Grid>
          <Grid item md={12}>
            <Button color="primary" variant="contained" type="submit">
              ADD PRODUCT
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};
