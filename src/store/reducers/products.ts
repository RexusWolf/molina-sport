import { AnyAction } from 'redux';
import { ADD_PRODUCT } from '../types/actions';
import { ProductsState } from '../types/Product';

const initialProducts: ProductsState = {
  products: [],
};

export const productsReducer = (
  state: ProductsState = initialProducts,
  action: AnyAction
): ProductsState => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
};

export default productsReducer;
