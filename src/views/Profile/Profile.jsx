import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import {
  Avatar, Header, Icon, Text,
} from 'react-native-elements';

const styles = StyleSheet.create({
  profileContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20%',
  },
});

class Profile extends Component {
  goBack = () => {
    const { navigation } = this.props;

    navigation.goBack();
  }

  render = () => (
    <View style={styles.mainContainer}>
      <Header
        leftComponent={<Icon name="arrow-back" color="#fff" onPress={() => this.goBack()} />}
        centerComponent={{ text: 'Task List', style: { color: '#fff', fontSize: 24 } }}
      />
      <View style={styles.profileContainer}>
        <Avatar
          rounded
          size="xlarge"
          source={{
            uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          }}
        />
        <Text h1>{'{firstName}'}</Text>
        <Text h2>{'{lastName}'}</Text>
        <Text h2>{'{email}'}</Text>
      </View>
    </View>
  );
}

Profile.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default Profile;
