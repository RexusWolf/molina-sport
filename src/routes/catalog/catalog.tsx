import React, { useState } from 'react';
import { CatalogItem } from '../../components/catalogItem/catalogItem';
import { SearchBar } from '../../components/searchBar/searchBar';
import { Grid, Typography } from '@material-ui/core';
import { ProductCreator } from '../../components/ProductCreator';
import { useDispatch } from 'react-redux';
import { Product } from '../../store/types/Product';
import { ADD_PRODUCT } from '../../store/types/actions';
import { useTypedSelector } from '../../store/reducers/rootReducer';

const catalogContainer = {
  padding: '20px',
};

const searchContainer = {
  padding: '10px',
};

export default function Catalog() {
  const products = useTypedSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const addProduct = (product: Product) => {
    dispatch({ type: ADD_PRODUCT, payload: product });
  };

  const [searchValue, setSearchValue] = useState('');

  const filteredProducts = (products: Product[]): Product[] => {
    let newProducts = products.filter((product: Product) => {
      return (
        product.productName.toLowerCase().indexOf(searchValue.toLowerCase()) !==
        -1
      );
    });
    return newProducts;
  };

  return (
    <Grid container style={catalogContainer}>
      <Grid item md={4} sm={12}>
        <ProductCreator addProduct={addProduct} />
      </Grid>
      <Grid item md={8} sm={12}>
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
              Se han encontrado {filteredProducts(products).length} resultados
              para: {searchValue}
            </Typography>
          </Grid>
        </Grid>
        <Grid container item spacing={3}>
          {filteredProducts(products).map((product) => {
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
      </Grid>
    </Grid>
  );
}
