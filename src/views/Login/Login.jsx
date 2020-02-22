import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import {
  Header, Icon, Input, Button,
} from 'react-native-elements';

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

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  goBack = () => {
    const { navigation } = this.props;

    navigation.goBack();
  }

  onChangeEmail = (email) => {
    this.setState({
      email,
    });
  }

  onChangePassword = (password) => {
    this.setState({
      password,
    });
  }

  render = () => (
    <View style={{ flex: 1 }}>
      <Header
        leftComponent={<Icon name="arrow-back" color="#fff" onPress={() => this.goBack()} />}
        centerComponent={{ text: 'Task List', style: { color: '#fff', fontSize: 24 } }}
      />
      <View style={styles.buttonsContainer}>
        <Input
          placeholder="Email"
          onChangeText={(text) => this.onChangeEmail(text)}
          containerStyle={styles.buttons}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => this.onChangePassword(text)}
          containerStyle={styles.buttons}
        />
        <Button
          title="Login"
          onPress={() => this.createAccount()}
          containerStyle={styles.buttons}
        />
      </View>
    </View>
  );
}

Login.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
