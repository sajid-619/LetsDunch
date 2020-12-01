import { combineReducers } from 'redux';
import auth from './auth';
import alert from './alert';
import address from './address';
const rootReducer = combineReducers({
  auth,
  alert,
  address,
});

export default rootReducer;
