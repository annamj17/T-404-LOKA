import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import RenderHomeScreen from '../../components/RenderHomeScreen/renderHomeScreen';

const styles = StyleSheet.create({
  screens: {
    flex: 1
  }
});

class HomeView extends React.Component {
  static navigationOptions = {};

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.screens}>
        <RenderHomeScreen navigation={navigation} />
      </View>
    );
  }
}

export default connect()(HomeView);

HomeView.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};
