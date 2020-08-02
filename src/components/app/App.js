import React from 'react';
import './App.css';
import CatalogItem from '../autoCard';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CatalogItem productName="Llantas de acero" productPrice="38,9" productDescription="Llanta de chapa compatible con: Seat Cordoba (2002 - 2008) ; Seat Ibiza (07/2008 - 06/2017) " productImg="https://img4-pneusonlinesuiss.netdna-ssl.com/produit/jante/250/face/jante-tole_noir.jpg"></CatalogItem>
      </header>
    </div >
  );
}

export default App;
