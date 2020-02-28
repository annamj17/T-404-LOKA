import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import RenderProductScreen from '../../components/RenderPriceScreen/renderPriceScreen';

const styles = StyleSheet.create({
  screens: {
    flex: 1
  }
});

class PriceView extends React.Component {
  static navigationOptions = {};

  render() {
    return (
      <View style={styles.screens}>
        <RenderProductScreen />
      </View>
    );
  }
}

export default connect()(PriceView);
