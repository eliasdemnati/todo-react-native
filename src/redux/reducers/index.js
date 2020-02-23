import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import AccountReducer from './AccountReducer';

const appReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  account: AccountReducer,
});

export default appReducer;
