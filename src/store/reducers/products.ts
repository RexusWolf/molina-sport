import { ADD_PRODUCT, ProductAction } from '../types/actions';
import { ProductsState } from '../types/Product';

const initialProducts: ProductsState = {
  products: [],
};

export const productsReducer = (
  state: ProductsState = initialProducts,
  action: ProductAction
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
