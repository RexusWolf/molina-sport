import React, { useState, useContext } from 'react';
import { CatalogItem } from '../../components/catalogItem/catalogItem';
import { SearchBar } from '../../components/searchBar/searchBar';

import { ProductContext } from '../../hooks/context/ProductContext';
import { Grid, Container } from '@material-ui/core';

const catalogContainer = {
  padding: '20px',
}

const searchContainer = {
  padding: '10px',
}

export default function Catalog() {
  const [searchValue, setSearchValue] = useState('')

  const products = useContext(ProductContext);
  let filteredproducts = products.filter((product) => {
    return product.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
  })

  return (
    <Container style={catalogContainer}>
      <Grid style={searchContainer} alignItems="center" container item spacing={2}>
        <Grid item xs={12} sm={6}>
          <SearchBar onChange={(value: string) => setSearchValue(value)}></SearchBar>
        </Grid>
        <Grid item xs={12} sm={6}>
          Resultados para: {searchValue}
        </Grid>
      </Grid>
      <Grid container item spacing={3}>
        {filteredproducts.map((product) => {
          return <Grid item xs={12} sm={6} md={3}>
            <CatalogItem productName={product.name} productPrice={product.price} productDescription={product.description} productImg={product.image}></CatalogItem>
          </Grid>
        })}
      </Grid>
    </Container>);
}