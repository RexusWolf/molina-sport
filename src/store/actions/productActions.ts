import { Product } from '../types/Product';
import { ADD_PRODUCT, DELETE_PRODUCT } from '../types/actions';

export const addProduct = (product: Product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

export const deleteProduct = (product: Product) => {
  return {
    type: DELETE_PRODUCT,
    payload: product,
  };
};
