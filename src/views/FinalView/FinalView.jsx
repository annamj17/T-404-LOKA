import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import RenderFinalScreen from '../../components/RenderFinalScreen/renderFinalScreen';

const styles = StyleSheet.create({
  screens: {
    flex: 1
  }
});

class FinalView extends React.Component {
  static navigationOptions = {};

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.screens}>
        <RenderFinalScreen navigation={navigation} />
      </View>
    );
  }
}

export default connect()(FinalView);

FinalView.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};
