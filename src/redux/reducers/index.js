import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import AccountReducer from './AccountReducer';
import TaskReducer from './TaskReducer';

const appReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  account: AccountReducer,
  task: TaskReducer,
});

export default appReducer;
