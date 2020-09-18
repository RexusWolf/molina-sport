import { Button, FormControl } from '@material-ui/core';
import React, { ChangeEvent } from 'react';
import { Product } from '../../store/types/Product';

interface ProductCreatorProps {
  addProduct(product: Product): void;
}

export const ProductCreator: React.FC<ProductCreatorProps> = ({
  addProduct,
}) => {
  const [productName, setProductName] = React.useState('');
  const [productImg, setProductImg] = React.useState('');
  const [productDescription, setProductDescription] = React.useState('');

  const updateProductName = (event: ChangeEvent<HTMLInputElement>) => {
    setProductName(event.target.value);
  };
  const updateProductImg = (event: ChangeEvent<HTMLInputElement>) => {
    setProductImg(event.target.value);
  };
  const updateProductDescription = (event: ChangeEvent<HTMLInputElement>) => {
    setProductDescription(event.target.value);
  };

  const onAddProductClick = () => {
    const product: Product = {
      productName: productName,
      productImg: productImg,
      productDescription: productDescription,
      productPrice: 22,
    };
    addProduct(product);
    setProductDescription('');
    setProductImg('');
    setProductName('');
  };

  return (
    <FormControl>
      <input onChange={updateProductName} name="productName" />
      <input onChange={updateProductImg} name="productImg" />
      <input onChange={updateProductDescription} name="productDescription" />
      <Button variant="contained" onClick={onAddProductClick} type="submit">
        ADD PRODUCT
      </Button>
    </FormControl>
  );
};
