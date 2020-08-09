import React, { useState, useContext } from 'react';
import { CatalogItem } from '../../components/catalogItem/catalogItem';
import { SearchBar } from '../../components/searchBar/searchBar';

import { ProductContext } from '../../hooks/context/ProductContext';
import { Grid } from '@material-ui/core';

import './catalog.css'


export default function Catalog() {
  const [searchValue, setSearchValue] = useState('')

  const products = useContext(ProductContext);
  let filteredproducts = products.filter((product) => {
    return product.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
  })
  return (
    <div className="catalogContainer">
      <SearchBar onChange={(value: string) => setSearchValue(value)}></SearchBar>
      <p>Resultados para: {searchValue}</p>
      <Grid container spacing={3}>
        {filteredproducts.map((product) => {
          return <Grid item xs={12} sm={6} md={3}>
            <CatalogItem productName={product.name} productPrice={product.price} productDescription={product.description} productImg={product.image}></CatalogItem>
          </Grid>
        })}
      </Grid>
    </div>);
}