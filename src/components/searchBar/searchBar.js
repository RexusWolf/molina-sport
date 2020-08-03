import React, { useState } from 'react';
import { Input } from '@material-ui/core';

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState('')

  return (
    <div>
      <Input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} ></Input>
      <p>Resultados para: {searchValue}</p>
    </div>
  );
}