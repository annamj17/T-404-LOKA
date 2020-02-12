import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  screens: {
    flex: 1
  }
});

class LoginView extends React.Component {
  static navigationOptions = {
    headerTitle: ''
  };

  render() {
    return (
      <View style={styles.screens}>
        <Text>HALLO</Text>
      </View>
    );
  }
}

export default connect()(LoginView);
