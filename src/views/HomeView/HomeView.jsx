/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import RenderHomeScreen from '../../components/RenderHomeScreen/renderHomeScreen';
import HeaderImage from '../../components/HeaderLogo/headerLogo';

const styles = StyleSheet.create({
  screens: {
    flex: 1
  }
});

class HomeView extends React.Component {
  static navigationOptions = {
    headerLeft: () => <HeaderImage />,
    headerTitle: () => null
  };

  render() {
    return (
      <View style={styles.screens}>
        <RenderHomeScreen navigation={this.props.navigation} />
      </View>
    );
  }
}

export default connect()(HomeView);
