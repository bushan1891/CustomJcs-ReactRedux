import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import config from './config_reducer';
import cart from '../components/Cart/cart_reducer';
import table from '../components/Table/table_reducer';
const rootReducer = combineReducers({
  form,
  auth:authReducer,
  config:config,
  table:table,
  cart:cart,
});

export default rootReducer;
