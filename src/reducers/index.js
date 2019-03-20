import { combineReducers } from 'redux';
import stockReducer from './stock';

export default combineReducers({
  stock: stockReducer
});
