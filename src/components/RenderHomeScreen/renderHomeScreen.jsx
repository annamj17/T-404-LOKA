import React from 'react';
import { View, Text } from 'react-native';

import styles from '../RenderLogin/styles';

class RenderHomeScreen extends React.Component {
  static navigationOptions = {
    headerShown: false
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>HomeScreen</Text>
      </View>
    );
  }
}
export default RenderHomeScreen;
