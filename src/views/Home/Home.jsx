import React, { Component } from 'react';
import { Button } from 'react-native';
import PropTypes from 'prop-types';

class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  render = () => {
    const { navigation: { navigate } } = this.props;

    return (
      <Button
        title="Go to navigation test"
        onPress={() => navigate('TestComponent')}
      />
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Home;
