import React, { useContext } from 'react';
import CatalogItem from '../../components/autoCard/autoCard';
import SearchBar from '../../components/searchBar/searchBar';

import { ProductContext } from '../../context/ProductContext';

export default function Catalog() {
  const products = useContext(ProductContext);

  return (
    <div>
      <SearchBar></SearchBar>
      <CatalogItem productName={products[0].name} productPrice={products[0].price} productDescription={products[0].description} productImg={products[0].image}></CatalogItem>
    </div>);
}