import {combineReducers} from 'redux';
import filterReducer from './filter';
import pizzasReducer from './pizzas';
import cartReducer from './cart';


export const reducers = combineReducers({
	filterReducer,
	cartReducer,
	pizzasReducer
});
