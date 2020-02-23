import React from 'react';
import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-native-elements';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import Navigator from './views';
import store from './redux/store';
import firebase from './services/firebase';

const theme = {
  colors: {
    primary: '#7E57C2',
  },
};

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

const App = () => (
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <ThemeProvider theme={theme}>
        <Navigator />
      </ThemeProvider>
    </ReactReduxFirebaseProvider>
  </Provider>
);

export default registerRootComponent(App);
