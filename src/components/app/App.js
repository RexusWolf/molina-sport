import React, { useContext } from 'react';
import './App.css';
import AppBar from '../appBar';
import CatalogItem from '../autoCard';
import SearchBar from '../searchBar/searchBar';
import { ProductContext } from '../context/ProductContext';



function App() {
  const products = useContext(ProductContext);

  return (
    <div className="App">
      <AppBar></AppBar>
      <header className="App-header">
        <SearchBar></SearchBar>
        <CatalogItem productName={products[0].name} productPrice={products[0].price} productDescription={products[0].description} productImg={products[0].image}></CatalogItem>
      </header>
    </div >
  );
}

export default App;
