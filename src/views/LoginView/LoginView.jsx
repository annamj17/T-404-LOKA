import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import RenderLogin from '../../components/RenderLogin/renderLogin';

const styles = StyleSheet.create({
  screens: {
    flex: 1
  }
});

class LoginView extends React.Component {
  static navigationOptions = {
    headerShown: false
  };

  render() {
    return (
      <View style={styles.screens}>
        <RenderLogin />
      </View>
    );
  }
}

export default connect()(LoginView);
