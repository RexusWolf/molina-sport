import React, { useState } from 'react';
import { CatalogItem } from '../../components/catalogItem/catalogItem';
import { SearchBar } from '../../components/searchBar/searchBar';
import { Grid, Container, Typography } from '@material-ui/core';
import { ProductCreator } from '../../components/ProductCreator';
import { useDispatch, useSelector } from 'react-redux';
import { Product, ProductsState } from '../../store/types/Product';
import { ADD_PRODUCT } from '../../store/types/actions';

const catalogContainer = {
  padding: '20px',
};

const searchContainer = {
  padding: '10px',
};

export default function Catalog() {
  const products = useSelector<ProductsState, ProductsState['products']>(
    (state) => state.products
  );
  const dispatch = useDispatch();

  const addProduct = (product: Product) => {
    dispatch({ type: ADD_PRODUCT, payload: product });
  };

  const [searchValue, setSearchValue] = useState('');

  let filteredproducts = products.filter((product: Product) => {
    return (
      product.productName.toLowerCase().indexOf(searchValue.toLowerCase()) !==
      -1
    );
  });

  return (
    <Container style={catalogContainer}>
      <ProductCreator addProduct={addProduct} />
      <Grid
        style={searchContainer}
        alignItems="center"
        justify="flex-start"
        container
        item
        spacing={2}
      >
        <Grid item xs={12} sm={6}>
          <SearchBar
            onChange={(value: string) => setSearchValue(value)}
          ></SearchBar>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography align="left">
            Se han encontrado {filteredproducts.length} resultados para:{' '}
            {searchValue}
          </Typography>
        </Grid>
      </Grid>
      <Grid container item spacing={3}>
        {filteredproducts.map((product) => {
          return (
            <Grid item xs={12} sm={6} md={3}>
              <CatalogItem
                productName={product.productName}
                productPrice={product.productPrice}
                productDescription={product.productDescription}
                productImg={product.productImg}
              ></CatalogItem>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
