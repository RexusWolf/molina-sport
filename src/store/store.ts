import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import productsReducer from './reducers/products';

export const rootReducer = combineReducers({
  products: productsReducer,
});

export const store = createStore(productsReducer, applyMiddleware(thunk));
