import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Header, ListItem, Icon } from 'react-native-elements';
import GestureRecognizer from 'react-native-swipe-gestures';
import firebase from '../../services/firebase';

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }

  componentDidMount = () => {
    const userId = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref(`users/${userId}/tasks/`)
      .once('value')
      .then((snapshot) => {
        const lists = snapshot.val();
        const tasks = [];
        Object.values(lists).forEach((value) => {
          tasks.push(value);
        });
        this.setState({ tasks });
      });
  };

  deleteElement = (task) => {
    console.log(`Delete task: ${task.desc}`);
  };

  goToPage = (page) => {
    const {
      navigation: { navigate },
    } = this.props;

    navigate(page);
  };

  render = () => {
    const { tasks } = this.state;

    return (
      <View>
        <Header
          leftComponent={(
            <Icon
              name="arrow-back"
              color="#fff"
              onPress={() => this.goToPage('Home')}
            />
          )}
          centerComponent={{
            text: 'Task List',
            style: { color: '#fff', fontSize: 24 },
          }}
          rightComponent={(
            <Icon
              name="add"
              color="#fff"
              onPress={() => this.goToPage('AddTask')}
            />
          )}
        />
        {tasks.map((task) => (
          <GestureRecognizer
            onSwipeRight={() => this.deleteElement(task)}
            key={task.id}
          >
            <ListItem
              key={task.id}
              leftAvatar={{ source: { uri: task.img } }}
              title={task.description}
              checkmark={task.done}
              bottomDivider
            />
          </GestureRecognizer>
        ))}
      </View>
    );
  };
}

TaskList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default TaskList;
