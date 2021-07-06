import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { CartReducer } from './cart/cartReducer';
import { ProductReducer } from "./product/productReducer";
import { UserReducer } from "./user/userReducer";
import { orderReducer } from './order/orderReducer';
import { errorReducer } from './error/errorReducer';

const reducers = combineReducers({
    product: ProductReducer,
    cart: CartReducer,
    user: UserReducer,
    order: orderReducer,
    errors: errorReducer
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

// Basic export to use the middleware and give getState type
export type RootState = ReturnType<typeof store.getState>
// Basic export to use the middleware and give dispatch type
export type AppDispatch = typeof store.dispatch

export default store;