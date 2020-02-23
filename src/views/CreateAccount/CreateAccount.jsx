import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { Header, Icon, Input, Button, Avatar } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

const styles = StyleSheet.create({
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

class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      displayName: '',
      avatar: '',
    };
  }

  UNSAFE_componentWillReceiveProps = (nextProps) => {
    if (nextProps.isLogged) {
      this.goBack();
    }
  }

  goBack = () => {
    const { navigation } = this.props;

    navigation.goBack();
  };

  onChangeEmail = email => {
    this.setState({
      email,
    });
  };

  onChangeName = displayName => {
    this.setState({
      displayName,
    });
  };

  onChangePassword = password => {
    this.setState({
      password,
    });
  };

  createAccount = () => {
    const { email, password, displayName } = this.state;
    const { createAccount } = this.props;

    createAccount(email, password, displayName);
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
      this.setState({ avatar: result });
    }
  };

  render = () => {
    const { avatar } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <Header
          leftComponent={
            <Icon
              name='arrow-back'
              color='#fff'
              onPress={() => this.goBack()}
            />
          }
          centerComponent={{
            text: 'Task List',
            style: { color: '#fff', fontSize: 24 },
          }}
        />
        <View style={styles.buttonsContainer}>
          <Avatar
            rounded
            size='xlarge'
            source={{
              uri:
                avatar.uri || 'https://via.placeholder.com/150/F2F2F2/F2F2F2',
            }}
            onPress={this.selectImage}
            showEditButton
          />
          <Input
            placeholder='displayName'
            onChangeText={text => this.onChangeName(text)}
            containerStyle={styles.buttons}
          />
          <Input
            placeholder='Email'
            onChangeText={text => this.onChangeEmail(text)}
            containerStyle={styles.buttons}
          />
          <Input
            placeholder='Password'
            secureTextEntry
            onChangeText={text => this.onChangePassword(text)}
            containerStyle={styles.buttons}
          />
          <Button
            title='Create an account'
            onPress={() => this.createAccount()}
            containerStyle={styles.buttons}
          />
        </View>
      </View>
    );
  };
}

CreateAccount.propTypes = {
  createAccount: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default CreateAccount;
