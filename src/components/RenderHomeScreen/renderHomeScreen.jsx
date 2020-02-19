import React from 'react';
import { View, Text } from 'react-native';

class RenderHomeScreen extends React.Component {
  static navigationOptions = {
    headerShown: false
  };

  render() {
    return (
      <View>
        <Text>Hallo</Text>
      </View>
    );
  }
}
export default RenderHomeScreen;
