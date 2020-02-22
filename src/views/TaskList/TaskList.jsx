import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Header, ListItem, Icon } from 'react-native-elements';
import GestureRecognizer from 'react-native-swipe-gestures';

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [{
        id: 0,
        desc: 'Acheter du pain',
        img: 'https://resize-elle.ladmedia.fr/r/618,769,force,ffffff/img/var/plain_site/storage/images/elle-a-table/recettes-de-cuisine/pain-au-mais-2064432/21569428-3-fre-FR/Pain-au-mais.jpg',
        done: false,
      }, {
        id: 1,
        desc: 'Acheter du lait',
        img: 'https://www.carrefour.fr/media/540x540/Photosite/PGC/P.L.S./3245414187498_PHOTOSITE_20170627_161642_0.jpg?placeholder=1',
        done: true,
      }],
    };
  }

  componentDidMount = () => {
    console.log('fetch task list');
  }

  deleteElement = (task) => {
    console.log(`Delete task: ${task.desc}`);
  }

  goToPage = (page) => {
    const { navigation: { navigate } } = this.props;

    navigate(page);
  }


  render = () => {
    const { tasks } = this.state;

    return (
      <View>
        <Header
          leftComponent={<Icon name="arrow-back" color="#fff" onPress={() => this.goToPage('Home')} />}
          centerComponent={{ text: 'Task List', style: { color: '#fff', fontSize: 24 } }}
          rightComponent={<Icon name="add" color="#fff" onPress={() => this.goToPage('AddTask')} />}
        />
        {
          tasks.map((task) => (
            <GestureRecognizer
              onSwipeRight={() => this.deleteElement(task)}
              key={task.id}
            >
              <ListItem
                key={task.id}
                leftAvatar={{ source: { uri: task.img } }}
                title={task.desc}
                checkmark={task.done}
                bottomDivider
              />
            </GestureRecognizer>
          ))
        }
      </View>
    );
  }
}

TaskList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default TaskList;
