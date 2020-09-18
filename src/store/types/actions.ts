import { Product } from './Product';

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';

export interface addProduct {
  type: typeof ADD_PRODUCT;
  payload: Product;
}

export interface deleteProduct {
  type: typeof DELETE_PRODUCT;
  payload: Product;
}

export type ProductActionTypes = addProduct | deleteProduct;

export type AppActions = ProductActionTypes;
