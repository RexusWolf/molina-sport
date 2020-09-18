import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import productsReducer from './reducers/products';

export const store = createStore(productsReducer, applyMiddleware(thunk));
