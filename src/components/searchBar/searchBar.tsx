import React from 'react';
import { Input } from '@material-ui/core';


interface SearchProps {
  onChange: any;
}

export const SearchBar: React.FC<SearchProps> = ({ onChange }) => (
  <Input onChange={(event) => onChange(event.target.value)} ></Input>
);