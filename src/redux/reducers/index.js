import { combineReducers } from 'redux';
import TestReducer from './TestReducer';

const appReducer = combineReducers({
  test: TestReducer,
});

export default appReducer;
