import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Image, Header, Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import icon from '../../assets/icon.png';

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

const Home = ({ navigation: { navigate } }) => (
  <View style={{ flex: 1 }}>
    <Header
      centerComponent={{ text: 'Task List', style: { color: '#fff', fontSize: 24 } }}
    />
    <Image
      source={icon}
      style={{ width: 200, height: 200 }}
      containerStyle={{ alignSelf: 'center' }}
    />
    <View style={styles.buttonsContainer}>
      <Button
        title="Create an account"
        onPress={() => navigate('CreateAccount')}
        containerStyle={styles.buttons}
      />
      <Button
        title="Login"
        onPress={() => navigate('Login')}
        containerStyle={styles.buttons}
      />
      <Button
        title="Task List"
        onPress={() => navigate('TaskList')}
        containerStyle={styles.buttons}
      />
      <Button
        title="My Profile"
        onPress={() => navigate('Profile')}
        containerStyle={styles.buttons}
      />
    </View>
  </View>
);

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Home;
