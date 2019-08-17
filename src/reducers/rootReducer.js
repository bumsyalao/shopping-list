/*
 src/reducers/rootReducer.js
*/
import { combineReducers } from 'redux';
import shoppingListReducer from './shoppingListReducer';

export default combineReducers({
  shoppingListReducer
});
