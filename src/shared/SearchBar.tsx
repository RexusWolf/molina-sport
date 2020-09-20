import React from 'react';
import { TextField, withStyles } from '@material-ui/core';

interface SearchProps {
  onChange: any;
}

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'indigo',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'indigo',
      },
      '&:hover fieldset': {
        borderColor: 'blue',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'indigo',
      },
    },
  },
})(TextField);

export const SearchBar: React.FC<SearchProps> = ({ onChange }) => (
  <CssTextField
    fullWidth
    variant="outlined"
    label="Buscador"
    margin="dense"
    onChange={(event) => onChange(event.target.value)}
  />
);
