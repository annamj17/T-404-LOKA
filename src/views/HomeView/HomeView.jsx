/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import RenderHomeScreen from '../../components/RenderHomeScreen/renderHomeScreen';

const styles = StyleSheet.create({
  screens: {
    flex: 1
  }
});

class HomeView extends React.Component {
  static navigationOptions = {};

  render() {
    return (
      <View style={styles.screens}>
        <RenderHomeScreen navigation={this.props.navigation} />
      </View>
    );
  }
}

export default connect()(HomeView);
