import { createStore, combineReducers } from 'redux';
import productsReducer from '../reducers/productReducers.jsx';
import cartReducer from '../reducers/cartReducers.jsx'; 

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
});

const store = createStore(rootReducer);

export default store;
