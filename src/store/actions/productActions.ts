import { Product } from '../types/Product';
import { ADD_PRODUCT, DELETE_PRODUCT, ProductAction } from '../types/actions';

export const addProduct = (product: Product): ProductAction => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

export const deleteProduct = (product: Product): ProductAction => {
  return {
    type: DELETE_PRODUCT,
    payload: product,
  };
};
