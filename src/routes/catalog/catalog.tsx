import React, { useContext } from 'react';
import { CatalogItem } from '../../components/catalogItem/catalogItem';
import SearchBar from '../../components/searchBar/searchBar';

import { ProductContext } from '../../hooks/context/ProductContext';
import { Grid } from '@material-ui/core';

export default function Catalog() {
  const products = useContext(ProductContext);

  return (
    <div>
      <SearchBar></SearchBar>
      <Grid container spacing={2}>
        {products.map((product) => {
          return <Grid item xs={3}>
            <CatalogItem productName={product.name} productPrice={product.price} productDescription={product.description} productImg={product.image}></CatalogItem>
          </Grid>
        })}
      </Grid>
    </div>);
}