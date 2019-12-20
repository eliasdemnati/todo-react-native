import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';

class TestComponent extends Component {
  static nativationOption = {
    title: 'Test',
  };

  render = () => {
    const { navigation: { goBack } } = this.props;

    return (
      <View>
        <Text>TestComponent</Text>
        <Button
          title="Go back to home"
          onPress={() => goBack()}
        />
      </View>
    );
  };
}

TestComponent.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default TestComponent;
