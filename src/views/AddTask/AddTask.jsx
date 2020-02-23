import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {
  Avatar, Icon, Header, Input, Button,
} from 'react-native-elements';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  buttonsContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    marginTop: '10%',
    alignItems: 'center',
  },
  buttons: {
    width: '80%',
    marginVertical: 10,
  },
});

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskAvatarUri: '',
    };
    this.getPermissionAsync();
  }

  goBack = () => {
    const { navigation } = this.props;

    navigation.goBack();
  };

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      await Permissions.askAsync(Permissions.CAMERA);
      await Permissions.askAsync(Permissions.CAMERA_ROLL);
    }
  };

  selectImage = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0,
      base64: true,
    });

    if (!result.cancelled) {
      this.setState({ taskAvatarUri: result });
    }
  };

  pushTask = () => {
    const { addTask } = this.props;
    addTask('', '');
  };

  render = () => {
    const { taskAvatarUri } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <Header
          leftComponent={
            <Icon name="arrow-back" color="#fff" onPress={this.goBack} />
          }
          centerComponent={{
            text: 'Task List',
            style: { color: '#fff', fontSize: 24 },
          }}
        />
        <View style={styles.buttonsContainer}>
          <Avatar
            rounded
            size="xlarge"
            source={{
              uri:
                taskAvatarUri.uri
                || 'https://via.placeholder.com/150/F2F2F2/F2F2F2',
            }}
            onPress={this.selectImage}
            showEditButton
          />
          <Input
            placeholder="Task description"
            containerStyle={styles.buttons}
          />
          <Button
            title="Create task"
            onPress={() => this.pushTask()}
            containerStyle={styles.buttons}
          />
        </View>
      </View>
    );
  };
}

AddTask.propTypes = {
  addTask: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default AddTask;
