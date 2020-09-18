import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { combineReducers } from 'redux';

import productsReducer from './products';

export const rootReducer = combineReducers({
  products: productsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
