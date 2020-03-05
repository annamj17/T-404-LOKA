import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import RenderPriceScreen from '../../components/RenderPriceScreen/renderPriceScreen';

const styles = StyleSheet.create({
  screens: {
    flex: 1
  }
});

class PriceView extends React.Component {
  static navigationOptions = {};

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.screens}>
        <RenderPriceScreen navigation={navigation} />
      </View>
    );
  }
}

export default connect()(PriceView);

PriceView.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};
