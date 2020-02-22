import { combineReducers } from 'redux';
import AccountReducer from './AccountReducer';

const appReducer = combineReducers({
  account: AccountReducer,
});

export default appReducer;
