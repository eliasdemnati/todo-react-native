import React from 'react';
import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-native-elements';
import Navigator from './views';
import store from './redux/store';

const theme = {
  colors: {
    primary: '#7E57C2',
  },
};

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Navigator />
    </ThemeProvider>
  </Provider>
);

export default registerRootComponent(App);
