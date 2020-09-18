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
  const [productPrice, setProductPrice] = React.useState(0);

  const updateProductName = (event: ChangeEvent<HTMLInputElement>) => {
    setProductName(event.target.value);
  };
  const updateProductImg = (event: ChangeEvent<HTMLInputElement>) => {
    setProductImg(event.target.value);
  };
  const updateProductDescription = (event: ChangeEvent<HTMLInputElement>) => {
    setProductDescription(event.target.value);
  };
  const updateProductPrice = (event: ChangeEvent<HTMLInputElement>) => {
    setProductPrice(parseInt(event.target.value));
  };

  const onAddProductClick = () => {
    const product: Product = {
      productName: productName,
      productImg: productImg,
      productDescription: productDescription,
      productPrice: productPrice,
    };
    addProduct(product);
    setProductDescription('');
    setProductImg('');
    setProductName('');
    setProductPrice(0);
  };

  return (
    <FormControl>
      <input
        placeholder="Name"
        onChange={updateProductName}
        name="productName"
      />
      <input placeholder="Img" onChange={updateProductImg} name="productImg" />
      <input
        placeholder="Description"
        onChange={updateProductDescription}
        name="productDescription"
      />
      <input
        placeholder="Price"
        onChange={updateProductPrice}
        name="productPrice"
      />
      <Button variant="contained" onClick={onAddProductClick} type="submit">
        ADD PRODUCT
      </Button>
    </FormControl>
  );
};
