import React from 'react';
import { TextField, withStyles } from '@material-ui/core';

interface SearchProps {
  onChange: any;
}

const inputProps = {
  style: {
    color: "white",
  }
};

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'yellow',
    },
    '& .MuiInputBase-root': {
      color: 'white',
    },
    '& .MuiInputBase-root:before': {
      color: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'yellow',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'yellow',
      },
    },
  },
})(TextField);

export const SearchBar: React.FC<SearchProps> = ({ onChange }) => (
  <CssTextField fullWidth variant="outlined" inputProps={inputProps} label="Buscador" margin="dense" InputLabelProps={inputProps} onChange={(event) => onChange(event.target.value)} />
);