import {createStore, applyMiddleware, compose} from 'redux';
import {reducers} from './reducers';
import thunk from 'redux-thunk';



let store = createStore(reducers, compose(applyMiddleware(thunk)));

export default store;