import { combineReducers } from 'redux';
import cartReducer from './cartReducers.jsx';
import productsReducer from './productReducers.jsx'; 

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer 
});

export default rootReducer;
