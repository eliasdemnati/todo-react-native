import React from 'react';
import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';
import Navigator from './views';
import store from './redux/store';

const App = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

export default registerRootComponent(App);
