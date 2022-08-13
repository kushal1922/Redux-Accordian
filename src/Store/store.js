import { createStore } from 'redux';
import { reducer } from '../Reducers/reducer';
import { applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'

const store = createStore(reducer,applyMiddleware(thunkMiddleware));




export default store;

