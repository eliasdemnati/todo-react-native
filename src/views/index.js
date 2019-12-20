import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './Home';
import TestComponent from './TestComponent';

const MainNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  TestComponent: {
    screen: TestComponent,
  },
});

export default createAppContainer(MainNavigator);
