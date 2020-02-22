import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './Home';
import CreateAccount from './CreateAccount';
import TaskList from './TaskList';
import AddTask from './AddTask';
import Profile from './Profile';
import Login from './Login';

const MainNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  TaskList: {
    screen: TaskList,
  },
  CreateAccount: {
    screen: CreateAccount,
  },
  AddTask: {
    screen: AddTask,
  },
  Profile: {
    screen: Profile,
  },
  Login: {
    screen: Login,
  },
}, {
  defaultNavigationOptions: {
    header: null,
  },
});

export default createAppContainer(MainNavigator);
