import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@material-ui/core';
import { Product } from '../../store/types/Product';

interface Props {
  addProduct(product: Product): void;
}

export const ProductCreator: React.FC<Props> = ({ addProduct }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (product: Product) => {
    addProduct(product);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input ref={register} placeholder="Name" name="productName" />
      <input ref={register} placeholder="Img" name="productImg" />
      <input
        ref={register}
        placeholder="Description"
        name="productDescription"
      />
      <input ref={register} placeholder="Price" name="productPrice" />
      <Button variant="contained" type="submit">
        ADD PRODUCT
      </Button>
    </form>
  );
};
